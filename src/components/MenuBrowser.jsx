
const MenuBrowser = ({data}) => {

  return (
    <div className="w-6/12 border-[1px] corder-gray-200 flex justify-between items-center">
            <div className='text-lg'>{data.title}</div>
            <div className='text-lg'>{data.itemCards?.length}</div>
    </div>
  )
}

export default MenuBrowser