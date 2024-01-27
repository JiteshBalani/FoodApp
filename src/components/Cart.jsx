import { useDispatch, useSelector } from "react-redux"
import MenuItems from "./MenuItems"
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      className="min-h-screen px-[600px] mt-0 py-[50px] flex flex-col space-y-2 bg-gray-200"
    >
      <div className="space-y-5 space-x-1">
        <div><Link className="text-2xl" to="/" >🔙Back to Home</Link></div>
      </div>
      <div className="text-2xl font-semibold text-center">Cart</div>

      {cartItems.length > 0 ? <button className="border-gray-300 rounded-md border-2 px-1 w-fit text-center self-center text-red-500 font-semibold"
        onClick={handleClearCart}
      >Clear Cart</button> : ''}

      {cartItems?.length === 0 ? (
        <div className="flex flex-col justify-center items-center space-y-10 pt-4">
        <img src="https://pennpowergroup.com/images/EmptyCart.png" alt="empty-cart_icon"></img>
        <h1 className="text-center bg-[#E9BAC2] text-[#B60F20] font-semibold text-2xl p-5 rounded-md">
          Cart is empty! Explore the top restaurants with
          <Link className="font-semibold text-black cursor-pointer underline-offset-2 underline mx-2" to="/offers">discounts</Link>
          on your favorite food and beverages.</h1>
          </div>) :
        <MenuItems items={cartItems} />

      }

      
      {cartItems.length === 0 ? "" : 
      <div className="flex justify-between bg-[#F05455] rounded-md p-2 font-semibold fixed w-[651px] bottom-12">
        <div>Total Cart Value: </div>
        <div>&#8377; {totalAmount} </div>
      </div>}
    </div>
  )
}

export default Cart