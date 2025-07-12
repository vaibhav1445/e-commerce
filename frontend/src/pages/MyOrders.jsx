import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/orders', {
          credentials: 'include',
        });
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-blue-600 font-medium">Loading your orders...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">📦 My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">You haven't placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <motion.div
            key={order._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm"
          >
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-semibold">Order Date:</span>{' '}
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item._id} className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <hr className="my-3" />
            <p className="text-right font-bold text-green-700">Total: ${order.total.toFixed(2)}</p>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
