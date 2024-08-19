import React, { useState } from "react";
import "./BigProjects.scss";
import { bigProjects } from "../../portfolio";

export default function BigProjects() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="big-projects">
      <div className="tabs">
        {bigProjects.projects.map((project, index) => (
          <button
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {project.projectName}
          </button>
        ))}
      </div>
      <div className="content">
        <div className="project-details">
          <img src={bigProjects.projects[activeTab].image} alt={bigProjects.projects[activeTab].projectName} />
          <h3>{bigProjects.projects[activeTab].projectName}</h3>
          <p>{bigProjects.projects[activeTab].projectDesc}</p>
          {bigProjects.projects[activeTab].footerLink.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
