import React from 'react';
import '../styles/Footer.css'; // Importa los estilos CSS
import { FaFacebookSquare, FaInstagram, FaTiktok, FaWhatsapp, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Contenido principal del footer */}
      <div className="footer-content">
        {/* Información de contacto */}
        <div className="footer-section contact-info">
          <h4>Contacto</h4>
          <span><FaWhatsapp size={15} color="#007bff "/>  (+593) 995 666 425</span>
          <div><FaMailBulk size={15} color ="#007bff"/> liczm1311@hotmail.com</div>
          <div><i className="fas fa-map-marker-alt"></i> Cuenca - Ecuador</div>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section quick-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/"><i className="fas fa-home"></i> Inicio</a></li>
            <li><a href="/services"><i className="fas fa-cog"></i> Servicios</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section social-media">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61575579099476" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={50} color="#007bff "/>
            </a>
            <a href="https://www.instagram.com/vicontcontable/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} color="#007bff "/>
            </a>
            {/*}
            <a href="https://tiktok.com/tupagina" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={50} color="#007bff "/>
            </a>
            {*/}
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="footer-bottom">
        <span>&copy; 2025 VICONT. Todos los derechos reservados.</span>
        <span>
          Desarrollado por
          <a href="/" target="_blank" rel="noopener noreferrer">
            VICONT
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;