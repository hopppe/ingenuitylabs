import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { pathname } = useLocation();
  const LIGHT_PATHS = ['/', '/about', '/contact', '/ai-for-home-services', '/ai-meeting-prep', '/ai-for-saudi-business', '/ai-for-real-estate'];
  const isLight = LIGHT_PATHS.includes(pathname);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle clicking outside of the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={isLight ? 'navbar navbar-light' : 'navbar'}>
      <Link to="/" className="navbar-logo">
        <svg
          className="logo-mark"
          viewBox="0 0 660 660"
          width="34"
          height="34"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <rect className="logo-tile" x="0" y="0" width="660" height="660" rx="137" />
          <path className="logo-glyph" d="M190,103 Q196,149 243,156 Q196,163 190,210 Q184,163 137,156 Q184,149 190,103 Z" />
          <path className="logo-glyph" d="M150,225 H212 Q240,225 240,253 V425 C240,505 280,548 345,553 H262 C195,553 150,512 150,450 Z" />
          <path className="logo-glyph" d="M275,150 H325 Q370,150 370,195 V470 H475 Q520,470 520,515 V553 H385 C318,553 275,505 275,435 Z" />
        </svg>
        <span className="logo-text">Ingenuity Labs</span>
      </Link>
      
      {/* Hamburger menu button for mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={menuOpen ? "hamburger open" : "hamburger"}></div>
      </div>
      
      <ul ref={menuRef} className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-links active" : "nav-links"} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-links active" : "nav-links"} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-links active" : "nav-links"} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;