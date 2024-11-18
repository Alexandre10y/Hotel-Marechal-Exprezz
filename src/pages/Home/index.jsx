// src/pages/home/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaConciergeBell, FaBuilding, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './home.css';

const Home = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="home-page">
      {/* Seção de Introdução */}
      <section className="intro-section">
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Bem-vindo</h1>
          <p>
            Descubra uma experiência única de hospedagem no coração de Laranjeiras do Sul. No <span className='hotel-cor'>Hotel Marechal Express</span> , elevamos a arte da hospitalidade a um novo patamar.
          </p>
          <motion.button
            className="saiba-mais-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Saiba Mais
          </motion.button>
        </motion.div>
      </section>

      {/* Serviços com animação de entrada */}
      <section className="services">
        <Container>
          <Row className="justify-content-center">
            {[
              { icon: <FaConciergeBell size={40} />, title: "Equipe Hospitalidade", text: "Nossa equipe calorosa e dedicada está pronta para superar suas expectativas." },
              { icon: <FaBuilding size={40} />, title: "Eventos e Conferências", text: "Instalações modernas e espaços versáteis para conferências e celebrações especiais." },
              { icon: <FaClock size={40} />, title: "Atendimento no Ritmo do Seu Tempo", text: "Serviço personalizado que atende às suas necessidades com precisão." },
              { icon: <FaMapMarkerAlt size={40} />, title: "Localização Privilegiada", text: "Fácil acesso a pontos turísticos e vistas da cidade." }
            ].map((service, index) => (
              <Col key={index} xs={12} sm={10} md={6} lg={4} xl={3} className="d-flex align-items-stretch mb-4">
                <motion.div
                  className="icon-box"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  variants={cardVariants}
                >
                  <div className="icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
