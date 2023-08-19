import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  return (
    <section className="header">
      <div>
        Header
      </div>
      <AiOutlineShoppingCart onClick={() => setIsOpen(!isOpen)}/>
    </section>
  )
};

export default Header;
