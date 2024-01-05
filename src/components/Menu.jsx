import React, { useState, useEffect } from 'react'
import { MENU_API } from '../utils/common';
import ShimmerMenu from './ShimmerMenu';
import { useParams } from 'react-router-dom';

const Menu = () => {

  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);

  };

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
    feeDetails: { message },
    sla: { deliveryTime },
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const menuItem = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || "Menu";

  return (
    <div className="px-[500px] py-[50px] space-y-5 space-x-1 bg-gray-100">

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
      <div className=' text-gray-500 border-b-2 border-dashed border-gray-300 pb-1'> {message || ""}</div>
      <div className='font-[610] text-gray-700'><span className='text-xl'>&#128338;	</span> {deliveryTime} MINS  <span className=' ml-3 text-md border-2 rounded-full border-gray-700 px-1'>&#8377;</span> {costForTwoMessage}</div>
        {/* ------------------------------------------------------------------------------------------------Restaurant info ends here */}

      <div className='border-t-4'>
        <div className='pt-6 font-[625] text-xl'>{category.title} ({menuItem.length})</div>

        {menuItem.map((item) => {

          return (
            
            <div key={item.card?.info?.id} className='flex justify-between border-b-[1px] py-8 items-center border-gray-300'>
              <div>
                <div className={`text-xs font-semibold ${getVegNonVegColor(item.card?.info?.itemAttribute.vegClassifier)}`}>{item.card?.info?.itemAttribute.vegClassifier}</div>
                <div className='text-lg font-semibold'>{item.card?.info?.name}</div>
                <div className='text-sm'>&#8377; {item.card?.info?.defaultPrice / 100 || item.card?.info?.price / 100}</div>
                <div className='font-thin text-gray-500 pt-4 pr-10'>{item.card?.info?.description}</div>
              </div>
              <div>
                <button className='px-3 py-4 text-green-600 border-2 rounded-lg font-semibold cursor-pointer shadow-xl'>ADD</button>
              </div>
            </div>
          
          )
        })}
        <div className='border-b-[12px] border-gray-300'></div>

      </div>
    </div>
  )
}

export default Menu