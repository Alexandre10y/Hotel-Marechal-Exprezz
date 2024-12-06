import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./quartos.css";
import ladohotel from "../../assets/image/Home/ladofachada.jpeg";
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
      images: [ladohotel, ladohotel, ladohotel], // Array de imagens do quarto
      description: "Quarto para casal com cama king-size e vista incrível.",
    },
    {
      id: 5,
      title: "Duplo Casal",
      category: "Solteiros",
      images: [ladohotel, ladohotel, ladohotel], // Array com uma única imagem
      description: "Quarto confortável para uma pessoa.",
    },
    {
      id: 2,
      title: "Casal + Solteiro",
      category: "Casal e Família",
      images: [ladohotel, ladohotel, ladohotel], // Array de imagens do quarto
      description: "Ideal para famílias com duas camas de casal e sala integrada.",
    },
    
    {
      id: 3,
      title: "Solteiro",
      category: "Solteiros",
      images: [ladohotel, ladohotel, ladohotel], // Array com uma única imagem
      description: "Quarto confortável para uma pessoa.",
    },
    {
      id: 4,
      title: "Duplo Solteiro",
      category: "Solteiros",
      images: [ladohotel, ladohotel, ladohotel], // Array com uma única imagem
      description: "Quarto confortável para uma pessoa.",
    },
    {
      id: 6,
      title: "Triplo Solteiro",
      category: "Solteiros",
      images: [ladohotel, ladohotel, ladohotel], // Array com uma única imagem
      description: "Quarto confortável para uma pessoa.",
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
                    src={room.images[0]} // Exibir a primeira imagem do quarto como miniatura
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
            <button className="btn-quartos p-2 mb-3">Reservar Agora <FaWhatsapp className="ajuste-icon"/></button>
          </div>
          </div>
        </Row>
      </Container>

      
      <Modal show={modalShow} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedRoom?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Carousel para exibir imagens do quarto */}
          <Carousel>
            {selectedRoom?.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`Imagem ${index + 1} do quarto ${selectedRoom.title}`}
                  className="d-block w-100 rounded modal-image"
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p className="mt-3">{selectedRoom?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default Quartos;
