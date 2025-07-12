import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-blue-800">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white shadow rounded-lg p-4 border"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 w-full">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <label className="mr-2 font-medium">Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) => {
                        const qty = parseInt(e.target.value);
                        if (!isNaN(qty)) updateQuantity(item._id, qty);
                      }}
                      className="w-16 p-1 border rounded text-center"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-600 hover:underline mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-8">
            <h3 className="text-2xl font-bold text-green-700">Total: ${cartTotal.toFixed(2)}</h3>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
