import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const MenuCartBar = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const totalAmount = useSelector((store) => store.cart.totalAmount)

    
    return (
        <div
            className="cursor-pointer flex w-6/12 justify-between items-center font-semibold bg-[#F05455] z-50 fixed p-2 bottom-4">
            <div className="p-1">{cartItems.length} Item | &#8377;{totalAmount}</div>
            <Link to="/cart">
            <div className="p-1 flex justify-center items-center">
            <div>VIEW CART</div> 
            <img
                className="ml-1 w-[25px] h-[20px] cursor-pointer "
                alt="cart_icon"
                src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
              ></img></div></Link>
        </div>
    )
}

export default MenuCartBar