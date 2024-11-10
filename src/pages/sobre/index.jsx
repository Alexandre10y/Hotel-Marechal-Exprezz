// src/pages/sobre/Sobre.js
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './sobre.css';
import nelci from '../../assets/image/Sobre/nelci.jpg';
import xande from '../../assets/image/Sobre/xande.jpg';
import ladohotel from '../../assets/image/Home/ladofachada.jpeg';

const Sobre = () => {
  const teamMembers = [
    {
      name: "Nelci Da Rosa",
      title: "CEO & Fundador",
      image: nelci,
      quote: "Sempre há uma solução, basta estar determinado e comprometido para alcançá-la."
    },
    {
      name: "Alexandre Belloni",
      title: "Marketing & Suporte",
      image: xande,
      quote: "Garantindo que cada estadia seja uma experiência excepcional. Engajamento e Atendimento Personalizado"
    },
    {
      name: "Maria Oliveira",
      title: "Coordenadora de Eventos",
      image: xande,
      quote: "Trabalho com afinco para que cada evento seja memorável e impecável. Cada momento deve ser vivido"
    },
  ];

  return (
    <Container className="sobre-page">
      {/* Seção de Introdução */}
      <Row className="align-items-center intro-section">
        <Col md={6} className="text-center">
          <img
            src={ladohotel}
            alt="Hotel Marechal Exprezz"
            className="img-fluid intro-image"
          />
        </Col>
        <Col md={6} className="welcome-text">
          <h2>Bem-Vindo ao Marechal Exprezz!</h2>
          <em>Explore Conosco:</em>
          <ul className="features-list">
            <li>Descubra a Elegância: Quartos luxuosos e design encantador.</li>
            <li>Eventos Especiais: Espaços versáteis para ocasiões memoráveis.</li>
            <li>Reserve Agora: Garanta sua estadia extraordinária no Marechal Exprezz.</li>
          </ul>
          <p>Bem-vindo a uma jornada única de conforto e hospitalidade!</p>
        </Col>
      </Row>

      {/* Seção da Equipe com Carousel */}
      <div className="team-section text-center">
        <h3>Equipe</h3>
        <p className="team-description">
          Seja calorosamente recebido na equipe do Hotel Marechal Exprezz, onde a dedicação e o profissionalismo são os pilares que sustentam nosso compromisso com a excelência. Aqui, cada membro desempenha um papel vital na criação de uma experiência única para nossos hóspedes.
        </p>

        <Carousel indicators controls className="team-carousel">
          {teamMembers.map((member, index) => (
            <Carousel.Item key={index}>
              <div className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                />
                <h5>{member.name}</h5>
                <p className="team-title">{member.title}</p>
                <blockquote>
                  “{member.quote}”
                </blockquote>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Sobre;
