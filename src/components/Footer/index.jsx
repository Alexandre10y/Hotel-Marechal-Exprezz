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
            <h5>Hotel Marechal Express</h5>
            <p>
              Experiência única de hospedagem. <br />
              O conforto e a hospitalidade que você merece.
            </p>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Links Úteis</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/localizacao">Contato</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Contato</h5>
            <p>
            Rua Marechal Cândido Rondon, 2290 Centro, Laranjeiras do Sul, PR <br />
              <strong>Telefone:</strong> (42) 3635-2720 <br />
              <strong>Email:</strong> reservashotelmarechal@hotmail.com
            </p>
          </Col>
          <Col md={2} className="footer-section">
            <h5>Siga-nos</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61568187767069" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/hotel_marechal/" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me/5542984022669?text=Ol%C3%A1!%20Tudo%20bem%3F%0AGostaria%20de%20efetuar%20uma%20reserva%20no%20Hotel%20Marechal%20Express.%0APoderia%2C%20por%20favor%2C%20me%20informar%20sobre%20a%20disponibilidade%20e%20os%20procedimentos%20para%20confirmar%20a%20reserva%3F" aria-label="Whatsapp"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom text-center mt-4 pad-fut">
          <p>&copy; {new Date().getFullYear()} Hotel Marechal Express. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
