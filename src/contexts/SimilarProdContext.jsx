import React, { createContext, useState, useContext, useEffect } from "react";
import { ProductContext } from "./ProductContext";

export const SimilarProdContext = createContext();

const SimilarProvider = ({ children }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const { products } = useContext(ProductContext);

  const calculateSimilarProducts = (props) => {
    const totalProduct = products.length;
    const minEnd = 5;

    // Calcula los nuevos valores para start y end
    let newStart = Math.max(0, Math.min(start + props, totalProduct - minEnd));
    let newEnd = Math.max(minEnd, Math.min(end + props, totalProduct));

    if (newEnd === minEnd) {
      newStart = Math.max(0, newStart);
    }

    setStart(newStart);
    setEnd(newEnd);

    const slicedProducts = products.slice(newStart, newEnd);
    setSimilarProducts(slicedProducts);
  };

  useEffect(() => {
    calculateSimilarProducts(0);
  }, []);

  console.log(similarProducts);
  return (
    <SimilarProdContext.Provider
      value={{ similarProducts, calculateSimilarProducts }}
    >
      {children}
    </SimilarProdContext.Provider>
  );
};

export default SimilarProvider;
