import React, { useEffect, useRef } from "react";
import useElementOnScreen from "../../hook/useElementOnScreen";
import "./about.css";

const About = ({scrollRef, observeActiveComponent}) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px 0px -200px 0px",
    threshold: 0.4
  })

  useEffect(() => {
    if(isVisible){
      observeActiveComponent(2)
    }
  }, [isVisible])

  return (
    <div className="about-section" ref={scrollRef} id="about">
      <div className="about-header" ref={containerRef}>
        <a className={isVisible ? "cc active" : "cc"}>About</a>
      </div>
      <main className="about-container">
      <section className={isVisible ? "about-left active" : "about-left"}>
        <img src="/imgs/about.jpg" />
      </section>
      <section className={isVisible ? "about-right active" : "about-right"}>
        <p>
          My name is Duong, I was born in 1998. I studied at Can Tho University
          with a major in communication and computer network.
        </p>

        <p>
          I have more than 1.5+ year of experience in the web field, I
          specialize in UI building and API integration for ERP systems such as
          delivery tracking system for laundry factory, logistic...
        </p>

        <p>
          I am a forward-thinking person and passionate about learning new
          technologies.
        </p>
      </section>
    </main>
    </div>
  );
};

export default About;
