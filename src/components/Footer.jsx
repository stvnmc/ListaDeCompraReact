import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <nav className="navigation">
        <h2>Navigation</h2>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/acerca">Acerca de</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <nav className="contact-info">
        <h2>About Me</h2>
        <div>
          <h3>contact</h3>
          <p>Email: stvnmc123@gmail.com</p>
          <p>Discord: cuatromc#6034 </p>
        </div>
        <div>
          <h3>About Web</h3>
          <p>
            esta pagian esta echa con imgenes sacadasd de aqui ajaj, las
            funciona lidades inspiradas de este video{" "}
          </p>
        </div>
      </nav>
      <nav className="social-media">
        <div>
          <h2>Social Media</h2>
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <AiOutlineYoutube />
          </a>
          <a href="#">
            <AiFillLinkedin />
          </a>
          <a href="#">
            <AiOutlineGithub />
          </a>
        </div>
        <p>© 2023 Steven Marchena Caballero</p>
      </nav>
    </section>
  );
};

export default Footer;
