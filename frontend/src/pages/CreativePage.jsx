import React from "react";
import "./CreativePage.css";

import chefImage from "../assets/chef1.jpg";
import dish1 from "../assets/pizza.png";
import dish2 from "../assets/pasta.png";
import dish3 from "../assets/sandwich.png";

const CreativePage = () => {
  return (
    <div className="creative-root">

      {/* ================= HERO ================= */}
      <section className="hero-block reveal-hero">
        <div className="hero-left">
          <span className="badge">Premium Café Experience</span>

          <h1>
            Food That Feels <br />
            <span>Comforting & Crafted</span>
          </h1>

          <p>
            We focus on food that brings warmth and balance — created from fresh
            ingredients, thoughtful recipes, and served in a calm café
            environment designed for comfort.
          </p>

          <div className="hero-actions">
            <button className="btn-solid">View Menu</button>
            <button className="btn-outline">Reserve Table</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={dish1} alt="Pizza" className="food-img img-1" />
          <img src={dish2} alt="Pasta" className="food-img img-2" />
          <img src={dish3} alt="Sandwich" className="food-img img-3" />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-cafe reveal-about">
        <div className="about-text">
          <h2>Designed Around Taste & Comfort</h2>
          <p>
            Our café is intentionally designed to feel calm, welcoming, and
            effortless. From the moment you walk in, the space encourages you
            to slow down and enjoy your time.
          </p>
          <p>
            Every detail — seating layout, lighting, plating, and service flow —
            works together to create a relaxed dining experience that feels
            natural and enjoyable.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-box">
            <h4>Daily Fresh Prep</h4>
            <span>Ingredients prepared every morning</span>
          </div>
          <div className="highlight-box">
            <h4>Balanced Flavors</h4>
            <span>Recipes tested for consistency</span>
          </div>
          <div className="highlight-box">
            <h4>Comfort Seating</h4>
            <span>Designed for longer stays</span>
          </div>
        </div>
      </section>

      {/* ================= CHEF (ENRICHED & UNIQUE) ================= */}
      <section className="chef-showcase reveal-chef">
        <div className="chef-visual">
          <img src={chefImage} alt="Chef" />
        </div>

        <div className="chef-details">
          <span className="section-tag">Our Culinary Philosophy</span>

          <h2>
            Passion, Discipline <br />
            And Honest Cooking
          </h2>

          <p>
            Our kitchen is built on discipline, patience, and respect for raw
            ingredients. We believe that great food does not need shortcuts —
            it needs time, understanding, and care.
          </p>

          <p>
            Every dish goes through multiple rounds of testing to ensure balance
            in texture, aroma, and taste. From sauces simmered slowly to doughs
            rested properly, nothing is rushed.
          </p>

          <ul className="chef-points">
            <li>Seasonal ingredient selection</li>
            <li>Traditional techniques with modern plating</li>
            <li>Consistent quality across every order</li>
            <li>Focus on comfort-driven flavors</li>
          </ul>

          <div className="chef-signature">
            <strong>Donal Bellson</strong>
            <span>Executive Chef · Café Culinary Team</span>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="experience reveal-exp">
        <div className="exp-box">
          <h3>Fresh Ingredients</h3>
          <p>
            We source vegetables, grains, and herbs daily to maintain freshness
            and preserve natural flavors in every dish.
          </p>
        </div>

        <div className="exp-box">
          <h3>Careful Preparation</h3>
          <p>
            Recipes are refined over time to ensure consistent taste, portion
            balance, and visual appeal.
          </p>
        </div>

        <div className="exp-box">
          <h3>Relaxed Dining</h3>
          <p>
            A calm café atmosphere where food, conversation, and comfort exist
            naturally together.
          </p>
        </div>
      </section>

    </div>
  );
};

export default CreativePage;
