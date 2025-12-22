import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/WishlistSlice";
import { products } from "../data/Data";
import Heading from "../Common/Heading";
import ProductCard from "../Components/ProductCard";
import { FaShoppingCart, FaHeart, FaStar, FaTruck, FaUndo, FaShieldAlt, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Product not found.</div>;
  }

  const handleAddToCart = () => {
    if (loadingCart) return;
    setLoadingCart(true);
    setTimeout(() => {
      dispatch(addToCart({ ...product, quantity }));
      toast.success("Added to Cart!");
      setLoadingCart(false);
    }, 600);
  };

  const handleAddToWishlist = () => {
    if (loadingWishlist) return;
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

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  ).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Product Viewer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20 animate-fadeIn">
          {/* Image */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[400px] md:h-[600px] flex items-center justify-center">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 text-yellow-400 text-sm">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span className="text-gray-400 ml-2">(150 Reviews)</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            
            <p className="text-gray-500 leading-relaxed text-lg">
              Experience ultimate comfort and style with this premium piece. 
              Crafted from high-quality materials, it fits perfectly in modern living spaces.
            </p>

            <div className="text-4xl font-bold text-[var(--color-primary)]">
              ${product.price}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 py-4">
              <span className="font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-full bg-gray-50">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] cursor-pointer">-</button>
                <span className="w-8 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] cursor-pointer">+</button>
              </div>
            </div>

            {/* Modern Buttons with Loaders */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleAddToCart}
                disabled={loadingCart}
                className="flex-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-4 px-8 rounded-full font-bold shadow-lg shadow-orange-900/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {loadingCart ? <FaSpinner className="animate-spin" /> : <><FaShoppingCart /> Add to Cart</>}
              </button>
              <button 
                onClick={handleAddToWishlist}
                disabled={loadingWishlist}
                className="flex-1 bg-white border border-gray-200 text-gray-700 py-4 px-8 rounded-full font-bold hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {loadingWishlist ? <FaSpinner className="animate-spin text-[var(--color-primary)]" /> : <><FaHeart /> Wishlist</>}
              </button>
            </div>

            {/* Features Info */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100 mt-4">
              <div className="flex flex-col items-center text-center gap-2">
                <FaTruck className="text-2xl text-gray-400" />
                <span className="text-xs font-semibold text-gray-500">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <FaUndo className="text-2xl text-gray-400" />
                <span className="text-xs font-semibold text-gray-500">30 Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <FaShieldAlt className="text-2xl text-gray-400" />
                <span className="text-xs font-semibold text-gray-500">Secure Pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-gray-100 pt-16">
            <Heading title="Related Products" description="You might also like these." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <div key={item.id}>
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
