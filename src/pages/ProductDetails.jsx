import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
//Context
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
//Icons
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

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
  const { name, price, descriptions, img } = product;

  return (
    <section className="productDetails">
      <div className="similarProduct">
        <AiFillCaretUp />
        <div>
          {products.slice(0, 5).map((items, i) => {
            return (
              <Link to={`/product/${items.id}`} key={i}>
                <figure>
                  <img src={items.img} />
                </figure>
              </Link>
            );
          })}
        </div>
        <AiFillCaretDown />
      </div>
      <div className="details">
        <div className="detailsImg">
          <img src={img} />
        </div>
        <div className="detailsInfo">
          <div className="detailsName">
            <h2>{name}</h2>
            <p>{descriptions}</p>
          </div>
          <div className="detailsPriceIcon">
            <h2>${price}</h2>
            <BiMessageSquareAdd onClick={() => addToCart(product, id)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
