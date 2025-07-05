import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderPlaced from './pages/OrderPlaced';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <CartProvider>
      <Router>
        {/* ✅ Global light/dark wrapper */}
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          {/* ✅ Header with navigation and theme toggle */}
          <Header />
          <main className="max-w-7xl mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-placed" element={<OrderPlaced />} />
              <Route
                path="*"
                element={
                  <div className="text-center text-2xl text-red-600 py-20">
                    404 - Page Not Found 🚫
                  </div>
                }
              />
            </Routes>
          </main>
        </div>

        <ToastContainer position="top-right" autoClose={2000} />
      </Router>
    </CartProvider>
  );
}

export default App;
