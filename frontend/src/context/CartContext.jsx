import React, { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(p => p._id === product._id);
    if (exists) {
      setCart(cart.map(p =>
        p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
      ));
      toast.info(`Increased quantity of ${product.name}`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success(`${product.name} added to cart`);
    }
  };

  const removeFromCart = (id) => {
    const removedItem = cart.find(p => p._id === id);
    setCart(cart.filter(p => p._id !== id));
    toast.warn(`${removedItem?.name || 'Item'} removed from cart`);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      toast.error("Quantity cannot be less than 1");
      return;
    }
    setCart(cart.map(p =>
      p._id === id ? { ...p, quantity } : p
    ));
    toast.info("Cart updated");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared");
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
