import React from 'react';
import '../../styles/WorkSection.css';

const WorkSection = () => {
  return (
    <section className="work-section" id="work">
      <div className="container">
        <div className="work-item">
          <h3>Branding a Clean Energy Foundation</h3>
          <p>I created the brand identity and the website for the non-profit, founded by Elon Musk and SolarCity.</p>
          <a href="#case-study" className="btn">View Case Study</a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
