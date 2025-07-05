import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext); // ✅ use clearCart instead of setCart
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!address.trim()) {
      toast.error("Please enter a shipping address!");
      return;
    }

    toast.success("Order placed successfully!");
    clearCart(); // ✅ safely clear cart via context

    setTimeout(() => {
      navigate('/order-placed');
    }, 1000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Shipping Address:</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Enter your full shipping address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        {cart.map((item) => (
          <p key={item._id}>
            {item.name} × {item.quantity} = ${item.price * item.quantity}
          </p>
        ))}
        <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
      </div>

      <button
        onClick={handleCheckout}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
