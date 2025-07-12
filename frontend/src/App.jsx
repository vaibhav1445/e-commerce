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
import Footer from './components/Footer';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          <Header />
          <main className="max-w-7xl mx-auto px-4 py-6">
            <Routes>
              {/* Public Route */}
              <Route path="/login" element={<Login />} />

              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
              <Route path="/product/:id" element={<ProductDetails />} />
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
          <Footer />
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
      </Router>
    </CartProvider>
  );
}

export default App;
