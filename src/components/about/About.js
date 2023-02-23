import React, { useEffect, useRef } from "react";
import useElementOnScreen from "../../hook/useElementOnScreen";
import "./about.css";

const About = ({scrollRef, observeActiveComponent}) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  })

  useEffect(() => {
    if(isVisible){
      observeActiveComponent(2)
    }
  }, [isVisible])

  return (
    <main className="about-container" id="about" ref={scrollRef}>
      <section className={isVisible ? "about-left active" : "about-left"}  ref={containerRef}>
        <img src="/imgs/about.jpg" />
      </section>
      <section className={isVisible ? "about-right active" : "about-right"}>
        <p>
          My name is Duong, I'm 24 years old. I studied at Can Tho University
          with a major in communication and computer network.
        </p>

        <p>
          I have more than 1.5+ year of experience in the web field, I
          specialize in UI building and API integration for ERP systems such as
          such as delivery tracking system for laundry factory, logistic...
        </p>

        <p>
          I am a forward-thinking person and passionate about learning new
          technologies.
        </p>
      </section>
    </main>
  );
};

export default About;
