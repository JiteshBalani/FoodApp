import { useState } from "react";
import MenuItems from "./MenuItems"

const MenuCategory = ({data, showItems, setShowItems}) => {

  // const [showItems, setShowItems] = useState(false);
  
  const showItemsList = () => {
    setShowItems();
  }

  return (
        <div>
        {/* onClick={showItemsList} */}
          <div className='flex justify-between items-center pb-2 pt-6' onClick={showItemsList}>
            <div className='font-[625] text-lg'>{data.title} ({data.itemCards?.length})</div>
            <div className='font-[625] text-lg cursor-pointer hover:shadow-inner hover:bg-red-200 hover:rounded-lg p-1'>{showItems ? '🔼' : '🔽'}</div>
          </div>
          { showItems && <MenuItems items={data.itemCards} />}
        </div>
  )
}

export default MenuCategory