// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className="footer-section">
            <h5>Hotel Marechal Exprezz</h5>
            <p>
              Experiência única de hospedagem. <br />
              O conforto e a hospitalidade que você merece.
            </p>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Links Úteis</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">Sobre</a></li>
              <li><a href="/services">Serviços</a></li>
              <li><a href="/contact">Contato</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Contato</h5>
            <p>
            Rua Marechal Cândido Rondon, 2290 Centro, Laranjeiras do Sul, PR <br />
              <strong>Telefone:</strong> (42) 3635-2939 <br />
              <strong>Email:</strong> reservas@marechalhotel.com.br
            </p>
          </Col>
          <Col md={2} className="footer-section">
            <h5>Siga-nos</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/laranjeiraspalacehotel" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/laranjeiraspalacehotel/" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me/554236352939" aria-label="Whatsapp"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom text-center mt-4 pad-fut">
          <p>&copy; {new Date().getFullYear()} Hotel Marechal Exprezz. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
