import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/WishlistSlice";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.data);
  const dispatch = useDispatch();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="relative border p-4 rounded-lg shadow-lg">
              <img src={item.img} alt={item.name} className="w-full h-40 aspect-ratio rounded-md mb-3" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              
              {/* أيقونة الحذف */}
              <FaHeart
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="absolute top-3 right-3 text-red-500 cursor-pointer transition-all duration-300 hover:text-white hover:bg-red-500 rounded-full p-2"
                size={30}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
