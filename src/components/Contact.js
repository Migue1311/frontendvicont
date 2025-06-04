import React, { useState } from 'react';
import BigTitle from '../archives/BigTitle.js';
import DescBlack from '../archives/DescriptionBlack.js';
import '../styles/Contact.css';
import Button from '../archives/Button.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    ruc: '',
    phone: '',
    email: '',
    message: '',
  });

  const[isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    setIsLoading(true);
    e.preventDefault();
    try{
      const response = await fetch('https://webpages-zlkq.onrender.com/api/contacts', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(!response.ok){
        throw new Error("Error al enviar la consulta");
      }

    alert('¡Gracias por contactarnos! Nos pondremos en contacto pronto.');
    setFormData({
      businessName: '',
      ruc: '',
      phone: '',
      email: '',
      message: '',
    });
  } catch (error){
    console.error('Error:', error);
    alert('Hubo un problema al enviar la consulta. Intentalo de nuevo');
  }
  
    setIsLoading(false);
  };

  const formFields = [
    { id: 'businessName', label: 'Razón Social:', type: 'text' },
    { id: 'ruc', label: 'RUC:', type: 'text' },
    { id: 'phone', label: 'Teléfono:', type: 'tel' },
    { id: 'email', label: 'Email:', type: 'email' },
    { id: 'message', label: 'Descripción de la Consulta:', type: 'textarea', rows: 5 },
  ];

  return (
    <div className="contact">
      <BigTitle text="Haz tu Consulta"/>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-columns">
          {formFields.map((field) => (
            <div key={field.id} className="form-column">
              <div className="form-group">
                <label htmlFor={field.id}>
                  <DescBlack text={field.label} />
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={field.rows}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <Button
            text="Enviar Consulta"
            onClick={handleSubmit}
            isLoading={isLoading}
            type="submit"
        />
      </form>
    </div>
  );
};

export default Contact;
