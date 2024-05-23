import React from 'react';
import '../../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h2>Kyson is a designer and art director who loves to craft a good story.</h2>
        <p>I do digital design, brand design, and art direction. Currently, I'm an Associate Creative Director at Rivian.</p>
      </div>
      <div className="hero-image">
        <img src={`${process.env.PUBLIC_URL}/sky.jpeg`} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
