import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <nav className="footer-nav">
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
      <div class="contact-info">
        <p>Contáctanos:</p>
        <p>Email: contacto@misitioweb.com</p>
        <p>Teléfono: 123-456-7890</p>
      </div>
      <div class="social-media">
        <a href="#">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p>Desarrollado por Mi Nombre</p>
    </section>
  );
};

export default Footer;
