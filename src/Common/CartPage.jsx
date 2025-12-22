import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaTimes, FaMinus, FaPlus, FaCreditCard, FaCalendarAlt, FaLock, FaArrowRight } from "react-icons/fa";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.totalPrice || 0), 0);

  return (
    <section className="py-20 bg-[var(--color-background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Your Shopping Cart" description="Review your selections before checkout." />

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="text-6xl mb-6">🛒</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your cart is currently empty</h3>
            <p className="text-gray-500 mb-8">Looks like you haven't added any items yet.</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-all">
              Continue Shopping <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="w-full sm:w-32 h-32 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-[var(--color-primary)] font-bold text-lg mb-4">${Number(item.totalPrice || 0).toFixed(2)}</p>
                    
                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <div className="flex items-center border border-gray-200 rounded-full bg-gray-50">
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="w-8 text-center font-medium text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => dispatch(removeItem({ id: item.id }))} 
                    className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                    title="Remove Item"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${Number(totalPrice).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="border-t border-gray-100 my-4"></div>
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span>${Number(totalPrice).toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowPaymentForm(true)}
                  className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-900/10 hover:bg-[var(--color-primary-dark)] hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Proceed to Checkout
                </button>

                <div className="mt-6 flex flex-col gap-2 text-xs text-gray-400 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <FaLock /> Secure Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showPaymentForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slideUp">
            <div className="bg-gray-50 p-6 flex justify-between items-center border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FaCreditCard className="text-[var(--color-primary)]" /> Checkout
              </h3>
              <button onClick={() => setShowPaymentForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaTimes size={20} />
              </button>
            </div>

            <form className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <div className="relative">
                  <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="0000 0000 0000 0000" />
                  <FaCreditCard className="absolute left-3.5 top-3.5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <div className="relative">
                    <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="MM/YY" />
                    <FaCalendarAlt className="absolute left-3.5 top-3.5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                  <div className="relative">
                    <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="123" />
                    <FaLock className="absolute left-3.5 top-3.5 text-gray-400" />
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-600/20">
                Pay ${Number(totalPrice).toFixed(2)}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
