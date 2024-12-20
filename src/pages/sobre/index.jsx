// src/pages/sobre/Sobre.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './sobre.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nelci from '../../assets/image/Sobre/nelci.jpg';
import xande from '../../assets/image/Sobre/xande.jpg';
import ladohotel from '../../assets/image/Fotos Hotel/Frente/hotel-marechal-frente.png';
import recepcao from '../../assets/image/Sobre/recpmenor.jpg';
import sofa from '../../assets/image/Sobre/sobre (1).jpeg';
import cafe from '../../assets/image/Sobre/sobre (2).jpeg';
import quarto from '../../assets/image/Sobre/sobre (3).jpeg';

const Sobre = () => {
  const teamMembers = [
    {
      name: "Nelci Da Rosa",
      title: "CEO & Fundador",
      image: nelci,
    },
    {
      name: "Alexandre Belloni",
      title: "Marketing & Suporte",
      image: xande,
    },
    {
      name: "Maria Oliveira",
      title: "Coordenadora de Eventos",
      image: xande,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inicializa o AOS
  }, []);

  return (
    <Container className="py-5">
      {/* Seção de Introdução */}
      <Row className="align-items-center mb-4 h-100 intro-section" id="intro">
        <h2 className="mb-3 centered " data-aos="fade-right">Bem-Vindo ao Marechal Express!</h2>
        <Col md={6} xs={12} data-aos="fade-right">
          <em className="text-muted d-block mb-3">Explore Conosco:</em>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-2">
              <span className="text-warning me-2">✓</span>
              Descubra a Elegância: Quartos e design encantador.
            </li>
            <li className="d-flex align-items-start mb-2">
              <span className="text-warning me-2">✓</span>
              Fácil acesso: Localização privilegiada.
            </li>
            <li className="d-flex align-items-start">
              <span className="text-warning me-2">✓</span>
              Reserve Agora: Garanta sua estadia extraordinária no Marechal Express.
            </li>
          </ul>
          <p className="text-muted mt-3">
            Bem-vindo a uma jornada única de conforto e hospitalidade!
          </p>
        </Col>
        <Col md={6} xs={12} className="text-center" data-aos="fade-left">
          <img
            src={ladohotel}
            alt="Hotel Marechal Express"
            className="img-fluid rounded intro-image"
          />
        </Col>
      </Row>

      {/* Seção da Equipe com Carousel */}
      <div className="text-center" data-aos="fade-up">
        <div className="vai-pra-la">
          <hr />
        </div>
        <p className="text-muted mx-auto mb-4" style={{ maxWidth: '600px' }}>
          Seja calorosamente recebido ao Hotel Marechal Express, onde a dedicação e o profissionalismo são os pilares que sustentam nosso compromisso com a excelência. Aqui, cada membro desempenha um papel vital na criação de uma experiência única para nossos hóspedes.
        </p>
        <div className="vai-pra-la tam">
          <hr className="espaco" />
        </div>
      </div>

      {/* Nova seção com imagens circulares */}
      <Row className="justify-content-center mt-5">
        <Col xs={6} md={3} className="text-center mb-4">
          <img
            src={sofa}
            alt="Imagem 1"
            className="img-fluid rounded-circle"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={6} md={3} className="text-center mb-4">
          <img
            src={cafe}
            alt="Imagem 2"
            className="img-fluid rounded-circle"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={6} md={3} className="text-center mb-4">
          <img
            src={quarto}
            alt="Imagem 3"
            className="img-fluid rounded-circle"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={6} md={3} className="text-center mb-4">
          <img
            src={recepcao}
            alt="Imagem 4"
            className="img-fluid rounded-circle"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>

  );
};

export default Sobre;
