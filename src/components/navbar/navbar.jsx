import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};

return (
<>
    <header className="navbar-header">
    <nav className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>

        <img className="navbar-logo" src="/assets/logo.png" alt="Logo" />

        <ul className="navbar-links">
        <li><a href="#about" className="navbar-link">About</a></li>
        <li><a href="#services" className="navbar-link">We Offer</a></li>
        <li><a href="#gallery" className="navbar-link">Gallery</a></li>
        <li><a href="#testimonials" className="navbar-link">Testimonials</a></li>
        <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
    </nav>

    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className='back-button' onClick={toggleMenu}>
        ← Back
        </button>
  <ul>

    <li><a href="#about" onClick={toggleMenu}>About</a></li>
    <li><a href="#services" onClick={toggleMenu}>We Offer</a></li>
    <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
    <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
  </ul>
</div>

    </header>

    {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
</>
);
}

export default Navbar;
