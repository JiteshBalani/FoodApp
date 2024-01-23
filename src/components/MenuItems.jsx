import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import { menuImage } from '../utils/common';
import FOOD from './FOOD.png'
import AddedMenuItems from './AddedMenuItems';

const MenuItems = ({ items }) => {

  const cartItems = useSelector((store) => store.cart.items);

  const getVegNonVegColor = (vegClassifier) => {
    return vegClassifier === 'VEG' ? ' rounded-sm border-2 border-green-600 text-green-600 w-fit px-1' : 'rounded-sm border-2 border-red-600 text-red-600 w-fit px-1';
  };

  const bestSeller = (item) => {
    return item === true ? 'text-yellow-500 w-fit px-1 rounded-sm' : '';
  };

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const itemsCount = (item) => {
    return cartItems.filter((menuItem) => menuItem === item).length;
  };
  
  return (
    <div>
      {items.map((data) => (
        <div key={data.card?.info?.id} className='menu-items flex justify-between border-b-[1px] py-8 items-center border-gray-300'>
          <div>
            <div className=' flex items-center space-x-1'>
              <div className={`text-xs font-semibold ${getVegNonVegColor(data.card?.info?.itemAttribute.vegClassifier)}`}>{data.card?.info?.itemAttribute.vegClassifier}</div>
              <div className={`text-sm animate-bounce font-semibold ${bestSeller(data.card?.info?.isBestseller)}`}>{data.card?.info?.isBestseller === true ? '⭐BESTSELLER' : ''}</div>
            </div>
            <div className='text-lg font-semibold'>{data.card?.info?.name}</div>
            <div className='text-sm'>&#8377; {data.card?.info?.defaultPrice / 100 || data.card?.info?.price / 100}</div>
            <div className='font-thin text-gray-500 pt-4 pr-10'>{data.card?.info?.description}</div>
          </div>
          <div className='flex flex-col items-center ml-2'>

            {data.card?.info?.imageId === undefined ? <img className='min-w-[118px] min-h-[96px] max-w-[118px] max-h-[96px] rounded-md' src={FOOD}></img> :
              <img className='min-w-[118px] min-h-[96px] max-w-[118px] max-h-[96px] rounded-md'
                src={menuImage + data.card?.info?.imageId}
                style={{ objectFit: 'cover' }}
              ></img>
            }

            {/* "ADD" button and " | - 2 + | " button logic */}
            {cartItems.includes(data) ?
              <AddedMenuItems handleAddItem={() => handleAddItem(data)}
                handleRemoveItem={() => handleRemoveItem(data)}
                itemsCount={itemsCount(data)} /> :
              <button
                onClick={() => handleAddItem(data)}
                className='w-[94px] h-[34px] mt-[-10px]  hover:shadow-xl bg-white px-3 text-green-600 border-[1px] py-1 rounded-lg font-medium cursor-pointer'>Add</button>

            }
            {/* -------------------------------- "ADD" button and " | - 2 + | " button logic */}

          </div>
        </div>
      ))}

    </div>
  )
}

export default MenuItems