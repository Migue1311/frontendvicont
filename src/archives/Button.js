import React from 'react';
import styles from '../styles/Archives.module.css';

const Button = ({ text, onClick, isLoading, type = "button" }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={isLoading}
      type={type}
    >
      {isLoading ? 'Enviando...' : text}
    </button>
  );
};

export default Button;
