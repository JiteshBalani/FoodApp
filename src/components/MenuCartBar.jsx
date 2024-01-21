import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const MenuCartBar = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div
            className="cursor-pointer flex w-6/12 justify-between items-center font-semibold bg-[#F05455] z-50 fixed p-2 bottom-4">
            <div className="p-1">{cartItems.length} Item | &#8377;119</div>
            <div className="p-1"><Link to="/cart">VIEW CART [ {cartItems.length} ]</Link></div>
        </div>
    )
}

export default MenuCartBar