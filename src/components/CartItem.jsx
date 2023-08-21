import React, { useContext } from "react";
import { GoX } from "react-icons/go";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { img, price, name, amount, id } = item;
  return (
    <figure className="cartItem">
      <img src={`${img}`} />
      <div>
        <h2>{name}</h2>
        <div className="productNum">
          <GrFormSubtract onClick={() => decreaseAmount(id)} />
          <h2>{amount}</h2>
          <GrFormAdd onClick={() => increaseAmount(id)} />
          <div>$ {price * amount}</div>
        </div>
      </div>
      <GoX onClick={() => removeFromCart(id)} />
    </figure>
  );
};
export default CartItem;
