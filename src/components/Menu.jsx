import { useEffect, useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ShimmerMenu from './ShimmerMenu';
import { useParams } from 'react-router-dom';
import { resBanner } from '../utils/common';
import MenuCategory from './MenuCategory';
import MenuHeader from './MenuHeader';
import MenuCartBar from './MenuCartBar';
import { useSelector } from 'react-redux';
import MenuBrowser from './MenuBrowser';

const Menu = () => {

  const [showItems, setShowItems] = useState(0);
  const [menuHeader, setMenuHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 150;
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold) {
        setMenuHeader(true);
      } else {
        setMenuHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const cartItems = useSelector((store) => store.cart.items);


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
  } = resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[3]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);


  return (
    <div>
      <div className="px-[25vw] py-[50px] space-y-5 space-x-1 ">
        {menuHeader && <MenuHeader header={resInfo?.cards[2]?.card?.card?.info} />}

        {/* Restaurant info starts here */}
        <div className='flex items-center justify-between '>
          <div>
            <div className='text.xl font-semibold text-xl'>{name}</div>
            <div className='font-thin text-gray-500'>{cuisines.join(", ")} </div>
            <div className='font-thin text-gray-500 pr-10'>{labels[1]?.message}</div>
          </div>
          <div className='border-2 p-2 rounded-lg w-2/12 max-w-fit'>
            <div className='font-semibold text-green-700 border-b-[1px] text-center text-lg'><span className='text-xl'>&#9734;</span> {avgRating}</div>
            <div className='py-1 text-xs text-gray-500 text-center font-semibold'>{totalRatingsString}</div>
          </div>
        </div>
        <div className='font-[610] text-gray-700'><span className='text-xl'>&#128338;	</span> {deliveryTime} MINS  <span className=' ml-3 text-md border-2 rounded-full border-gray-700 px-1 mr-1'>&#8377;</span> {costForTwoMessage}</div>
        {/* ------------------------------------------------------------------------------------------------Restaurant info ends here */}


        {/* Menu Category and Category Items starts here  */}

        <div className='border-t-4 border-gray-500'>

          {categories.map((heading, idx) =>

            <div key={idx} >
              <MenuCategory data={heading?.card?.card}
                showItems={showItems === idx ? true : false}
                setShowItems={() => setShowItems(idx)}
              />
              <div className='border-b-[12px] border-gray-200'></div>
            </div>

          )}
          {/* ---------------------------------------------------------------------------------------Menu Category and Category Items ends here  */}

        </div>

        {cartItems.length > 0 ? <MenuCartBar /> : ""}

      </div>
      {/* <div 
        className='mx-[44vw] py-1 px-4 bottom-20 hover:shadow-inner hover:shadow-gray-400 bg-[#0078D7] text-white rounded-full w-fit flex justify-center items-center cursor-pointer z-50 fixed'
       >
        <span className='text-2xl mr-1'>🍽</span>
        <div className='text-md'>BROWSE MENU</div>
      </div> */}
    </div>
  )
}

export default Menu