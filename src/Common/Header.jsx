import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navitem from "../Components/Navitem";
import { nav } from "../data/Data";

const Header = () => {
  const cartItems = useSelector((state) => state.cart?.data || []);
  const wishlistItems = useSelector((state) => state.wishlist?.data || []);

  return (
    <div className="w-full bg-white sticky top-0 z-20 drop-shadow-md">
      <div className="flex justify-between items-center p-4">
        <Link to="/" className="font-bold text-xl sm:text-2xl md:text-3xl">
          Home <span className="text-yellow-500">Container</span>
        </Link>

        <ul className="hidden sm:flex space-x-6 uppercase font-semibold">
          {nav.map((list, key) => (
            <li key={key} className="transition-colors duration-300 hover:text-red-500">
              <Navitem to={list.path} label={list.text} />
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="hover:text-red-500 text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>

          <Link to="/wishlist" className="relative">
            <FaHeart className="hover:text-red-500 text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-3 sm:-right-2 md:-right-3 bg-red-500 text-white text-xs rounded-full px-1">
                {wishlistItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
