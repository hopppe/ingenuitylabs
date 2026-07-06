import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-tagline">Ingenuity Labs - Elegant Solutions, Designed for Change</p>
        <p className="footer-small">Website coded and designed by Ingenuity Labs</p>
      </div>
      <div className="footer-right">
        <div className="footer-section">
          <h3>AI for your industry</h3>
          <ul className="footer-list">
            <li><Link to="/ai-for-home-services" className="footer-link">Home services</Link></li>
            <li><Link to="/ai-meeting-prep" className="footer-link">Sales & meeting prep</Link></li>
            <li><Link to="/ai-for-real-estate" className="footer-link">Real estate</Link></li>
            <li><Link to="/ai-for-saudi-business" className="footer-link">Saudi businesses</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Location</h3>
          <p>Jeddah, Saudi Arabia</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:ethan@ingenuitylabs.net" className="footer-link">ethan@ingenuitylabs.net</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;