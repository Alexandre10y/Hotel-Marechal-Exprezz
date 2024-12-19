    // src/pages/sobre/Sobre.js
    import React, { useEffect } from 'react';
    import { Container, Row, Col, Carousel } from 'react-bootstrap';
    import './sobre.css';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import nelci from '../../assets/image/Sobre/nelci.jpg';
    import xande from '../../assets/image/Sobre/xande.jpg';
    import ladohotel from '../../assets/image/Fotos Hotel/Frente/hotel-marechal-frente.png';

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
            <h2 className="mb-3 centered " data-aos="fade-right">Bem-Vindo ao Marechal Exprezz!</h2>
            <Col
              md={6}
              xs={12}
              data-aos="fade-right"
            >
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
                  Reserve Agora: Garanta sua estadia extraordinária no Marechal Exprezz.
                </li>
              </ul>
              <p className="text-muted mt-3">
                Bem-vindo a uma jornada única de conforto e hospitalidade!
              </p>
            </Col>
            <Col
              md={6}
              xs={12}
              className="text-center"
              data-aos="fade-left"
            >
              <img
                src={ladohotel}
                alt="Hotel Marechal Exprezz"
                className="img-fluid rounded intro-image"
              />
            </Col>
          </Row>


          {/* Seção da Equipe com Carousel */}
          <div className="text-center" data-aos="fade-up">
            <div className='vai-pra-la'>
              <hr />
            </div>
            <h3 className="mb-4">Equipe</h3>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: '600px' }}>
              Seja calorosamente recebido na equipe do Hotel Marechal Exprezz, onde a dedicação e o profissionalismo são os pilares que sustentam nosso compromisso com a excelência. Aqui, cada membro desempenha um papel vital na criação de uma experiência única para nossos hóspedes.
            </p>
            <div className='vai-pra-la tam'>
              <hr className='espaco' />
            </div>



            {/* <Carousel controls={true} indicators={true} className='pt-5 ' data-aos="fade-right">
              {teamMembers.map((member, index) => (
                <Carousel.Item key={index}>
                  <div className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle mb-3"
                      style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'cover',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    <h5>{member.name}</h5>
                    <p className="text-muted">{member.title}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel> */}
          </div>
        </Container>
      );
    };

    export default Sobre;
