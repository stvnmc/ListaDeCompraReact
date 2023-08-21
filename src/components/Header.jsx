import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
      <div>Header {itemAmount}</div>

      <AiOutlineShoppingCart onClick={() => setIsOpen(!isOpen)} />
    </section>
  );
};

export default Header;
