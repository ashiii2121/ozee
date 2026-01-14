import React from "react";
import "./CafeExperience.css";

const CafeExperience = () => {
  return (
    <section className="cafe-experience">
      {/* TOP CONTENT */}
      <div className="experience-header fade-up">
        <h2>More Than Food, It’s an Experience</h2>
        <p>
          At our café, every plate tells a story. From hand-picked ingredients
          to carefully crafted recipes, we serve moments you’ll remember.
        </p>
      </div>

      {/* EXPERIENCE GRID */}
      <div className="experience-grid">
        <div className="experience-card slide-left">
          <h3>🌿 Fresh Ingredients</h3>
          <p>
            We use farm-fresh vegetables, premium spices, and high-quality
            produce to ensure authentic taste in every bite.
          </p>
        </div>

        <div className="experience-card slide-up">
          <h3>👨‍🍳 Passionate Chefs</h3>
          <p>
            Our chefs don’t just cook — they craft. Each dish is prepared with
            love, creativity, and years of culinary expertise.
          </p>
        </div>

        <div className="experience-card slide-right">
          <h3>☕ Cozy Ambience</h3>
          <p>
            A calm, welcoming space designed to relax your soul while you enjoy
            delicious meals and freshly brewed coffee.
          </p>
        </div>
      </div>

      {/* MID BANNER */}
      <div className="experience-banner zoom-in">
        <h3>Crafted With Care, Served With Love</h3>
        <p>
          Whether it’s a quick bite or a long conversation over coffee,
          we promise comfort, flavor, and warmth in every visit.
        </p>
      </div>

      {/* STATS */}
      <div className="experience-stats">
        <div className="stat-card fade-up">
          <h4>10+</h4>
          <span>Signature Dishes</span>
        </div>
        <div className="stat-card fade-up">
          <h4>5★</h4>
          <span>Customer Ratings</span>
        </div>
        <div className="stat-card fade-up">
          <h4>100%</h4>
          <span>Fresh Quality</span>
        </div>
        <div className="stat-card fade-up">
          <h4>Daily</h4>
          <span>Freshly Prepared</span>
        </div>
      </div>
    </section>
  );
};

export default CafeExperience;
