import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Bienvenida from "./components/bienvenida/bienvenida";
import Productos from "./components/productos/productos";
import Contacto from "./components/contacto/contacto";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Mangueras y Equipos Hidráulicos, S.A.";
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
