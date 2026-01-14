import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo_white.JPG";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className={`navbar ${loaded ? "navbar-loaded" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Oozie Cafe Logo" />
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" onClick={closeMenu}>
            Our Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/friedchicken" onClick={closeMenu}>
            Miami Fried Chicken
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu} className="cta">
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
