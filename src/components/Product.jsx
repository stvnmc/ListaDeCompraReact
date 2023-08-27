import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { BiMessageSquareAdd } from "react-icons/bi";

const Product = ({ products }) => {
  const { addToCart } = useContext(CartContext);
;

  const { img, name, id, descriptions, price } = products;

  return (
    <figure className="products">
      <Link to={`/product/${id}`}>
        <div className="productsImg">
          <img style={{ backgroundImage: `url(${img})` }} />
        </div>
      </Link>
      <div className="productsInfo">
        <div className="nameAdd">
          <Link to={`/product/${id}`}>
            <h2>{name}</h2>
          </Link>
          <BiMessageSquareAdd className="icon" onClick={() => addToCart(products, id)} />
        </div>

        <div>
          <h3>{descriptions}</h3>
          <h3>{price}</h3>
        </div>
      </div>
    </figure>
  );
};

export default Product;
