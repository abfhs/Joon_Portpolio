import React from 'react';
import ProjectCard from './ProjectCard';
import '../../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h2>My Projects</h2>
      <div className="card-container">
        <ProjectCard title="Card 1" description="Card 1 설명" />
        <ProjectCard title="Card 2" description="Card 2 설명" />
        <ProjectCard title="Card 3" description="Card 3 설명" />
        <ProjectCard title="Card 4" description="Card 4 설명" />
        {/* Add more cards if needed */}
      </div>
    </div>
  );
};

export default Experience;
