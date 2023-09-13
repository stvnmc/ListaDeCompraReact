import React, { createContext, useState } from "react";
import { ListOfProducts } from "../data/listOfProducts";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(ListOfProducts);
  const searchKeys = ["name", "characteristics"];

  const valor = (e) => {
    
    const fonad = ListOfProducts.filter((item) =>
      searchKeys.some((key) => item[key].toLowerCase().includes(e))
    );
    setProducts(fonad);
  };

  const producTaught = (characteristicFilter) => {
    if (characteristicFilter === "All Products") {
      setProducts(ListOfProducts);
    } else {
      const filteredProducts = ListOfProducts.filter(
        (product) => product.characteristics === characteristicFilter
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <ProductContext.Provider value={{ products, producTaught, valor }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
