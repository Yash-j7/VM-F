import React, { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "./auth";

// Create the cart context
const cartContext = createContext();

// CartProvider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [auth] = useAuth(); // Use auth to get the current user

  // Load the cart for the current user
  useEffect(() => {
    if (auth?.user) {
      // Get cart associated with the user
      const userCart = localStorage.getItem(`cart_${auth.user._id}`);
      if (userCart) {
        setCart(JSON.parse(userCart));
      }
    }
  }, [auth]);

  // Save the cart for the current user
  useEffect(() => {
    if (auth?.user) {
      localStorage.setItem(`cart_${auth.user._id}`, JSON.stringify(cart));
    }
  }, [cart, auth]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Use both _id and variant to distinguish cart items
      const existingItem = prevCart.find((item) => item._id === product._id && item.variant === product.variant);
      const addQty = product.quantity && product.quantity > 0 ? product.quantity : 1;
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id && item.variant === product.variant
            ? { ...item, quantity: item.quantity + addQty }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: addQty }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

// Custom hook to use the cart context
const useCart = () => {
  return useContext(cartContext);
};

// Export the provider and the hook
export { CartProvider, useCart };
