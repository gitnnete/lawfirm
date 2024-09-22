import React from "react";
import lawbooks from "../../assets/lawbooks.jpg"


const Hero = () => {
  return (
    <>
      <section className="hero-section">
      <div className="hero-image-container">
        {/* Use the imported image */}
        <img src={lawbooks} alt="Hero" className="hero-image" />
      </div>
      {/* Hero text */}
      <div className="hero-text" data-aos="fade-up">
        <h1>Welcome to Commodor Law</h1>
        <div
          className="hero-text text-center mx-auto fw-bold hero-para"
          style={{ maxWidth: "500px" }}
        >
          At Commodor Law, we ensure that you are always on the right side of
          the law. Our team of <span className="redtext">lawyers</span> and{" "}
          <span className="redtext">legal minds</span> are always ready for your
          call.
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
