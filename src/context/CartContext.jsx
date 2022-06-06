import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const IncreaseCart = (value) => {
    let sum = value + count;
    if (sum > 0) {
      setCount(value + count);
    }
  };

  return (
    <CartContext.Provider value={{ count, IncreaseCart }}>
      {children}
    </CartContext.Provider>
  );
};
