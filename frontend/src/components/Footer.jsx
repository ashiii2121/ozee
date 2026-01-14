import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Footer.css";
import Logo from "../assets/logo_white.JPG";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <img src={Logo} alt="Ooze Cafe Logo" className="footer-logo" />
          <p>Where Taste Meets Comfort</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About Us</a>
          <a href="/menu" className="footer-link">Menu</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>

        {/* Legal */}
        <div className="footer-links">
          <h3>Legal</h3>
          <a href="/terms" className="footer-link">Terms & Conditions</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/faq" className="footer-link">FAQ</a>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://wa.me/8129110411"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com/Ooze._cafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/Ooze Ooze"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ooze Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
