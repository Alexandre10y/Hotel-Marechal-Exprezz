import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Services from './pages/services';
import Footer from './components/Footer';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Quartos from './pages/quartos';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/localizacao" element={<Contato />} />
        <Route path="/acomodações" element={<Quartos />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
