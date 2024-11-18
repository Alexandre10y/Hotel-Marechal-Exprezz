import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./quartos.css";
import ladohotel from "../../assets/image/Home/ladofachada.jpeg";

const Quartos = () => {
  const [filter, setFilter] = useState("Todos");
  const [modalShow, setModalShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      title: "Casal",
      category: "Casal e Família",
      image: ladohotel,
      description: "Quarto para casal com cama king-size e vista incrível.",
    },
    {
      id: 2,
      title: "Casal e Família",
      category: "Casal e Família",
      image: ladohotel,
      description: "Ideal para famílias com duas camas de casal e sala integrada.",
    },
    {
      id: 3,
      title: "Solteiro",
      category: "Solteiros",
      image: ladohotel,
      description: "Quarto confortável para uma pessoa com todas as comodidades.",
    },
    {
      id: 4,
      title: "Duplo Solteiro",
      category: "Solteiros",
      image: ladohotel,
      description: "Dois quartos de solteiro conectados, ideais para amigos ou família.",
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
        <h2 className="text-center mb-4">Nossos Quartos</h2>

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
              <Col md={6} lg={4} key={room.id} className="mb-4">
                <motion.div
                  className="room-card"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={animationVariants}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className="room-image"
                  />
                  <div className="room-overlay" onClick={() => handleOpenModal(room)}>
                    <span className="room-title">{room.title}</span>
                    <span className="room-plus">+</span>
                  </div>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>

      {/* Modal para detalhes */}
      <Modal show={modalShow} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedRoom?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedRoom?.image}
            alt={selectedRoom?.title}
            className="img-fluid mb-3"
          />
          <p>{selectedRoom?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Quartos;
