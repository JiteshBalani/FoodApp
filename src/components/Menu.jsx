import { useEffect, useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ShimmerMenu from './ShimmerMenu';
import { useParams } from 'react-router-dom';
import { resBanner } from '../utils/common';
import MenuCategory from './MenuCategory';
import MenuHeader from './MenuHeader';

const Menu = () => {

  const [showItems, setShowItems] = useState(0);
  const [menuHeader, setMenuHeader] = useState(false);
  
  useEffect( () => {
    const handleScroll = () => {
      const scrollThreshold = 0;
      const currentScrollY = window.scrollY;

      if(currentScrollY > scrollThreshold) {
        setMenuHeader(true);
      } else {
        setMenuHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[]);


  // const showItemsList = () => {
  //   setShowItems(!showItems);
  // }

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    labels,
    avgRating,
    totalRatingsString,
    feeDetails: { icon, message },
    sla: { deliveryTime },
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
  <div>
    <div className="px-[25vw] py-[50px] space-y-5 space-x-1 ">
      {menuHeader && <MenuHeader header={resInfo?.cards[0]?.card?.card?.info}/>}

      {/* Restaurant info starts here */}
        <div className='flex items-center justify-between '>
          <div>
            <div className='text.xl font-semibold text-xl'>{name}</div>
            <div className='font-thin text-gray-500'>{cuisines.join(", ")} </div>
            <div className='font-thin text-gray-500 pr-10'>{labels[1]?.message}</div>
          </div>
          <div className='border-2 p-2 rounded-lg'>
            <div className='font-semibold text-green-700 border-b-2 text-center text-lg'><span className='text-2xl'>&#9734;</span> {avgRating}</div>
            <div className='pt-1 text-xs text-gray-500 text-center'>{totalRatingsString}</div>
          </div>
        </div>
        <div className=' text-gray-500 border-b-2 border-dashed border-gray-300 pb-3 flex items-center'><img className='w-6 mr-1 max-h-8' src={resBanner + icon}></img>  {message || "No info available ☹"}</div>
        <div className='font-[610] text-gray-700'><span className='text-xl'>&#128338;	</span> {deliveryTime} MINS  <span className=' ml-3 text-md border-2 rounded-full border-gray-700 px-1 mr-1'>&#8377;</span> {costForTwoMessage}</div>
      {/* ------------------------------------------------------------------------------------------------Restaurant info ends here */}


      {/* Menu Category and Category Items starts here  */}

      <div className='border-t-4 border-gray-500'>

        {categories.map((heading, idx) =>

          <div key={idx} >
            <MenuCategory data={heading.card?.card}
              showItems={showItems === idx ? true : false}
              setShowItems={() => setShowItems(idx)}
            />
            <div className='border-b-[12px] border-gray-200'></div>
          </div>

        )}
        {/* ---------------------------------------------------------------------------------------Menu Category and Category Items ends here  */}

      </div>
    </div>
    </div>
  )
}

export default Menu