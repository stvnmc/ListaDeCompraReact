import React from "react";
import { Link } from "react-router-dom";
import { imgUrlHome } from "../data/listOfProducts";

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
