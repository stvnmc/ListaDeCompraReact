import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

const Products = () => {
  const { products } = useContext(ProductContext);
  
  return (
    <React.Fragment>
      <div className="contentProducts">
        {products.map((products, id) => {
          return <Product products={products} key={id} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Products;
