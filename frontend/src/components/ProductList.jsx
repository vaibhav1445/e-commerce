import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
// import axios from 'axios'; // For future backend integration

// Temporary mock data
const mockProducts = [
  {
    _id: '1',
    name: 'Mock Product 1',
    price: 29.99,
    image: 'https://via.placeholder.com/300',
    description: 'This is a mock product.',
  },
  {
    _id: '2',
    name: 'Mock Product 2',
    price: 49.99,
    image: 'https://via.placeholder.com/300',
    description: 'Another mock product.',
  },
  {
    _id: '3',
    name: 'Mock Product 3',
    price: 19.99,
    image: 'https://via.placeholder.com/300',
    description: 'Yet another mock product.',
  },
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // axios.get('/api/products').then(res => setProducts(res.data));
    setProducts(mockProducts);
  }, []);

  // Filter products by search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-blue-800">Explore Our Products</h2>
        <div className="space-x-2">
          <button
            className={`px-3 py-1 rounded-md shadow ${
              view === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setView('grid')}
          >
            🔳 Grid
          </button>
          <button
            className={`px-3 py-1 rounded-md shadow ${
              view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setView('list')}
          >
            📃 List
          </button>
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No products found.</p>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' : 'space-y-4'}
        >
          {filteredProducts.map(product => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} view={view} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProductList;
