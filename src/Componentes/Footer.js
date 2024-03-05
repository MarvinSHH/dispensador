// Footer.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto py-3">
      <div className="container">
        <div className="row text-center">
          {/* Columna para contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p>Teléfono: +1 234 567 8900</p>
          </div>

          {/* Columna para enlaces útiles */}
          <div className="col-md-4 mb-3">
            <h5>Enlaces Útiles</h5>
            <a href="/politicas-privacidad" className="d-block text-white">
              Políticas de Privacidad
            </a>
            <a href="/terminos-servicio" className="d-block text-white">
              Términos de Servicio
            </a>
          </div>

          {/* Columna para redes sociales */}
          <div className="col-md-4 mb-3">
            <h5>Síguenos</h5>
            {/* Añade aquí tus enlaces a redes sociales */}
          </div>
        </div>

        {/* Derechos de autor o texto adicional */}
        <div className="text-center">
          <small>
            © {new Date().getFullYear()} Nombre de la Empresa. Todos los
            derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
