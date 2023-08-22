import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === id;
  });

  if (!product) {
    return <section>Loading</section>;
  }

  console.log(product);
  const { name, price, description, img } = product;

  return (
    <section>
      <div>
        <img src={img} />
      </div>
    </section>
  );
};

export default ProductDetails;
