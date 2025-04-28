// src/components/Services.js
import React from 'react';
import { FaBalanceScaleLeft, FaChartLine, FaBlackTie } from 'react-icons/fa'; // Íconos de React Icons
import '../styles/Services.css'; // Archivo CSS para estilizar los Servicios
import logo from '../images/logovicontfinal2.png'; // Importa la imagen del logo
import NormalTitle from '../archives/NormalTitle.js';
import ServiceItem from '../archives/ServiceItem.js';

const Services = () => {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <img src={logo}alt="company logo" className="services-logo" />
        < NormalTitle text = "Nuestros Servicios"/>
        <div className="service-list">
          <ServiceItem
            icon={FaBalanceScaleLeft}
            subTitle="Asesoría Contable"
            details={[
              "Contabilidad General",
              "Asesoría Laboral",
              "Asesoría Tributaria",
              "Outsourcing Contable",
            ]}
          />
          <ServiceItem
            icon={FaChartLine}
            subTitle="Asesoría Financiera"
            details={[
              "Análisi de Estados Financieros",
              "Presupuestos y Proyecciones",
              "Control Interno",
              "Optimización de Costos",
            ]}
          />
          <ServiceItem
            icon={FaBlackTie}
            subTitle="Asesoría Empresarial"
            details={[
              "Constitución de Empresas",
              "Evaluación de Riesgos",
              "UAFE",
            ]}
          />   
        </div>
      </div>
    </section>
  );
};

export default Services;