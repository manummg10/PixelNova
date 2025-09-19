import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        

        {/* Contacto */}
        <div className="footer-section">
          <h3>SIGAMOS EN CONTACTO</h3>
          <p>
            <strong>En redes:</strong>
          </p>
          <div className="social-logos">
      <a href="#" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>

          <p>
            <strong>Por teléfono:</strong>
          </p>
          <p>+34 333 02 10 03</p>
          <p>+34 111 00 00 00</p>

          <p>
            <strong>Por mail:</strong>
          </p>
          <p>info@pixelnova.com</p>
          <p>soporte@pixelnova.net</p>

          <p>
            <strong>O en persona:</strong>
          </p>
          <p>
            C/Donde otro y esto 2,3º
            <br />
            04001 - Almeria
          </p>
        </div>
      </div>

      {/* Enlaces legales */}
      <div className="footer-bottom">
        <p>
          <a href="#">Aviso Legal</a> | <a href="#">Política de Privacidad</a> |{" "}
          <a href="#">Política de Cookies</a> | <a href="#">Fondos Públicos</a>
        </p>
        <p>&copy; Todos los derechos reservados. Manu Moraira | 2025</p>
      </div>

      {/* Botón de WhatsApp flotante */}
      <a
        href="https://wa.me/111000022"
        target="_blank"
        className="whatsapp-float"
        rel="noreferrer"
      >
        <img
          src="/img/whatsapp-logo_icon-icons.com_57054.png"
          alt="WhatsApp"
        />
      </a>
    </footer>
  );
}

export default Footer;

