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
    <header>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p> <p>xscdscdscdvcfvv</p> <p>xscdscdscdvcfvv</p>{" "}
      <p>xscdscdscdvcfvv</p> <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
      <p>xscdscdscdvcfvv</p>
    </header>
  );
}

export default HeaderNav;
