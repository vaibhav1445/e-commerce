import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-8 mt-10"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold tracking-wider">🛍️ Grabify</h3>
          <p className="text-sm mt-1">Your one-stop online shop for everything!</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/cart" className="hover:text-yellow-300 transition">Cart</Link></li>
            <li><Link to="/checkout" className="hover:text-yellow-300 transition">Checkout</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a href="https://github.com/vaibhav1445" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-srivastava-a21208244/" className="hover:text-yellow-300 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm border-t border-white/20 pt-4 px-6">
        © {new Date().getFullYear()} E-Store. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
