import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ activeMenu, items }) => {
  const activeItem = items.find((item) => item.name === activeMenu);

  if (!activeItem) {
    return null;
  }

  return (
    <div className="menu">
      <h1>Contenido para {activeItem.name}</h1>
      <div className="menuLinks">
        {activeItem.items.map((item, index) => (
          <Link key={index} to={item.link}>
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
