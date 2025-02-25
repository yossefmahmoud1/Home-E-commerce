import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { removeItem, updateQuantity } from "../redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.totalPrice || 0), 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <img src={item.img} alt={item.name} className="w-24 h-24 object-cover" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-blue-800 font-bold ">${Number(item.totalPrice || 0).toFixed(2)}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      className="px-2 bg-gray-200"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      className="px-2 bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                <FaTimes onClick={() => dispatch(removeItem({ id: item.id }))} className="text-red-500 cursor-pointer" />
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border-t flex justify-between items-center">
            <h3 className="text-xl font-bold">
              Total: <span className="text-blue-800 font-bold">${Number(totalPrice).toFixed(2)}</span>
            </h3>
            <button
              onClick={() => setShowPaymentForm(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}

      {showPaymentForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Payment Details</h3>
              <FaTimes onClick={() => setShowPaymentForm(false)} className="cursor-pointer text-red-500" />
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Card Number</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="flex space-x-4">
                <div>
                  <label className="block text-sm font-medium">Expiry Date</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium">CVV</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="123" />
                </div>
              </div>

              <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700 transition">
                Pay Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
