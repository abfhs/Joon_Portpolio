import React from 'react';
import '../../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-text">
          <h1 style={{ fontWeight: 'bold' }}>안녕하세요.</h1>
          <h3>어제보다 더 나은 개발자 <span style={{ fontWeight: 'bold' }}>강준영</span>입니다.</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;