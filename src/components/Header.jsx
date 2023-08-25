import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";

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
        <h1>SHOPMARKET</h1>
        <div className="search">
          <input type="texto" />
          <FiSearch />
        </div>
        <div>
          {itemAmount}
          <AiOutlineShoppingCart onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <div className="list">
        <li>hola</li>
        <li>sdsds</li>
        <li>dsdsd</li>
      </div>
    </section>
  );
};

export default Header;
