import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { BiMessageSquareAdd } from "react-icons/bi"
import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  const { isOpen } = useContext(SidebarContext)
  // const filteredProducts = products.filter((item) => {
  //   return (
  //     item.category === "men's clothing" || item.category === "women's clothing"
  //   );
  // });

  return (
    <React.Fragment>
      <section className={`home ${isOpen ? 'open' : ''}`}>
        <div className={`contentProducts ${isOpen ? 'open' : ''}`}>
          {products.map((products, id) => {
            return (
              <figure className="products" key={id}>
                <Link to={`/product/${id}`}>
                  <div className="productsImg">
                    <img style={{ backgroundImage: `url(${products.img})` }} />
                  </div>
                </Link>
                <div className="productsInfo">
                  <Link to={`/product/${id}`}>
                    <h2>{products.name}</h2>
                  </Link>
                  <h3>{products.descriptions}</h3>
                  <h3>{products.price}</h3>
                  <BiMessageSquareAdd />
                </div>
              </figure>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};
export default Home;
