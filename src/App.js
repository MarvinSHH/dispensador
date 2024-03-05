import React from "react";
import "./App.css";
import HeaderNav from "./Componentes/HeaderNav"; // Importar el componente Header
import Footer from "./Componentes/Footer";
import Cuerpo from "./Componentes/Cuerpo";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderNav />
      <Cuerpo />
      <Footer />
    </div>
  );
}
export default App;
