import React, { createContext, useState, useEffect } from "react";
import { ListOfProducts } from "../data/listOfProducts";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ListOfProducts);
  }, []);

  const producTaught = (codigo) => {
    // const filteredProducts = ListOfProducts.filter(
    //   (product) => product.gender === codigo
    // )
    console.log(codigo)
    // setProducts(filteredProducts);
  };

  return (
    <ProductContext.Provider value={{ products, producTaught }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
