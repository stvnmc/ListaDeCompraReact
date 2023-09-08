import { Link } from "react-router-dom";

const Menu = ({ title, isActive, toggleMenu, items }) => (
  <figure onClick={toggleMenu}>
    <h2>{title}</h2>
    <div className={`menu ${isActive ? "open" : "close"}`}>
      <ul>
        {items.map((item) => (
          <Link key={item.name} to={item.link}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  </figure>
);

export default Menu;
