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
  const [menuStates, setMenuStates] = useState({
    newFeatured: false,
    women: false,
    men: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    setMenuStates((prevState) => ({
      newFeatured: menuName === "newFeatured" ? !prevState.newFeatured : false,
      women: menuName === "women" ? !prevState.women : false,
      men: menuName === "men" ? !prevState.men : false,
    }));
  };
  const menuItems = [
    {
      name: "newFeatured",
      title: "New & Featured products",
      items: [
        { name: "new", link: "/new" },
        { name: "Featured products", link: "/featured" },
        { name: "ofertas", link: "/offers" },
      ],
    },
    {
      name: "women",
      title: "Women",
      items: [
        { name: "new", link: "/women-new" },
        { name: "tennis", link: "/women-tennis" },
        { name: "formal shoes", link: "/women-formal-shoes" },
      ],
    },
    {
      name: "men",
      title: "Men",
      items: [
        { name: "tennis", link: "/men-tennis" },
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
        <div className="iconShop">
          <h2>{itemAmount}</h2>
          <AiOutlineShoppingCart onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <div className="list">
        {menuItems.map(({ name, title, items }) => (
          <Menu
            key={name}
            title={title}
            isActive={menuStates[name]}
            toggleMenu={() => toggleMenu(name)}
            items={items}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;
