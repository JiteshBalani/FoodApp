import React, { useState, useEffect } from 'react'
import { MENU_API } from '../utils/common';
import ShimmerMenu from './ShimmerMenu';

const Menu = () => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.25005&lng=73.146248&restaurantId=75536&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);

  };

  // const {name, cuisines, areaName, locality} =resInfo?.cards[0]?.card?.card?.info;

  if (resInfo === null) return <ShimmerMenu />;

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
          <div className='font-semibold text-green-700 border-b-2 text-center text-lg'>&#9734; {avgRating}</div>
          <div className='pt-1 text-xs text-gray-500 text-center'>{totalRatingsString}</div>
        </div>
      </div>
      <div className=' text-gray-500 border-b-2 border-dashed border-gray-300 pb-1'><span className='text-2xl'>&#128690;</span> {message}</div>
      <div className='font-extrabold'><span className='text-xl'>&#128338;	</span> {deliveryTime} MINS  <span className=' ml-3 text-md border-2 rounded-full border-black px-1'>&#8377;</span> {costForTwoMessage}</div>
      <div className='border-t-4'>
        {/* ------------------------------------------------------------------------------------------------Restaurant info ends here */}

        <div className='pt-6 font-semibold text-lg'>{category.title} ({menuItem.length})</div>

        {menuItem.map((item) => {

          return (
            <div key={item.card?.info?.id} className='flex justify-between border-b-[1px] py-8 items-center border-gray-400'>
              <div>
                <div className='text-lg font-semibold'>{item.card?.info?.name}</div>
                <div className='text-sm'>&#8377; {item.card?.info?.defaultPrice / 100 || item.card?.info?.price / 100}</div>
                <div className='font-thin text-gray-500 pt-4'>{item.card?.info?.description}</div>
              </div>
              <div>
                <button className='p-3 text-green-600 border-2 rounded-lg font-semibold cursor-pointer'>ADD</button>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Menu