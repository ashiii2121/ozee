import "./Header.css";
import desktopHero from "../assets/header-desktop.png";
import mobileHero from "../assets/header-mobile.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="hero">
      {/* Background */}
      <picture className="hero-bg">
        <source srcSet={mobileHero} media="(max-width: 768px)" />
        <img src={desktopHero} alt="Ooze Café Hero" />
      </picture>

      {/* Layers */}
      <div className="hero-overlay"></div>
      <div className="hero-grain"></div>
      <div className="hero-light-sweep"></div>

      {/* Content */}
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-eyebrow">Est. 2024</span>

          <h1 className="hero-heading">
            Ooze
            <span className="hero-heading-accent">Café</span>
          </h1>

          <p className="hero-tagline">
            Where Craft<br />Meets Flavor
          </p>

          <p className="hero-copy">
            A refined café experience blending handcrafted meals, signature
            fried chicken, and modern indulgence — curated for those who taste
            with intention.
          </p>

          <div className="hero-cta">
            <Link to="/menu" className="btn primary">
              View Menu
            </Link>

            <Link to="/about" className="btn ghost">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
