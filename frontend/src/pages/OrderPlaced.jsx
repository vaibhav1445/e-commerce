// src/pages/OrderPlaced.jsx
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const OrderPlaced = () => {
  useEffect(() => {
    // toast.success("Order placed successfully!");
  }, []);

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold text-green-600">🎉 Your order has been placed!</h1>
      <p className="mt-4 text-lg text-gray-700">Thank you for shopping with Grabify.</p>
    </div>
  );
};

export default OrderPlaced;
