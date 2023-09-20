import React, { useContext } from "react";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { GoArrowLeft } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <section className={`Sidebar ${isOpen ? "open" : ""}`}>
      <div className="shopping">
        <div className="shoppingIcon">
          <GoArrowLeft onClick={() => handleClose()} />
        </div>
        <h2>Shopping BAG({itemAmount})</h2>
      </div>
      <div className="cartItems">
        {cart.map((item, i) => {
          return <CartItem item={item} key={i} />;
        })}
      </div>
      <div className="total">
        <h2>Total: {total}</h2>
        <AiOutlineDelete onClick={() => clearCart()} />
      </div>
    </section>
  );
};

export default Sidebar;
