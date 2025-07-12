// src/components/ProductCard.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, view }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all ${
        view === 'grid' ? '' : 'flex gap-4 items-center'
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
      />
      <div className="mt-3 flex flex-col justify-between w-full">
        <Link
          to={`/product/${product._id}`}
          className="text-lg font-bold text-blue-800 hover:underline truncate"
        >
          {product.name}
        </Link>
        <p className="text-gray-700 mt-1 font-medium">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
