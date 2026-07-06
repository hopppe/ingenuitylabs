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
          viewBox="0 0 48 48"
          width="34"
          height="34"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <rect className="logo-tile" x="0" y="0" width="48" height="48" rx="10" />
          <rect className="logo-glyph" x="13" y="13" width="5" height="22" />
          <rect className="logo-glyph" x="24" y="13" width="5" height="22" />
          <rect className="logo-glyph" x="24" y="30" width="11" height="5" />
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