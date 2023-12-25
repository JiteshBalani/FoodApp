const Navbar = () => {
  return (
    <div className='px-[200px] py-2 text-2xl flex justify-between items-center border-b-2'>
        <img 
        className="w-[70px] h-[70px]"
        alt="brand_logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZOX5_X_GNmsVPTdmVIBwbt2yNz9rPihllg&usqp=CAU"></img>
        <div className="flex space-x-8 pr-5">
            <div>Home</div>
            <div>Offers</div>
            <div>Help</div>
            <div><img
                  className="w-[40px] h-[40px]"
                  alt="cart_icon"
                  src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
                ></img>
            </div>
        </div>
    </div>
  )
}

export default Navbar