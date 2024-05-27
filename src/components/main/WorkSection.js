import React, { useState } from 'react';
import '../../styles/WorkSection.css';

const WorkSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="work-section" id="work">
      <div className="container">
        <div className="work-item">
          <h3>Branding a Clean Energy Foundation</h3>
          <p>I created the brand identity and the website for the non-profit, founded by Elon Musk and SolarCity.</p>
          <button onClick={toggleDetails} className="btn">
            {isExpanded ? 'Hide Case Study' : 'View Case Study'}
          </button>
          {isExpanded && (
            <div className="case-study">
              <p>Here are the detailed information about the case study...</p>
              {/* 추가적인 상세 내용을 여기에 작성 */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;