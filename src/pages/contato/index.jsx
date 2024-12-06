import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos"; // Importando o AOS
import "aos/dist/aos.css"; // Importando o CSS do AOS
import "./contato.css";

const Contato = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos
      once: true, // A animação será executada apenas uma vez
    });
  }, []);

  return (
    <div className="contato-page">
      {/* Cabeçalho da Página */}
      <header
        className="contato-header text-center pt-5"
        data-aos="fade-up"
      >
        <h1 className="mb-3">Localização</h1>
        <p className="text-muted">
          Estamos prontos para ajudá-lo a qualquer momento.
        </p>
      </header>

      {/* Seção de Contato */}
      <Container className="py-5">
        <Row className="align-items-stretch">
          {/* Informações de Contato */}
          <Col
            md={12}
            className="mb-4"
            data-aos="fade-up"
          >
            <Card className="info-card shadow h-100">
              <Card.Body>
                <h3 className="mb-4">Localização</h3>
                <p className="pb-2">
                  <FaMapMarkerAlt className="text-dark me-2" />
                  <strong>Endereço:</strong> Rua Marechal Cândido Rondon, 2290, Centro,
                  Laranjeiras do Sul, PR
                </p>
                <div className="map-container">
                  <iframe
                    title="Mapa do Hotel"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.9497496332147!2d-52.413472999999996!3d-25.406492599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94efcb063911391f%3A0xad0a802228408fd5!2sR.%20Mal.%20C%C3%A2ndido%20Rondon%2C%202290%20-%20%C3%81gua%20Verde%2C%20Laranjeiras%20do%20Sul%20-%20PR%2C%2085301-060!5e0!3m2!1spt-BR!2sbr!4v1731729272587!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    style={{ border: 0, borderRadius: "8px" }}
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contato */}
        <Row className="mt-5">
          <Col data-aos="fade-left">
            <h3 className="mb-4">Contato:</h3>
            <p>
              <FaPhoneAlt className="text-dark me-2" />
              <strong>Telefone:</strong> +55 (42) 3635-2720
            </p>
            <p>
              <FaEnvelope className="text-dark me-2" />
              <strong>E-mail:</strong> reservashotelmarechal@hotmail.com
            </p>
            <h4 className="mt-4">Horário de Funcionamento</h4>
            <p>
              Segunda a Domingo: 24 horas
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contato;
