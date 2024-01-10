import { useState } from "react";
import MenuItems from "./MenuItems"

const MenuCategory = ({data}) => {

  const [showItems, setShowItems] = useState(false);
  
  const showItemsList = () => {
    setShowItems(!showItems);
  }

  return (
        <div>
          <div className='flex justify-between pb-2' onClick={showItemsList}>
            <div className='pt-6 font-[625] text-lg'>{data.title} ({data.itemCards?.length})</div>
            <div className='pt-6 font-[625] text-lg cursor-pointer'>🔽</div>
          </div>
          { showItems && <MenuItems items={data.itemCards} />}
        </div>
  )
}

export default MenuCategory