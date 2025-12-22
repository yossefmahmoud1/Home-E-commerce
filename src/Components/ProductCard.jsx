import { FaShoppingCart, FaHeart, FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/WishlistSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!product || loadingCart) return;
    setLoadingCart(true);
    
    // Simulate API delay
    setTimeout(() => {
      dispatch(addToCart({ ...product, quantity: 1 }));
      toast.success("Added to Cart!");
      setLoadingCart(false);
    }, 600);
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    if (!product || loadingWishlist) return;
    setLoadingWishlist(true);

    setTimeout(() => {
      dispatch(addToWishlist(product));
      toast.success("Added to Wishlist!", {
        style: { borderLeft: '6px solid var(--color-primary)' },
        iconTheme: { primary: 'var(--color-primary)', secondary: 'white' },
      });
      setLoadingWishlist(false);
    }, 600);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] cursor-pointer flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-[260px] w-full overflow-hidden bg-gray-50">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Persistent Wishlist Button */}
        <button 
          onClick={handleAddToWishlist} 
          disabled={loadingWishlist}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all duration-300 shadow-sm cursor-pointer disabled:opacity-70"
          title="Add to Wishlist"
        >
          {loadingWishlist ? <FaSpinner className="animate-spin text-[var(--color-primary)]" size={18} /> : <FaHeart size={18} />}
        </button>

        {/* New Tag */}
        {product.id % 2 === 0 && (
          <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            New
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[var(--color-primary)] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[var(--color-primary)] font-bold text-xl">${product.price}</span>
            <span className="text-gray-400 line-through text-sm">${(parseFloat(product.price) * 1.2).toFixed(2)}</span>
          </div>
        </div>

        {/* Visible Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          disabled={loadingCart}
          className="w-full py-3 rounded-xl bg-gray-100 text-gray-800 font-bold flex items-center justify-center gap-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 group/btn cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loadingCart ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <>
              <FaShoppingCart className="transition-transform group-hover/btn:scale-110" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
