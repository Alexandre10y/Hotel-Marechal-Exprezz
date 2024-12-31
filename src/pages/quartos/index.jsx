import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./quartos.css";
//Quartos Solteiros
import s from "../../assets/image/quartos/Solteiro/Solteiro Capa.jpeg";
import solteirolado from "../../assets/image/quartos/Solteiro/Solteiro L.jpeg";
import solteirofrente from "../../assets/image/quartos/Solteiro/Solterio F.jpeg";
import fundosolteiro from "../../assets/image/quartos/Solteiro/Fundo.jpeg";
import banheirosolteiro from "../../assets/image/quartos/Solteiro/Banheiro.jpeg";

//Quartos Duplo Solteiro
import duplosolteiro from "../../assets/image/quartos/duplo soleiro.png";
import banheiro from "../../assets/image/quartos/DuploSolteiro/banheiro.jpeg";
import camaaltadp from "../../assets/image/quartos/DuploSolteiro/camaaltadp.jpeg";
import dpfrente from "../../assets/image/quartos/DuploSolteiro/dpfrente.jpeg";
import frente2dp from "../../assets/image/quartos/DuploSolteiro/frente2dp.jpeg";
import ladodp from "../../assets/image/quartos/DuploSolteiro/lado.jpeg";

//Quarto Casal
import c from "../../assets/image/quartos/Casal/casal.png";
import CasalLado from "../../assets/image/quartos/Casal/CasalLado.jpeg";
import bancada from "../../assets/image/quartos/Casal/bancada.jpeg";
import casalfundo from "../../assets/image/quartos/Casal/casal fundo.jpeg";

//Quarto Duplo Casal
import dc from "../../assets/image/quartos/DuploCasal/Frente.jpeg";
import dclado from "../../assets/image/quartos/DuploCasal/Lado.jpeg";
import dcpainel from "../../assets/image/quartos/DuploCasal/PainelCama.jpeg";
import dcpainel2 from "../../assets/image/quartos/DuploCasal/Painel.jpeg";
import dcbanheiro from "../../assets/image/quartos/DuploCasal/banheiro.jpeg"; 

//Quarto Triplo Solteiro
import triplocapa from "../../assets/image/quartos/Triplo/Triplo Capa.jpeg";
import banheirotriplo from "../../assets/image/quartos/Triplo/banheirotriplo.jpeg";
import triplopainel from "../../assets/image/quartos/Triplo/paineltriplo.jpeg";
import triplolado2 from "../../assets/image/quartos/Triplo/triplolado.jpeg";

//Quarto Casal e Duplo Solteiro
import banheiroCasalDuplo from "../../assets/image/quartos/CasalDuplosSolteiro/Banheiro.jpeg";
import frenteCasalDuplo from "../../assets/image/quartos/CasalDuplosSolteiro/Frente.jpeg";
import ladoCasalDuplo from "../../assets/image/quartos/CasalDuplosSolteiro/Lado.jpeg";
import lado2CasalDuplo from "../../assets/image/quartos/CasalDuplosSolteiro/Lado2.jpeg";
import casaleduplos from "../../assets/image/quartos/CasalDuplosSolteiro/casalduplo.png";

import { FaWhatsapp } from "react-icons/fa";

const Quartos = () => {
  const [filter, setFilter] = useState("Todos");
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      title: "Casal",
      category: "Casal e Família",
      numeroHospedes: "2",
      images: [c, CasalLado,casalfundo,bancada, banheiro],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem, 🛎 atendimento 24 horas.",
    },
    {
      id: 5,
      title: "Duplo Casal",
      category: "Casal e Família",
      numeroHospedes: "4",
      images: [dc, dcpainel, dclado, dcpainel2,dcbanheiro],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem, 🛎 atendimento 24 horas.",
    },
    {
      id: 2,
      title: "Casal + Duplo Solteiro",
      category: "Casal e Família",
      numeroHospedes: "4",
      images: [casaleduplos, lado2CasalDuplo , ladoCasalDuplo,frenteCasalDuplo ,banheiroCasalDuplo ],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem, 🛎 atendimento 24 horas.",
    },
    {
      id: 3,
      title: "Solteiro",
      category: "Solteiros",
      numeroHospedes: "1",
      images: [s, solteirolado, solteirofrente, fundosolteiro,banheirosolteiro,],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem, 🛎 atendimento 24 horas.",
    },
    {
      id: 4,
      title: "Duplo Solteiro",
      category: "Solteiros",
      numeroHospedes: "2",
      images: [duplosolteiro, dpfrente,frente2dp, camaaltadp,ladodp, banheiro],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem, 🛎 atendimento 24 horas.",
    },
    {
      id: 6,
      title: "Triplo Solteiro",
      category: "Solteiros",
      numeroHospedes: "3",
      images: [triplocapa,triplolado2 ,triplopainel,banheirotriplo],
      amenities: "❄ Ar Condicionado, 📺 Televisão, 📲 Internet, ♨ Café Da Manhã, 🚗 Garagem, 🛎 atendimento 24 horas.",
    },
  ];

  const filteredRooms =
    filter === "Todos" ? rooms : rooms.filter((room) => room.category === filter);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  // Função para redirecionar ao clicar no quarto
  const handleRoomClick = (room) => {
    navigate(`/quarto/${room.id}`, { state: { room } });
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
                  onClick={() => handleRoomClick(room)}
                >
                  <div className="room-overlay">
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
              <p className="mb-2">Entre em contato direto pelo WhatsApp</p>
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
    </div>
  );
};

export default Quartos;
