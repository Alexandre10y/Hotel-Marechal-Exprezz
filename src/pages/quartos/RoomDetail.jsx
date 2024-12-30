import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./roomDetail.css";

const RoomDetail = () => {
    const { state } = useLocation(); // Obtém o estado do quarto
    const { id } = useParams(); // Obtém o ID do quarto

    // Verifica se o estado está correto
    if (!state || !state.room) {
        return <p>Erro ao carregar os detalhes do quarto.</p>;
    }

    const { title, images, amenities, category, numeroHospedes } = state.room;

    return (
        <Container className="room-detail mt-4">
            <Row className="align-items-stretch">
                {/* Carrossel das imagens */}
                <Col md={7} className="d-flex flex-column">
                    <Carousel>
                        {images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={`Imagem ${index + 1} do quarto ${title}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>

                {/* Informações do quarto */}
                <Col md={5} className="d-flex flex-column">
                    <div className="fundo flex-grow-1">
                        <h2>{title}</h2>
                        <hr className="hrquarto" />
                        <p>
                            <strong>Categoria:</strong> {category}
                        </p>
                        <p>
                            <strong>Capacidade Máxima de Hóspedes:</strong> {numeroHospedes}
                        </p>
                        <p>
                            <strong>Café Incluso:</strong> Sim
                        </p>
                        <p>
                            <strong>Reserve Já:</strong>{" "}
                            <a
                                className="linkwhats"
                                href="https://wa.me/5542933008907?text=Olá! Gostaria de efetuar uma reserva."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp
                            </a>
                        </p>
                    </div>
                    <br />
                    <div className="fundo flex-grow-1">
                        <h2>Detalhes</h2>
                        <hr className="hrquarto" />
                        <ul>
                            {amenities.split(", ").map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                        </ul>
                    </div>
                    <br />
                    <div>
                    <a
                        href="https://wa.me/5542933008907?text=Olá! Gostaria de efetuar uma reserva."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn btn-success w-100 mb-2">RESERVE AGORA!</button>
                    </a>    
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default RoomDetail;
