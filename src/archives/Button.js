import React from 'react';
import styles from '../styles/Archives.module.css';

const Button = ({text, onClick}) => {
    console.log('Button clicked!');
    return <button className={styles.button} onClick={onClick}>{text}</button>
};

export default Button;