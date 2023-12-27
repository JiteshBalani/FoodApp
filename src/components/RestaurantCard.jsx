import { resBanner } from "../utils/common";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        sla: { deliveryTime },
        cuisines,
    } = resData?.info;
    return (
        <div
            className='flex flex-col items-center w-64 rounded-md space-y-1'
        >
            <div><img
                className='h-[180px] w-screen rounded-md bg-center bg-cover'
                alt='restaurant_image'
                src={resBanner + cloudinaryImageId}
            ></img></div>
            <div className='text-xl font-semibold'>{name}</div>
            <div className='flex text-lg font-semibold space-x-3'>
                <div className='flex '><h2 className='text-green-600'>&#9734;</h2> {avgRating}</div>
                <div>~{deliveryTime} mins</div>
            </div>
            <div className='text-md font-thin'>{cuisines.join(", ")}</div>

        </div>
    )
}

export default RestaurantCard