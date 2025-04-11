import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
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
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Ingenuity Labs
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