import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { BiMessageSquareAdd } from "react-icons/bi";

const Product = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const { img, name, id, descriptions, price } = products;

  

  // Trunca la descripción si es más larga que la longitud máxima
  const truncatedDescription =
    descriptions.length > 70 ? (
      <>
        {descriptions.slice(0, 70)}
        <Link to={`/product/${id}`}>
          <span>... ver mas</span>
        </Link>
      </>
    ) : (
      descriptions
    );

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
          <BiMessageSquareAdd
            className="icon"
            onClick={() => addToCart(products, id)}
          />
        </div>
        <div className="lineaNegra"></div>
        <div className="descriPrice">
          <h3>{truncatedDescription}</h3>
          <p>${price}</p>
        </div>
      </div>
    </figure>
  );
};

export default Product;
