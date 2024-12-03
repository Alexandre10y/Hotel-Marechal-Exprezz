// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/image/Fotos Hotel/Logo/HOTEL MARECHAL COR CHUMBO.png'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home"><img className='w-25' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="sobre">Sobre</Nav.Link>
            <Nav.Link href="acomodações">Acomodações</Nav.Link>
            <Nav.Link href="localizacao">Localização</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
