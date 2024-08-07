import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AHC</div>
      <ul className="navbar-links">
        <li><a href="#about">Sobre Mi</a></li>
        <li><a href="#portfolio">Portafolio Web</a></li>
        <li><a href="#github">GitHub</a></li>
        <li><a href="#devops">DevOps</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
