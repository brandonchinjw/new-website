import React, { useState } from 'react';

function ResearchProject({ project }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Handler to prevent event propagation for the buttons
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent the click from reaching the parent div
  };
  
  return (
    <div className={`research-project ${expanded ? 'expanded' : ''}`}>
      <div className="research-card" onClick={toggleExpand}>
        <div className="project-header" style={{ backgroundColor: project.color }}>
          <h3 className="project-title">{project.title}</h3>
          <div className="project-status">{project.status}</div>
          {project.location && (
            <div className="project-location">📍 {project.location}</div>
          )}
        </div>
        
        <div className="project-content">
          {/* Key Contributions are always visible */}
          <div className="project-highlights">
            <h4>Key Contributions</h4>
            <ul className="highlights-list">
              {project.highlights.map((highlight, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: highlight }} />
              ))}
            </ul>
          </div>
          
          {/* Action buttons container */}
          <div className="project-actions">
            {project.pdfUrl && (
              <a 
                href={project.pdfUrl} 
                className="pdf-button"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClick}
              >
                View Paper
              </a>
            )}
            
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                className="demo-button"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClick}
              >
                Try Live Demo
              </a>
            )}
            
            {project.workInProgress && (
              <div className="wip-badge" onClick={handleButtonClick}>
                <div className="wip-icon">📝</div>
                <div className="wip-text">
                  <span className="wip-label">Work in Progress</span>
                  <span className="wip-date">Expected: {project.expectedSubmission}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Abstract is now at the bottom and expandable */}
          <div className="project-abstract-container">
            <h4>Abstract</h4>
            <div className="project-abstract">
              {expanded ? project.abstract : `${project.abstract.substring(0, 150)}...`}
            </div>
          </div>
        </div>
        
        <div className="expand-indicator">
          {expanded ? '↑ Show Less' : '↓ Read Full Abstract'}
        </div>
      </div>
    </div>
  );
}

export default ResearchProject; 