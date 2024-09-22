import React from "react";
import lawgavel from "../../assets/lawgavel.jpg"

const ServicesHero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-image-container">
          {/* Use the imported image */}
          <img src={lawgavel} alt="Hero" className="hero-image" />
        </div>
        {/* Hero text */}
        <div className="hero-text" data-aos="fade-up">
          <h1>Have a Look at Our <span className="redtext">Services</span></h1>
        </div>
      </section>
    </>
  );
};

export default ServicesHero;
