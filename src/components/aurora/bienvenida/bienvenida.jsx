import './bienvenida.css';
import { motion } from 'framer-motion';
import Aurora from '../aurora/aurora';

function Bienvenida() {
  console.log("Bienvenida.jsx está montado correctamente"); // Verificar en consola

  return (
    <section id="inicio" className="bienvenida-container">
      {/* Fondo Aurora con turquesa y amarillo */}
      <Aurora 
        colorStops={["#00E4D0", "#FFD700", "#00A896"]} 
        blend={0.5} 
        amplitude={1.0} 
      />

      {/* Contenido principal */}
      <motion.div 
        className="bienvenida-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Mangueras y Equipos Hidráulicos, S.A.</h1>
        <p>Fundada en 1,982, especializada en el ramo de mangueras hidráulicas e industriales, conexiones y adaptadores, válvulas, accesorios en hierro negro, acero inoxidable, hierro galvanizado, tubería para mediana, alta y extrema presión.</p>

        {/* Misión */}
        <div className="seccion-info">
          <h2>Misión</h2>
          <p>
            En Mangueras y Equipos Hidráulicos, S.A., nuestra misión es ofrecer soluciones integrales y de alta calidad en mangueras hidráulicas e industriales, conexiones, válvulas y equipos especializados, garantizando la seguridad, eficiencia y durabilidad en cada producto. Nos comprometemos a satisfacer las necesidades de nuestros clientes en los sectores industriales, agrícolas y automotrices mediante un servicio confiable, productos de excelencia y un equipo altamente capacitado.
          </p>
        </div>

        {/* Visión */}
        <div className="seccion-info">
          <h2>Visión</h2>
          <p>
            Ser la empresa líder en Guatemala y Centroamérica en la distribución de mangueras y equipos hidráulicos, reconocida por la calidad de nuestros productos, innovación constante y el compromiso con la satisfacción total de nuestros clientes. Aspiramos a expandir nuestro alcance, fortaleciendo nuestra presencia en nuevos mercados y consolidándonos como la mejor opción en soluciones hidráulicas e industriales.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Bienvenida;
