import React from "react";
import Project from "../project/Project";
import "./projectList.css";
import { products } from "../../data";

const ProjectList = () => {
  return (
    <div>
      <div className="pl-container">
        <div className="pl-text">
          <h1 className="pl-title">In publishing and graphic design</h1>
          <p className="pt-desc">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Project img={item.img} key={item.id} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
