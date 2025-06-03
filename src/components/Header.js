import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom'; // Importa Link para navegación
import '../styles/Header.css';
import logo from '../images/logovicontfinal2.png';


const Header = () => {
    const[isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev)=> !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="company logo" className="logo" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/"> Inicio</Link></li>
                        <li><Link to="/services">Servicios</Link></li>
                        <li className="dropdown-container" ref={dropdownRef}>
                            <a href="#Tools" onClick ={toggleDropdown} className="dropdown-link">Herramientas</a>
                        { isOpen && (
                            <ul className="dropdown">
                                <li>
                                    <Link to="/converter" onClick={()=> setIsOpen(false)}>
                                        Convertidor
                                    </Link>
                                </li>
                            </ul>
                        )}
                        </li>
                        <li><Link to="/contact">Contactos</Link></li>
                    </ul>
                </nav>
            </div>
        </header> 
    );
    }
    export default Header;