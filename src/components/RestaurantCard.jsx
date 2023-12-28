import { resBanner } from "../utils/common";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        sla: { deliveryTime },
        cuisines,
        costForTwo
    } = resData?.info;
    return (
        <div
            className='flex flex-col items-center w-[260px] rounded-md space-y-1 cursor-pointer '
        >
            <div><img
                className='h-[200px] w-screen rounded-md bg-center bg-cover'
                alt='restaurant_image'
                src={resBanner + cloudinaryImageId}
            ></img></div>
            <div className='text-xl font-semibold text-center w-full truncate'>{name}</div>
            <div className='flex text-lg font-semibold space-x-3'>
                <div className='flex '><h2 className='text-green-600'>&#9734;</h2> {avgRating}</div>
                <div>~{deliveryTime} mins</div>
            </div>
            <div className='text-md text-center font-thin truncate w-full'>{cuisines.join(", ")}</div>
            <div className="text-md text-center text-[#F05455] font-semibold">{costForTwo.toUpperCase()}</div>


        </div>
    )
}

export default RestaurantCard