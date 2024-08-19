import React, { useState } from "react";
import "./BigProjects.scss"; // Make sure this path is correct

const BigProjects = ({ projects }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="big-projects">
      <div className="tabs">
        {projects.map((project, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {project.projectName}
          </button>
        ))}
      </div>
      <div className="content">
        {projects[activeTab] && (
          <div className="project-details">
            <img src={projects[activeTab].image} alt={projects[activeTab].projectName} />
            <h3>{projects[activeTab].projectName}</h3>
            <p>{projects[activeTab].projectDesc}</p>
            {projects[activeTab].footerLink.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BigProjects;
