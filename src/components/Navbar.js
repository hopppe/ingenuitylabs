import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Ingenuity Labs
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-links active" : "nav-links"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-links active" : "nav-links"}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-links active" : "nav-links"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;