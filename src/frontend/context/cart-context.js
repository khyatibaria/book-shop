import { createContext, useContext, useState } from "react";

const defaultCartValue = {
  cartProduct: 0,
};
const CartContext = createContext(defaultCartValue);
const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState(0);
  const addToCart = () => {
    setCartProduct((prev) => {
      return +prev + 1;
    });
  };
  return (
    <CartContext.Provider value={{ cartProduct, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => {
  return useContext(CartContext);
};
export { CartProvider, useCart };
