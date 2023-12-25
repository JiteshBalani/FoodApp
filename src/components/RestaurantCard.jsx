import React from 'react'

const RestaurantCard = () => {
    return (
        <div
            className='flex flex-col items-center w-64 rounded-md'
        >
            <div><img
                className='h-[180px] w-screen rounded-md'
                alt='restaurant_image'
                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6'
            ></img></div>
            <div className='text-xl font-semibold'>McDonald's</div>
            <div className='flex text-lg font-semibold space-x-3'>
                <div className='flex '><h2 className='text-green-600'>&#9734;</h2> 4.3</div>
                <div>~20 mins</div>
            </div>
            <div className='text-md font-thin'>Burgers, Beverages, Cafe, Desserts</div>

        </div>
    )
}

export default RestaurantCard