const Navbar = () => {
  return (
    <div className='px-[200px] py-2 text-xl flex justify-between items-center border-b-2'>
      <div className="flex items-center space-x-1">
        <img
          className="w-[60px] h-[60px] rounded-md"
          alt="brand_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZOX5_X_GNmsVPTdmVIBwbt2yNz9rPihllg&usqp=CAU"></img>
        <div className="text-3xl font-semibold text-[#F05455]">Yummy Tummy</div>
      </div>
      <div className="flex space-x-8 pr-5 text-[#F05455] font-semibold">
        <div className="flex items-center space-x-1">
          <img
            alt="offer-icon"
            className="w-[20px] h-[20px]"
            src="https://cdn-icons-png.flaticon.com/512/3508/3508366.png"></img>
          <div className="cursor-pointer">Home</div>
        </div>
        <div className="flex items-center space-x-1">
          <img
            alt="offer-icon"
            className="w-[20px] h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq9jCIZLTV9PhvgX_Y-oj6MUjba9Vm37q2g&usqp=CAU"></img>
          <div className="cursor-pointer">Offers</div>
        </div>
        <div className="flex items-center space-x-1">
          <img
            alt="offer-icon"
            className="w-[20px] h-[20px]"
            src="https://static.thenounproject.com/png/2643287-200.png"></img>
          <div className="cursor-pointer">Help</div>
        </div>
        <div><img
          className="w-[40px] h-[40px] cursor-pointer"
          alt="cart_icon"
          src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png"
        ></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar