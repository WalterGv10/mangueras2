import './productos.css';
import productos from './productos-data';
import { motion } from 'framer-motion';

function Productos() {
  return (
    <section id="productos" className="productos-container">
      <h2>Nuestros Productos</h2>

      {/* Grid de productos con animaciones */}
      <div className="productos-grid">
        {productos.map((item, index) => (
          <motion.div 
            key={index} 
            className="producto-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="producto-card-inner">
              {/* Cara frontal (imagen) */}
              <div className="producto-card-front">
                <img src={item.imagen} alt={item.titulo} />
                <h3>{item.titulo}</h3>
              </div>

              {/* Cara trasera (descripción) */}
              <div className="producto-card-back">
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Tarjeta especial creativa */}
        <motion.div 
          className="producto-card especial"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="producto-card-inner">
            {/* Frente con mensaje llamativo */}
            <div className="producto-card-front especial-front">
              <h3>¿Buscas algo más?</h3>
              <p>¡Tenemos lo que necesitas!</p>
            </div>

            {/* Dorso con llamada a la acción */}
            <div className="producto-card-back especial-back">
              <h3>¡Contáctanos!</h3>
              <p>Si no encuentras lo que buscas, escríbenos y te ayudamos a encontrar la mejor solución.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Productos;
