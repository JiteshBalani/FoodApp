
const AddedMenuItems = ({handleAddItem, handleRemoveItem, itemsCount}) => {
  return (
    <div className="flex justify-between items-center w-[94px] h-[34px] mt-[-10px] ring hover:shadow-xl bg-gray-100 px-3 text-green-600 border-[1px] rounded-lg cursor-pointer">
        <button 
        onClick={() => handleRemoveItem()}
        className="text-center text-2xl text-red-400 font-semibold">-</button>
        <div className="text-center bg-blue-500 text-white px-2 border-2">{itemsCount}</div>
        <button 
        onClick={() => handleAddItem()}
        className="text-center text-2xl text-green-500 font-semibold">+</button>
    </div>
  )
}

export default AddedMenuItems