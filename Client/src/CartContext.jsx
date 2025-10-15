import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Clear token from localStorage
  };

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("token", localStorage.getItem("token") || "");
    }
  }, [isLoggedIn]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isLoggedIn, setIsLoggedIn, handleLogout}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
