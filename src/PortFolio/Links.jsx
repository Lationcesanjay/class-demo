import React from "react";
import "./Css/links.css"; // Ensure you create this CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Links = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content fade-in">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Your Street, Your City, Your Country</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/contact">Contact</a></li> 

          </ul>
        </div>
      </div>
      <div className="footer-bottom fade-in">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}; 
