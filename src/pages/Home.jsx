import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { imgUrlHome } from "../data/infoOfPage";

const VerticalLetters = () => {
  const text = "Text Ejemplo";
  const letters = text.split("");
  return (
    <>
      {letters.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </>
  );
};

const GridItem = ({ content, gridArea, vertical, centered }) => {
  const className = centered ? "centered" : "";
  const contentClassName = vertical ? "vertical" : "";

  return (
    <figure className={`${className} ${contentClassName}`} style={{ gridArea }}>
      {content}
    </figure>
  );
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promo.length);
    }, 3500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const promo = [
    "New Markdowns: Up to 40% Off",
    "Shop All New Arrivals",
    "Members: Free Shipping on Orders $50+",
    "Why Wait? Try Store Pickup",
  ];

  const gridItems = [
    {
      content: <img src={imgUrlHome.img1} alt="Descripción de la imagen" />,
      gridArea: "1 / 1 / 2 / 3",
    },
    {
      content: (
        <Link to={"/product"}>
          <h1>products</h1>
          <h1>productssdfdsfsdsdfsdf</h1>
          <h1>productsfsdfsd</h1>
        </Link>
      ),
      gridArea: "1 / 5 / 2 / 3",
    },
    {
      content: <img src={imgUrlHome.img5} alt="Descripción de la imagen" />,
      gridArea: "1 / 5 / 1 / 7",
    },
    {
      content: <VerticalLetters />,
      gridArea: "2 / 1 / 3 / 2",
    },
    {
      content: <img src={imgUrlHome.img4} alt="Descripción de la imagen" />,
      gridArea: "2 / 2 / 2 / 6",
    },
    {
      content: <VerticalLetters />,
      gridArea: "2 / 6 / 2 / 7",
    },
    {
      content: <img src={imgUrlHome.img2} alt="Descripción de la imagen" />,
      gridArea: "3 / 1 / 3 / 3",
    },
    {
      content: (
        <Link to={"/product"}>
          <h1>products</h1>
          <h1>productssdfdsfsdsdfsdf</h1>
          <h1>productsfsdfsd</h1>
        </Link>
      ),
      gridArea: "3 / 3 / 3 / 5",
    },
    {
      content: <img src={imgUrlHome.img3} alt="Descripción de la imagen" />,
      gridArea: "3 / 7 / 3 / 5",
    },
  ];

  return (
    <section className="homehome">
      <div
        className={`promocion`}
        style={{ transform: `translateX(${-100 * currentIndex}vw)` }}
      >
        {promo.map((item, index) => (
          <div key={index}>
            <h1>{item}</h1>
            <a>jasdsdsdsdfj</a>
          </div>
        ))}
      </div>

      <div className="contImg">
        {gridItems.map((item, index) => (
          <GridItem
            key={index}
            content={item.content}
            gridArea={item.gridArea}
            centered={index === 1 || index === 3 || index === 5 || index === 7}
            vertical={index === 3 || index === 5}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
