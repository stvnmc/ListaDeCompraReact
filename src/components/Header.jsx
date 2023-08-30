import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <section className={`header ${isActive ? "open" : "close"}`}>
      <div className="title">
        <Link to={`/`}>
          <h1>SHOPMARKET</h1>
        </Link>
        <div className="search">
          <input type="texto" />
          <FiSearch />
        </div>
        <div className="iconShop">
          <h2>{itemAmount}</h2>
          <AiOutlineShoppingCart onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <div className="list">
        <figure>
          <h2>New & Featured products</h2>
        </figure>
        <figure>
          <h2>Men</h2>
        </figure>
        <figure>
          <h2>Women</h2>
        </figure>
      </div>
    </section>
  );
};

export default Header;
