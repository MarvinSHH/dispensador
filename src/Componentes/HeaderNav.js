// HeaderNav.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Estilos/styles";

function HeaderNav() {
  // Estado para controlar la visibilidad del encabezado
  const [showHeaderNav, setShowHeaderNav] = useState(true);

  // Efecto para ocultar el encabezado al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 0;
      setShowHeaderNav(!isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={{ display: showHeaderNav ? "block" : "none" }}>
      <div className="bg-primary text-center py-2">
        <h1 className="text-white">Planeta mascota</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#">
            Productos
          </a>
          <a className="nav-item nav-link" href="#">
            Carrito
          </a>
          <a className="nav-item nav-link" href="#">
            Compras
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;
