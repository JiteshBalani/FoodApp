import { useDispatch, useSelector } from "react-redux"
import MenuItems from "./MenuItems"
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div
      className="min-h-screen px-[600px] mt-0 py-[50px] flex flex-col space-y-2 bg-gray-200 "
    >
      <div className="space-y-5 space-x-1">
        <div><Link className="text-2xl" to="/" >🔙Back to Home</Link></div>
      </div>
      <div className="text-2xl font-semibold text-center">Cart</div>

      <button className="border-gray-300 rounded-md border-2 px-1 w-fit text-center self-center text-red-500 font-semibold"
        onClick={handleClearCart}
      >Clear Cart</button>

      {cartItems?.length === 0 && (
        <h1 className="text-center">Cart is empty!</h1>
      )}

      <MenuItems items={cartItems} />
      <div className="flex justify-between">
        <div>Total Cart Value: </div>
        <div>&#8377;{ }</div>
      </div>
    </div>
  )
}

export default Cart