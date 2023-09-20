import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Sidebar from "./Sidebar";

const Header = () => {
  // Contextos
  const { producTaught, valor } = useContext(ProductContext);
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Estado para el efecto de scroll
  const [isActive, setIsActive] = useState(false);

  // Manejar el efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsActive(scrollY > 40 && scrollY < prevScrollY);
      prevScrollY = scrollY;
      handleClose(false);
    };

    let prevScrollY = window.scrollY;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Datos de los elementos del menú, search
  const menuItems = ["All Products", "Women", "Men"];

  return (
    <section className={`header ${isActive ? "open" : ""}`}>
      <div className="title">
        <Link to={`/`}>
          <h1>SHOPMARKET</h1>
        </Link>
        <div className="search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => valor(e.target.value)}
          />
        </div>
        <div className="iconShop" onClick={() => setIsOpen(!isOpen)}>
          <div className="itemAmount">
            <h2>{itemAmount}</h2>
          </div>
          <AiOutlineShoppingCart />
        </div>
      </div>
      <div className="lineaNegra"></div>
      <div className="list">
        {menuItems.map((name, i) => (
          <Link to="/product" key={i}>
            <figure onClick={() => producTaught(name)}>
              <h2>{name}</h2>
            </figure>
          </Link>
        ))}
      </div>
      <Sidebar />
    </section>
  );
};

export default Header;
