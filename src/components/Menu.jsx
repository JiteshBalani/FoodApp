import { useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ShimmerMenu from './ShimmerMenu';
import { useParams } from 'react-router-dom';
import { resBanner } from '../utils/common';
import MenuCategory from './MenuCategory';
import MenuItems from './MenuItems';
import LogoNavbar from './LogoNavbar.png'

const Menu = () => {

  const [showItems, setShowItems] = useState(false);

  const showItemsList = () => {
    setShowItems(!showItems);
  }

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  const getVegNonVegColor = (vegClassifier) => {
    return vegClassifier === 'VEG' ? ' rounded-sm border-2 border-green-600 text-green-600 w-fit px-1' : 'rounded-sm border-2 border-red-600 text-red-600 w-fit px-1';
  };

  const {
    name,
    cuisines,
    labels,
    avgRating,
    totalRatingsString,
    feeDetails: { icon,  message },
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
    <div className="px-[25vw] py-[50px] space-y-5 space-x-1 ">

      {/* Restaurant info starts here */}

      <div className='flex items-center justify-between'>
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
      <div className=' text-gray-500 border-b-2 border-dashed border-gray-300 pb-3 flex items-center'><img className='w-6 mr-1 max-h-8' src={resBanner + icon}></img>  { message || ""}</div>
      <div className='font-[610] text-gray-700'><span className='text-xl'>&#128338;	</span> {deliveryTime} MINS  <span className=' ml-3 text-md border-2 rounded-full border-gray-700 px-1'>&#8377;</span> {costForTwoMessage}</div>

      {/* ------------------------------------------------------------------------------------------------Restaurant info ends here */}



      {/* Menu Category and Category Items starts here  */}

      <div className='border-t-4'>

        {categories.map((heading, idx) =>
          <div key={idx} className='' onClick={showItemsList}>
            <div className='flex justify-between pb-2'>
              <div className='pt-6 font-[625] text-lg'>{heading.card?.card?.title} ({heading.card?.card?.itemCards?.length})</div>
              <div className='pt-6 font-[625] text-lg cursor-pointer'>🔽</div>
            </div>
            {heading.card?.card?.itemCards?.map((item) => {

              return  (

                showItems && <div key={item.card?.info?.id} className='menu-items flex justify-between border-b-[1px] py-8 items-center border-gray-300'>
                  <div>
                    <div className={`text-xs font-semibold ${getVegNonVegColor(item.card?.info?.itemAttribute.vegClassifier)}`}>{item.card?.info?.itemAttribute.vegClassifier}</div>
                    <div className='text-lg font-semibold'>{item.card?.info?.name}</div>
                    <div className='text-sm'>&#8377; {item.card?.info?.defaultPrice / 100 || item.card?.info?.price / 100}</div>
                    <div className='font-thin text-gray-500 pt-4 pr-10'>{item.card?.info?.description}</div>
                  </div>
                  <div className='flex flex-col items-center ml-2'>
                    
                    {item.card?.info?.imageId === undefined ? "" : 
                    <img className='min-w-[118px] min-h-[96px] max-w-[118px] max-h-[96px] rounded-md' src={resBanner + item.card?.info?.imageId}></img> 
                    }
                    <button className='w-[94px] h-[34px] mt-[-10px] hover:shadow-xl bg-white px-3 text-green-600 border-[1px] py-1 rounded-lg font-medium cursor-pointer'>ADD</button>
                  </div>
                </div>

              )
            })}
            <div className='border-b-[12px] border-gray-300'></div>
          </div>


        )}
        {/* ---------------------------------------------------------------------------------------Menu Category and Category Items ends here  */}

      </div>
    </div>
  )
}

export default Menu