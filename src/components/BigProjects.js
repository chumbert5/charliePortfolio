// src/components/BigProjects.js
import React from 'react';
import './BigProjects.scss';

const BigProjects = () => {
  return (
    <div className="big-projects">
      <h1>My Big Projects</h1>
      <div className="project-list">
        <div className="project-item">
          <h2>Project 1</h2>
          <p>Description of Project 1.</p>
        </div>
        <div className="project-item">
          <h2>Project 2</h2>
          <p>Description of Project 2.</p>
        </div>
        {/* Add more project items as needed */}
      </div>
    </div>
  );
}

export default BigProjects;
