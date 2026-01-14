import React from "react";
import { Link } from "react-router-dom";
import "./FoodHero.css";

import burger from "../assets/burger_creative.png";
import food1 from "../assets/pizza.png";
import food2 from "../assets/pasta.png";
import food3 from "../assets/sandwich.png";

const FoodHero = () => {
  return (
    <section className="food-hero">
      <div className="hero-wrapper">

        {/* LEFT */}
        <div className="hero-left">
          <span className="hero-label">Premium Café Experience</span>

          <h1>
            Crafted To <br />
            <span>Impress Your Taste</span>
          </h1>

          <p>
            Signature recipes made with fresh ingredients, refined flavors,
            and a premium touch you can taste in every bite.
          </p>

          {/* 🔥 ROUTED BUTTON */}
          <Link to="/menu" className="hero-btn-link">
            <button className="hero-btn">Order Now</button>
          </Link>

          {/* ROUND FLOATING FOOD */}
          <div className="food-preview">
            <div className="food-circle float-1">
              <img src={food1} alt="Pizza" />
            </div>
            <div className="food-circle float-2">
              <img src={food2} alt="Pasta" />
            </div>
            <div className="food-circle float-3">
              <img src={food3} alt="Sandwich" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img src={burger} alt="Signature Burger" className="burger-img" />

          <div className="features">
            <div className="feature">
              <h4>Fast Delivery</h4>
              <p>Hot meals at your door within 30 minutes</p>
            </div>
            <div className="feature">
              <h4>Easy Pickup</h4>
              <p>Quick and convenient in-store pickup</p>
            </div>
            <div className="feature">
              <h4>Dine In</h4>
              <p>Enjoy food in a warm premium ambiance</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoodHero;
