import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img
              src={require("../../img/me.jpg")}
              alt=""
              className="about-img"
            />
          </div>
        </div>
        <div className="about-right">
          <div className="about-wrapper-right">
            <h1 className="about-title">About me</h1>
            <p className="about-sub">
              Lorem ipsum may be used as a placeholder before final copy is
              available
            </p>
            <p className="about-desc">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
            <div className="about-award">
              <img
                src={require("../../img/award.png")}
                alt=""
                className="about-award-img"
              />
              <div className="about-award-text">
                <h4 className="about-award-title">
                  In publishing and graphic design
                </h4>
                <p className="about-award-desc">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
