import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Shop Smart, Save Big with FlashKart ⚡</h1>

        <p>
          Discover the best deals on electronics, fashion, and daily essentials.
          Fast delivery, trusted products, and unbeatable prices all in one place.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Explore Deals</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
          alt="Shopping"
        />
      </div>

    </section>
  );
}

export default Hero;