import React from 'react';
import '../styles/Hero.css'; // Importa los estilos
import Title from '../archives/BigTitle.js';
import DescWhite from '../archives/DescriptionWhite.js';
import {Link} from 'react-router-dom'; // Importa Link para navegación
import Button from '../archives/Button.js'; // Importa el componente Button

const Hero = () => {
 
  return (
    <div className="hero">
      <div className="hero-content">
        <Title text="Transformamos números en estrategias"/>
        <DescWhite text="Asesoría contable, financiera y estratégica para llevar tu negocio al siguiente nivel."/>
        <Link to="/contact"> 
        <Button text="Contáctanos"/>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
    