import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import "./OurSpecialDish.css";

// Images
import afghaniChicken from "../assets/afghani_spcl.png";
import turkishChicken from "../assets/turkish_spcl.png";
import iffaChicken from "../assets/iffa_spcl.png";
import hexaBurger from "../assets/hexa_spcl.png";
import kandariChicken from "../assets/kandari_spcl.png";
import honeyChicken from "../assets/honey_spcl.png";

const dishes = [
  {
    title: "Afghani Fried Chicken",
    subtitle: "Classic Afghan Spices",
    description:
      "Tender chicken marinated in traditional Afghani spices and yogurt, deep-fried to golden perfection. Rich, creamy flavors with a smoky aroma in every bite.",
    image: afghaniChicken,
  },
  {
    title: "Turkish Fried Chicken",
    subtitle: "Mediterranean Flavor",
    description:
      "Crispy chicken seasoned with Turkish herbs and paprika, perfectly crunchy and tender. A bold fusion of spices that delivers an authentic Mediterranean taste.",
    image: turkishChicken,
  },
  {
    title: "IFFA Chicken",
    subtitle: "Signature Special",
    description:
      "Chef’s special IFFA-style fried chicken, marinated with secret spices and cooked to perfection. A house favorite known for its deep flavor and crisp finish.",
    image: iffaChicken,
  },
  {
    title: "Hexa Burger",
    subtitle: "Gourmet Chicken Burger",
    description:
      "Juicy chicken patty with melted cheese, fresh lettuce, tomato, and house sauce in a soft toasted bun. Crafted for a rich, satisfying gourmet bite.",
    image: hexaBurger,
  },
  {
    title: "IFFA Kandari Chicken",
    subtitle: "Slow-Cooked Delight",
    description:
      "Flavorful chicken slow-cooked with IFFA’s special Kandari spices, tender and aromatic. A traditional recipe that delivers deep, comforting flavors.",
    image: kandariChicken,
  },
  {
    title: "Honey Glazed Chicken",
    subtitle: "Sweet & Savory",
    description:
      "Crispy chicken coated in rich honey glaze, balancing sweetness with savory spices. A perfect blend of crunch, glaze, and bold flavor satisfaction guaranteed.",
    image: honeyChicken,
  },
];

const OurSpecialDish = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const whatsappNumber = "8129110411";

  return (
    <section className="special-wrapper">
      {/* Header */}
      <div className="special-header">
        <h2>Our Special Dishes</h2>
        <p>
          Discover our chef’s hand-crafted special dishes made with premium
          ingredients and passion.
        </p>
      </div>

      {/* Special Dish Cards */}
      <div className="special-cards">
        {dishes.map((dish, index) => {
          const message = encodeURIComponent(
            `Hello, I would like to order *${dish.title}*. Please share the price and details.`
          );

          return (
            <div
              className="special-card hidden"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Plate Image */}
              <div className="plate-image">
                <img src={dish.image} alt={dish.title} />
              </div>

              <h3>{dish.title}</h3>
              <h4>{dish.subtitle}</h4>
              <p className="description">{dish.description}</p>

              <div className="stars">★ ★ ★ ★ ★</div>
              <br /><br />

              {/* ORDER NOW BUTTON */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="order-btn"
              >
                ORDER NOW
              </a>
            </div>
          );
        })}
      </div>

      {/* Menu Button with Routing */}
      <div className="menu-btn">
        <Link to="/menu">
          <button>OUR MENU</button>
        </Link>
        <p className="menu-caption">
           Explore Our Full Menu & Treat Your Taste Buds! 
        </p>
      </div>
    </section>
  );
};

export default OurSpecialDish;
