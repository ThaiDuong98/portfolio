import React from "react";
import "./project.css";

const Project = ({ img, link }) => {
  return (
    <div className="project-container">
      <div className="project-header">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
      </div>
      <a href={link} target="_blank">
        <img src={img} alt="" className="project-img" />
      </a>
    </div>
  );
};

export default Project;
