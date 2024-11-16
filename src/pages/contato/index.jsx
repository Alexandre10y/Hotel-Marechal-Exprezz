// src/pages/contato/Contato.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./contato.css";

const Contato = () => {
  return (
    <div className="contato-page">
      {/* Cabeçalho da Página */}
      <div className="contato-header">
        <h1>Hotel Marechal Express</h1>
        <p>O lugar ideal para seu conforto e descanso.</p>
      </div>

      <Container>
        <Row>
          {/* Coluna Direita: Seção Alternativa */}
          <Col md={6}>
            <Card className="info-card">
              <Card.Body>
                <h3>Sobre Nós</h3>
                <p>
                  O Hotel Marechal Express é reconhecido pela hospitalidade e excelência
                  no atendimento. Oferecemos acomodações confortáveis e serviços de
                  qualidade em um ambiente acolhedor.
                </p>
                <h4>Horário de Funcionamento</h4>
                <p>
                  Segunda a Segunda
                  <br />
                  24Hrs - Dia
                </p>
                <h4>Diferenciais</h4>
                <ul>
                  <li>Wi-Fi gratuito</li>
                  <li>Café da manhã incluso</li>
                  <li>Estacionamento amplo</li>
                  <li>Localização privilegiada</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Coluna Esquerda: Informações de Contato */}
          <Col md={6}>
            <Card className="info-card">
              <Card.Body>
                <h3>Contato</h3>
                <p>
                  <strong>Endereço:</strong> Rua Marechal Cândido Rondon, 2290, Centro,
                  <br />
                  Laranjeiras do Sul, PR
                </p>
               
            <div className="map-container mt-4">
              <iframe
                title="Mapa do Hotel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.9497496332147!2d-52.413472999999996!3d-25.406492599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94efcb063911391f%3A0xad0a802228408fd5!2sR.%20Mal.%20C%C3%A2ndido%20Rondon%2C%202290%20-%20%C3%81gua%20Verde%2C%20Laranjeiras%20do%20Sul%20-%20PR%2C%2085301-060!5e0!3m2!1spt-BR!2sbr!4v1731729272587!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contato;
