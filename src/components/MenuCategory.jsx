
const MenuCategory = ({data}) => {
  return (
    // {categories.map((heading, idx) =>
        <div>
          <div className='flex justify-between pb-2'>
            <div className='pt-6 font-[625] text-lg'>{data.title} ({data.itemCards?.length})</div>
            <div className='pt-6 font-[625] text-lg cursor-pointer'>🔽</div>
          </div>
          
          <div className='border-b-[12px] border-gray-300'></div>
        </div>


    //   )}
  )
}

export default MenuCategory