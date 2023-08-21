import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { BiMessageSquareAdd } from "react-icons/bi";
import { SidebarContext } from "../contexts/SidebarContext";

const Product = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const { isOpen, setIsOpen} = useContext(SidebarContext);

  const fddfs = () => {
    addToCart(products, id);
    if (isOpen === false) {
      setIsOpen(true)
    }
  };

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
          <BiMessageSquareAdd className="icon" onClick={() => fddfs()} />
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
