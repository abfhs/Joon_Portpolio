import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import WorkSection from './WorkSection';
import Footer from './Footer';
import '../../styles/Introduce.css';

function Introduce() {
  return (
    <div className="Introduce">
      <HeroSection />
      <Header />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default Introduce;
