import React from "react";
import "./DeliverySection.css";
import { FaTruck, FaClock, FaUtensils, FaPhoneAlt } from "react-icons/fa";
import deliveryImage from "../assets/scooter1.jpg";

const DeliverySection = () => {
  return (
    <section className="delivery-section">
      <div className="delivery-container">

        {/* LEFT CARD */}
        <div className="delivery-card">
          <FaUtensils className="card-icon" />

          <h2>
            Choose Your <span>Favourite Food</span>
          </h2>

          <p className="card-text">
            Freshly prepared meals made with premium ingredients — crafted for
            taste, quality, and comfort.
          </p>

          <div className="delivery-offer">
            <FaTruck />
            <span>Free delivery up to 4 km on orders above ₹400</span>
          </div>

          <div className="call-box">
            <p>One call. Fresh food at your door.</p>
            <a href="tel:8129110411">
              <FaPhoneAlt />
              <span>+91 81291 10411</span>
            </a>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="delivery-image">
          <img src={deliveryImage} alt="Delivery Scooter" />
        </div>

        {/* RIGHT CARD */}
        <div className="delivery-card">
          <FaClock className="card-icon" />

          <h2>
            Fast & <span>Reliable Delivery</span>
          </h2>

          <p className="card-text">
            From kitchen to doorstep — hot, fresh, and delivered right on time,
            every single order.
          </p>

          <div className="delivery-offer">
            <FaClock />
            <span>Quick delivery within nearby locations</span>
          </div>

          <div className="call-box">
            <p>Hungry? We’re just one call away.</p>
            <a href="tel:8129110411">
              <FaPhoneAlt />
              <span>+91 81291 10411</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeliverySection;
