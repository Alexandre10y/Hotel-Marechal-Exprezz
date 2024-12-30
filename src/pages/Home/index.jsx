// src/pages/home/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaConciergeBell, FaBuilding, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import quartos from '../../assets/image/Fotos Hotel/Frente/hotel google.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import s from "../../assets/image/quartos/Solteiro/Solteiro Capa.jpeg";
import c from "../../assets/image/quartos/Casal/CasalCapa.jpeg";
import ds from "../../assets/image/quartos/DuploSolteiro/dpfrente.jpeg";
import './home.css';


const Home = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    AOS.init({ duration: 1200 }); // Configura a duração da animação
  }, []);

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
            onClick={() => (window.location.href = "/sobre")}
          >
            Saiba Mais
          </motion.button>
        </motion.div>
      </section>

      {/* Serviços com animação de entrada */}
      <section className="services" data-aos="fade-left">
        <Container>
          <Row className="justify-content-center">
            {[
              { icon: <FaConciergeBell size={40} />, title: "Equipe Hospitalidade", text: "Nossa equipe calorosa e dedicada está pronta para superar suas expectativas." },
              { icon: <FaBuilding size={40} />, title: "Conferências", text: "Sala de conferência e reuniõe importantes com conforto e atendimento." },
              { icon: <FaClock size={40} />, title: "Atendimento no Ritmo do Seu Tempo", text: "Serviço personalizado que atende às suas necessidades com precisão." },
              { icon: <FaMapMarkerAlt size={40} />, title: "Localização Privilegiada", text: "Fácil acesso a pontos turísticos, localizado no centro gastronômico da cidade." }
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

      <section className='card-ap pt-3' data-aos="fade-up">
        <Container>
          <Row>
            <h3 data-aos="fade-down">OS MAIS RESERVADOS!</h3>
            <p data-aos="fade-left">Os queridinhos do Marechal Express na sua tela</p>
          </Row>
          <br />
          <Row>
            <Col className='colunas' data-aos="zoom-in">
              <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none' }}>
                <Card.Img variant="top" src={s} />
                <Card.Body>
                  <Card.Title>Solteiro</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>❄ Ar Condicionado</li>
                      <li>📺 Televisão</li>
                      <li>📲 Internet</li>
                      <li>♨ Café Da Manhã</li>
                      <li>🚗 Garagem</li>
                    </ul>
                  </Card.Text>
                  <a
                    href="https://wa.me/5542933008907?text=Olá! Gostaria de efetuar uma reserva."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-dark p-2">
                      Reservar Agora <FaWhatsapp className="ajuste-icon" />
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className='colunas' data-aos="zoom-in">
              <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none' }}>
                <Card.Img variant="top" src={c} />
                <Card.Body>
                  <Card.Title>Casal</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>❄ Ar Condicionado</li>
                      <li>📺 Televisão</li>
                      <li>📲 Internet</li>
                      <li>♨ Café Da Manhã</li>
                      <li>🚗 Garagem</li>
                    </ul>
                  </Card.Text>
                  <a
                    href="https://wa.me/5542933008907?text=Olá! Gostaria de efetuar uma reserva."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-dark p-2">
                      Reservar Agora <FaWhatsapp className="ajuste-icon" />
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className='colunas' data-aos="zoom-in">
              <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none' }}>
                <Card.Img variant="top" src={ds} />
                <Card.Body>
                  <Card.Title>Duplo Solteiro</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>❄ Ar Condicionado</li>
                      <li>📺 Televisão</li>
                      <li>📲 Internet</li>
                      <li>♨ Café Da Manhã</li>
                      <li>🚗 Garagem</li>
                    </ul>
                  </Card.Text>
                  <a
                    href="https://wa.me/5542933008907?text=Olá! Gostaria de efetuar uma reserva."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-dark p-2">
                      Reservar Agora <FaWhatsapp className="ajuste-icon" />
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='container pt-4 pb-5' data-aos="fade-up">
        <div className='contato'>
          <h3 className='' data-aos="fade-right">CONTATO</h3>
          <hr />
        </div>
        <div className='list-itens' data-aos="fade-left">
          <ul>
            <li>
              <a target='_blank' href="https://wa.me/5542933008907?text=Ol%C3%A1!%20Tudo%20bem%3F%0AGostaria%20de%20efetuar%20uma%20reserva%20no%20Hotel%20Marechal%20Express.%0APoderia%2C%20por%20favor%2C%20me%20informar%20sobre%20a%20disponibilidade%20e%20os%20procedimentos%20para%20confirmar%20a%20reserva%3F">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://www.instagram.com/hotel_marechal/">
              <FaInstagram />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://www.facebook.com/profile.php?id=61568187767069">
              <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
        <div className='contato'>
          <h5 className='fonts' data-aos="fade-up">VOCÊ É MUITO MAIS QUE UM HÓSPEDE PARA O MARECHAL EXPRESS!</h5>
        </div>
      </section>

    </div>
  );
};

export default Home;
