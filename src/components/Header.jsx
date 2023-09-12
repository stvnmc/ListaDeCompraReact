import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { ProductContext } from "../contexts/ProductContext";

const Header = () => {
  const { producTaught } = useContext(ProductContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsActive(window.scrollY < prevScrollY);
        prevScrollY = window.scrollY;
      } else {
        setIsActive(false);
      }
    };

    let prevScrollY = window.scrollY;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menuName) => {
    setActiveMenu((prevMenu) => {
      return menuName === prevMenu ? null : menuName;
    });
  };

  const menuItems = [
    {
      name: "NewFeatured",
      items: [
        { name: "All Products" },
        { name: "new" },
        { name: "Featured products" },
      ],
    },
    {
      name: "Women",
      items: [
        { name: "All Women" },
        { name: "tennis" },
        { name: "formal shoes" },
      ],
    },
    {
      name: "Men",
      items: [
        { name: "tennis" },
        { name: "formal shoes" },
        { name: "formal shoes" },
      ],
    },
  ];

  return (
    <section className={`header${isActive ? "open" : ""}`}>
      <div className="title">
        <Link to={`/`}>
          <h1>SHOPMARKET</h1>
        </Link>
        <div className="search">
          <input type="text" />
          <FiSearch />
        </div>
        <div className="iconShop" onClick={() => setIsOpen(!isOpen)}>
          <h2>{itemAmount}</h2>
          <AiOutlineShoppingCart />
        </div>
      </div>
      <div className="list">
        {menuItems.map(({ name }, i) => (
          <figure onClick={() => toggleMenu(name)} key={i}>
            <h2>{name}</h2>
          </figure>
        ))}
      </div>
      <Menu
        activeMenu={activeMenu}
        items={menuItems}
        producTaught={producTaught}
      />
    </section>
  );
};

export default Header;
