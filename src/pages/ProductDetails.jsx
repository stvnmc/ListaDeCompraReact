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

  const { name, price, description, img } = product;

  return (
    <section className="productDetails">
      <div className="similarProduct">
        <figure>
          <img src={img} />
        </figure>
        <figure>
          <img src={img} />
        </figure>
        <figure>
          <img src={img} />
        </figure>
        <figure>
          <img src={img} />
        </figure>
        <figure>
          <img src={img} />
        </figure>
        <figure>
          <img src={img} />
        </figure>
        <figure>
          <img src={img} />
        </figure>
        <figure>
          <img src={img} />
        </figure>
      </div>
      <div className="details">
        <div className="detailsImg">
          <img src={img} />
        </div>
        <div>
          <h2>{name}</h2>
          <h2>{price}</h2>
          <h2>{description}</h2>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
