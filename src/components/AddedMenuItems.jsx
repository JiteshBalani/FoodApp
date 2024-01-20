
const AddedMenuItems = ({handleAddItem, handleRemoveItem, itemsCount}) => {
  return (
    <div className="flex justify-between items-center w-[94px] h-[34px] mt-[-10px]  hover:shadow-xl bg-white px-3 text-green-600 border-[1px] py-1 rounded-lg font-medium cursor-pointer">
        <button 
        onClick={() => handleRemoveItem()}
        className="text-center text-red-400">-</button>
        <div className="text-center bg-blue-500 text-white px-2 ">{itemsCount}</div>
        <button 
        onClick={() => handleAddItem()}
        className="text-center text-green-400">+</button>
    </div>
  )
}

export default AddedMenuItems