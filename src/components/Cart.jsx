import { useDispatch, useSelector } from "react-redux"
import MenuItems from "./MenuItems"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };
  return (
    <div
        className="h-screen px-[200px] mt-0 py-[50px] flex flex-col space-y-2  "
      >
      <div className="text-2xl font-semibold text-center">Cart</div>

      <button className="border-gray-300 rounded-md border-2 px-1 w-fit text-center self-center text-red-500 font-semibold"
        onClick={handleClearCart}
      >Clear Cart</button>

      {cartItems?.length === 0 && (
        <h1>Cart is empty!</h1>
      )}

      <MenuItems items = {cartItems}/>
      </div>
  )
}

export default Cart