import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./quartos.css";
import s from "../../assets/image/quartos/solteiro.jpeg";
import duplosolteiro from "../../assets/image/quartos/duplo soleiro.png";
import c from "../../assets/image/quartos/casal.jpeg";
import dc from "../../assets/image/quartos/duplo casal.png";
import triplo from "../../assets/image/quartos/triplo.png";
import casaleduplos from "../../assets/image/quartos/casaleduplo.png";
import { FaWhatsapp } from "react-icons/fa";
const Quartos = () => {
  const [filter, setFilter] = useState("Todos");
  const [modalShow, setModalShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      title: "Casal",
      category: "Casal e Família",
      images: [c, c, c],
      amenities: " ❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem e 🛎 atendimento 24 horas.",
    },
    {
      id: 5,
      title: "Duplo Casal",
      category: "Solteiros",
      images: [dc, dc, dc],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem e 🛎 atendimento 24 horas.",
    },
    {
      id: 2,
      title: "Casal + Duplo Solteiro",
      category: "Casal e Família",
      images: [casaleduplos, casaleduplos, casaleduplos],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem e 🛎 atendimento 24 horas.",
    },
    {
      id: 3,
      title: "Solteiro",
      category: "Solteiros",
      images: [s, s, s],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem e 🛎 atendimento 24 horas.",
    },
    {
      id: 4,
      title: "Duplo Solteiro",
      category: "Solteiros",
      images: [duplosolteiro, duplosolteiro, duplosolteiro],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem e 🛎 atendimento 24 horas.",
    },
    {
      id: 6,
      title: "Triplo Solteiro",
      category: "Solteiros",
      images: [triplo, triplo, triplo],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem e 🛎 atendimento 24 horas.",
    },
  ];

  const filteredRooms =
    filter === "Todos" ? rooms : rooms.filter((room) => room.category === filter);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
    setModalShow(false);
  };

  return (
    <div className="quartos-page">
      <Container>
        <div className="pt-4">
          <h2 className="text-center mb-4">Confira Nossos Quartos</h2>
        </div>


        {/* Filtros */}
        <div className="filters mb-4 text-center">
          <button
            className={`filter-btn ${filter === "Todos" ? "active" : ""}`}
            onClick={() => setFilter("Todos")}
          >
            Todos os Quartos
          </button>
          <button
            className={`filter-btn ${filter === "Casal e Família" ? "active" : ""}`}
            onClick={() => setFilter("Casal e Família")}
          >
            Casal e Família
          </button>
          <button
            className={`filter-btn ${filter === "Solteiros" ? "active" : ""}`}
            onClick={() => setFilter("Solteiros")}
          >
            Solteiros
          </button>
        </div>

        {/* Quartos */}
        <Row>
          <AnimatePresence>
            {filteredRooms.map((room) => (
              <Col md={6} lg={4} key={room.id} className="mb-4 anima-quarto">
                <motion.div
                  className="room-card"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={animationVariants}
                  transition={{ duration: 0.4 }}
                >
                  <div className="room-overlay" onClick={() => handleOpenModal(room)}>
                    <span className="room-title">{room.title}</span>
                    <span className="room-plus">+</span>
                  </div>
                  <img
                    src={room.images[0]}
                    alt={room.title}
                    className="room-image"
                  />
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        <Row>
          <div className="parent-duvida">

            <div className="duvidas p-2">
              <h3 className="op">Precisa de Ajuda ?</h3>
              <p className="mb-2">Entre em contato direo pelo WhatsApp</p>
              <a
                href="https://wa.me/5542933008907?text=Ol%C3%A1!%20Tudo%20bem%3F%0AGostaria%20de%20efetuar%20uma%20reserva%20no%20Hotel%20Marechal%20Express.%0APoderia%2C%20por%20favor%2C%20me%20informar%20sobre%20a%20disponibilidade%20e%20os%20procedimentos%20para%20confirmar%20a%20reserva%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-quartos p-2 mb-3">
                  Reservar Agora <FaWhatsapp className="ajuste-icon" />
                </button>
              </a>
            </div>
          </div>
        </Row>
      </Container>


      <Modal show={modalShow} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="text-center">
          <Modal.Title className="w-100">{selectedRoom?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {/* Exibir apenas a imagem selecionada */}
          {selectedRoom?.images[0] && (
            <img
              src={selectedRoom.images[0]}
              alt={`Imagem do quarto ${selectedRoom.title}`}
              className="d-block w-100 rounded modal-image"
            />
          )}
          {/* Descrição do quarto */}
          <p className="mt-3">{selectedRoom?.description}</p>
          {/* Lista de amenities */}
          <p className="mt-2">
            <strong>O que este quarto oferece:</strong>
            <br />
            {selectedRoom?.amenities}
          </p>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <a
            href="https://wa.me/5542933008907?text=Ol%C3%A1!%20Tudo%20bem%3F%0AGostaria%20de%20efetuar%20uma%20reserva%20no%20Hotel%20Marechal%20Express.%0APoderia%2C%20por%20favor%2C%20me%20informar%20sobre%20a%20disponibilidade%20e%20os%20procedimentos%20para%20confirmar%20a%20reserva%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-success p-2">
              Reservar Agora <FaWhatsapp className="ajuste-icon" />
            </button>
          </a>

          <Button className="btn p-2" variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Quartos;
