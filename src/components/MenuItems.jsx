import { resBanner } from '../utils/common';

const MenuItems = ({ items }) => {

  const getVegNonVegColor = (vegClassifier) => {
    return vegClassifier === 'VEG' ? ' rounded-sm border-2 border-green-600 text-green-600 w-fit px-1' : 'rounded-sm border-2 border-red-600 text-red-600 w-fit px-1';
  };

  return (
    <div>
      {items.map((data) => (
        <div key={data.card?.info?.id} className='menu-items flex justify-between border-b-[1px] py-8 items-center border-gray-300'>
          <div>
            <div className={`text-xs font-semibold ${getVegNonVegColor(data.card?.info?.itemAttribute.vegClassifier)}`}>{data.card?.info?.itemAttribute.vegClassifier}</div>
            <div className='text-lg font-semibold'>{data.card?.info?.name}</div>
            <div className='text-sm'>&#8377; {data.card?.info?.defaultPrice / 100 || data.card?.info?.price / 100}</div>
            <div className='font-thin text-gray-500 pt-4 pr-10'>{data.card?.info?.description}</div>
          </div>
          <div className='flex flex-col items-center ml-2'>

            {data.imageId === undefined ? "" :
              <img className='min-w-[118px] min-h-[96px] max-w-[118px] max-h-[96px] rounded-md' src={resBanner + data.card?.info?.imageId}></img>
            }
            <button className='w-[94px] h-[34px] mt-[-10px] hover:shadow-xl bg-white px-3 text-green-600 border-[1px] py-1 rounded-lg font-medium cursor-pointer'>ADD</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default MenuItems