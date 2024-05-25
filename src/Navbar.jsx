import React, { useState } from 'react';
import './Navbar.css';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav role="navigation">
      <div id="menuToggle" onClick={toggleMenu}>
        <input type="checkbox" checked={menuOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu" className={menuOpen ? 'open' : ''}>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Current weather</li></a>
          <a href="#"><li>Forecast</li></a>
          <a href="#" target="_blank"><li>Contact</li></a>
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
