import React from 'react';
import ProjectCard from './ProjectCard';

const Experience = () => {
  return (
    <div className="experience">
      <h2>경력사항 및 프로젝트</h2>
      <ProjectCard title="프로젝트 1" description="프로젝트 1 설명" />
      <ProjectCard title="프로젝트 2" description="프로젝트 2 설명" />
      {/* 추가 프로젝트 카드 */}
    </div>
  );
};

export default Experience;
