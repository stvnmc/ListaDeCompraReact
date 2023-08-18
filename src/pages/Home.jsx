import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  // const filteredProducts = products.filter((item) => {
  //   return (
  //     item.category === "men's clothing" || item.category === "women's clothing"
  //   );
  // });

  return (
    <React.Fragment>
      <section className="home">
        <div>
          <div className="contentProducts">
            {products.map((products, id) => {
              return (
                <div className="products" key={id}>
                  <h2>{products.name}</h2>
                  <img src={`${products.img}`}/>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Home;
