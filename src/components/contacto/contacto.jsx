import './contacto.css';
import PixelCard from './PixelCard';
import { FaWhatsapp, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Contacto() {
  return (
    <section id="contacto" className="contacto-container">
      <motion.div 
        className="contacto-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contáctanos</h2>
        
        {/* Información de contacto con PixelCard */}
        <PixelCard variant="blue">
          <div className="datos-contacto">
            <p><FaMapMarkerAlt className="icon" />&nbsp;3ª. Calle 15-12 Zona 4, Frente a Frisa, Villa Nueva, Guatemala</p>
            <p><FaPhone className="icon" />&nbsp;6631-1503 / 6636-1492</p>
            <p><FaEnvelope className="icon" />&nbsp;manguerasyequiposhidraulicos@hotmail.com</p>
            
            <motion.a 
              href="https://wa.me/50255163091" 
              target="_blank" 
              className="btn-whatsapp"
              whileHover={{ scale: 1.1 }}
            >
              <FaWhatsapp />&nbsp;WhatsApp
            </motion.a>
          </div>
        </PixelCard>

        {/* Redes sociales con PixelCard */}
        <PixelCard variant="pink">
          <div className="redes-sociales">
            <motion.a href="#" target="_blank" whileHover={{ scale: 1.2 }}>
              <FaFacebook />
            </motion.a>
            <motion.a href="#" target="_blank" whileHover={{ scale: 1.2 }}>
              <FaTiktok />
            </motion.a>
          </div>
        </PixelCard>
        
        {/* Mapa con PixelCard */}
        <PixelCard variant="yellow">
          <div className="mapa">
            <a href="https://goo.gl/maps/Z48q7F52z3FJ9xHf7" target="_blank" rel="noopener noreferrer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.9753296442195!2d-90.57845540160632!3d14.516760555443508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMxJzAwLjMiTiA5MMKwMzQnNDMuMyJX!5e0!3m2!1ses!2sgt!4v1700000000000"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
        </PixelCard>

        {/* Botón flotante de WhatsApp */}
        <a href="https://wa.me/50255163091" className="whatsapp-float" target="_blank">
          <FaWhatsapp />
        </a>

      </motion.div>
    </section>
  );
}

export default Contacto;
