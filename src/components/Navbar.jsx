import { useState } from "react"
import { Link } from "react-router-dom";
import '../index.css'
import LogoNavbar from './LogoNavbar.png'
import useOnlineStatus from "../utils/useOnlineStatus";

const Navbar = () => {

  const [log, setLog] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className='px-[200px] py-2 text-xl flex justify-between items-center border-b-2 shadow-xl bg-white'>
      <div className="flex items-center space-x-1 cursor-pointer">
        <Link to="/" className="flex items-center space-x-1">
          <img
            className="w-[70px] h-[70px] rounded-md"
            alt="yummy-tummy_logo"
            src={LogoNavbar}
            ></img>
          <div className="yummy-tummy-title text-3xl font-black pb-3">yummy-tummy</div>
        </Link>
      </div>
      <div className="flex space-x-8 pr-5 text-[#F05455] font-semibold">
      <div className="flex items-center space-x-1 font-thin text-sm">
          <div className="cursor-pointer underline-offset-4">{onlineStatus === true ? "🟢 Active" : "🔴 Offline"}</div>
        </div>
        <div className="flex items-center space-x-1 hover:ring-2 ring-[#F05455] px-1">
          <img
            alt="offer-icon"
            className="w-[20px] h-[20px]"
            src="https://cdn-icons-png.flaticon.com/512/3508/3508366.png"></img>
          <div className="cursor-pointer"><Link to="/">Home</Link></div>
        </div>
        <div className="flex items-center space-x-1 hover:ring-2 ring-[#F05455] px-1">
          <img
            alt="offer-icon"
            className="w-[20px] h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq9jCIZLTV9PhvgX_Y-oj6MUjba9Vm37q2g&usqp=CAU"></img>
          <div className="cursor-pointer"><Link to="/offers">Offers</Link></div>
          <div className="text-[10px] font-semibold mb-4 text-black">NEW</div>
        </div>
        <div className="flex items-center space-x-1 hover:ring-2 ring-[#F05455] px-1">
          <img
            alt="offer-icon"
            className="w-[20px] h-[20px]"
            src="https://static.thenounproject.com/png/2643287-200.png"></img>
          <div className="cursor-pointer"><Link to="/help">Help</Link></div>
        </div>
        <div className="flex items-center space-x-1">

          <div className="cursor-pointer rounded-md w-22 mx-2 px-2 py-1 border-[#F05455] text-center text-[#F05455] border-2"
            onClick={() => {
              log === 'Login' ? setLog('Logout') : setLog('Login')
            }}> {log} </div>
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