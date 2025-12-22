import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/WishlistSlice";
import Heading from "./Heading";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.data);
  const dispatch = useDispatch();

  return (
    <section className="py-20 bg-[var(--color-background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Your Wishlist" description="Keep track of the items you love." />

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="text-6xl mb-6 text-red-200">❤️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8">Start adding items you love to save them for later.</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-all">
              Discover Products <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="relative animate-fadeIn">
                <ProductCard product={item} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeFromWishlist(item.id));
                  }}
                  className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full text-red-500 shadow-sm hover:bg-red-500 hover:text-white transition-all duration-300"
                  title="Remove from Wishlist"
                >
                  <FaHeart size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
