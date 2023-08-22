import React, { createContext, useState, useEffect } from "react";
import { ListOfProducts } from "../data/listOfProducts";

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ListOfProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
