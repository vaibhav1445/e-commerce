import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Header = () => {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [theme, setTheme] = useState('light');

  // On mount: initialize theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(activeTheme);
    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 sticky top-0 z-50 shadow-lg px-6 py-4 flex justify-between items-center"
    >
      <Link
        to="/"
        className="text-2xl font-bold text-white tracking-widest hover:scale-105 transition-transform duration-300"
      >
        🛍️ Grabify
      </Link>

      <nav className="flex items-center space-x-6 text-white font-medium text-lg">
        <Link to="/" className="hover:text-yellow-300 transition duration-200">Home</Link>
        <Link to="/checkout" className="hover:text-yellow-300 transition duration-200">Checkout</Link>
        <Link to="/cart" className="relative hover:text-yellow-300 transition duration-200 flex items-center">
          <FiShoppingCart className="text-xl" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
              {itemCount}
            </span>
          )}
        </Link>

        {/* 🌙 Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-white hover:text-yellow-300 transition duration-200"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
