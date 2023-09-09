import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

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
      name: "newFeatured",
      items: [
        { name: "new", link: "/new" },
        { name: "Featured products", link: "/featured" },
        { name: "ofertas", link: "/offers" },
      ],
    },
    {
      name: "women",
      items: [
        { name: "new", link: "/women-new" },
        { name: "tennis", link: "/women-tennis" },
        { name: "formal shoes", link: "/women-formal-shoes" },
      ],
    },
    {
      name: "men",
      items: [
        { name: "tennis", link: "/men-tennis" },
        { name: "formal shoes", link: "/men-formal-shoes" },
        { name: "formal shoes", link: "/men-formal-shoes" },
      ],
    },
  ];

  return (
    <section className={`${isActive ? "header open" : "header"}`}>
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
      <Menu activeMenu={activeMenu} items={menuItems} />
    </section>
  );
};

export default Header;
