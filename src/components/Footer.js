import React from "react";
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
          <h3>Location</h3>
          <p>Texas, USA</p>
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