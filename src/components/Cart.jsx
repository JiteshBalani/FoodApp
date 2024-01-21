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

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((group) => group.id === item.id);

    if(existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({...item, quantity: 1});
    }

    return acc;
  }, []);
  
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

      {groupedItems?.length === 0 && (
        <h1 className="text-center bg-[#f26a6a4a] text-[#F05455] text-2xl p-5 rounded-md">
        Cart is empty! Explore the top restaurants with 
        <Link className="font-semibold text-black cursor-pointer underline-offset-2 underline" to="/offers">discounts</Link> 
        on your favorite food and beverages.</h1>
      )}

      {groupedItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b-[1px] border-gray-400 pb-1">
          <div>
            {item.quantity} x {cartItems.name}
          </div>
          <div>&#8377; {item.price * item.quantity}</div>
        </div>
      ))}

      {/* <MenuItems items={cartItems} /> */}
      <div className="flex justify-between bg-[#F05455] rounded-md p-2 font-semibold">
        <div>Total Cart Value: </div>
        <div>&#8377;{groupedItems.reduce((total, item) => total + item.price * item.quantity, 0)}</div>
      </div>
    </div>
  )
}

export default Cart