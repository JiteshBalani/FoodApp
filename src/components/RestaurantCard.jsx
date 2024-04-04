import { resBanner } from "../utils/common";

const RestaurantCard = ({resData, offer = {}}) => {

    const {
        cloudinaryImageId,
        name,
        avgRating,
        sla: { deliveryTime },
        cuisines,
        costForTwo,
    } = resData?.info || {};

    const {
        aggregatedDiscountInfoV3: {header, subHeader} = {}
    } = offer?.info || {};
    return (
        <div
            className='flex flex-col items-center w-[320px] rounded-md space-y-1 cursor-pointer hover:text-[#F05455] '
        >
            <div className="relative">
                <div className="flex gap-1 absolute inset-x-0 bottom-0 text-white bg-black bg-opacity-15 pl-1 font-bold text-xl shadow-inner ">
                    <h1 className="top">{header}</h1>
                    <h1>{subHeader}</h1>
                </div>
                <img
                    className='h-[215px] w-screen rounded-md bg-center bg-cover'
                    alt='restaurant_image'
                    style={{objectFit:'cover'}}
                    src={resBanner + cloudinaryImageId}
                ></img>
            </div>
            <div className='text-xl font-semibold text-center w-full truncate'>{name}</div>
            <div className='flex text-lg font-semibold space-x-3'>
                <div className='flex '><h2 className='text-green-600'>&#9734;</h2> {avgRating}</div>
                <div>~{deliveryTime} mins</div>
            </div>
            <div className='text-md text-center font-thin truncate w-full'>{cuisines.join(", ")}</div>
            <div className="text-md text-center text-purple-500 font-semibold">{costForTwo.toUpperCase()}</div>


        </div>
    )
}

export default RestaurantCard