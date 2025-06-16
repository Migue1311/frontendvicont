// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import TxtConverter from './components/tools/TxtConverter';
import Blog from './components/Blog';
import './styles/App.css'; // Archivo CSS global
import BlogPost from './components/blogComponents/BlogPost';



function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/converter" element={<TxtConverter />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/blog/*" element={<BlogPost/>} />
        {/* Puedes agregar más rutas aquí según sea necesario */}
      </Routes>
      <Footer />
    </Router>                               
  );
}

export default App;