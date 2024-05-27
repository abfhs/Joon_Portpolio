import React, { useState } from 'react';
import '../../styles/WorkSection.css';
import { SlArrowDown } from "react-icons/sl";

const WorkSection = () => {
  const [expandedItems, setExpandedItems] = useState([false, false, false, false]);

  const toggleDetails = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  return (
    <section className="work-section" id="work">
      <div className="container">
        {[
          {
            title: 'Branding a Clean Energy Foundation',
            description: 'I created the brand identity and the website for the non-profit, founded by Elon Musk and SolarCity.',
            details: 'Here are the detailed information about the case study...'
          },
          {
            title: 'Redesigning an E-commerce Platform',
            description: 'Led the redesign of a major e-commerce platform to improve user experience and increase sales.',
            details: 'Detailed information about the e-commerce platform redesign...'
          },
          {
            title: 'Developing a Mobile App for Health Monitoring',
            description: 'Developed a mobile app to monitor and manage health data for users, integrating with wearable devices.',
            details: 'Detailed information about the health monitoring mobile app...'
          },
          {
            title: 'Launching a Social Media Campaign',
            description: 'Successfully launched a social media campaign that increased brand engagement by 50%.',
            details: 'Detailed information about the social media campaign...'
          }
        ].map((item, index) => (
          <div key={index} className="work-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <SlArrowDown onClick={() => toggleDetails(index)} className="icon" />
            {expandedItems[index] && (
              <div className="case-study">
                <p>{item.details}</p>
                {/* 추가적인 상세 내용을 여기에 작성 */}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;