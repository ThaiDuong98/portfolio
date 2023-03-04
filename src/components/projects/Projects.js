import React, { useEffect } from 'react'
import useElementOnScreen from '../../hook/useElementOnScreen';
import './project.css'

const Projects = ({scrollRef, observeActiveComponent}) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      observeActiveComponent(5);
    }
  }, [isVisible]);
  return (
    <section ref={scrollRef} id="project" className="project-container">
      <div className="project-header" ref={containerRef}>
        <a className={isVisible ? "active" : ""}>Projects</a>
      </div>
      <div className="project-layout">
        <div className="project-card">
          <div className="project-inner">
            <div className="project-img">
              <img src="/imgs/shop-store.png" />
            </div>
            <div className="project-detail">
              <div className="content">
                <p>Home store landing page</p>
                <p>Status: building...</p>
                <p>
                  Website:{" "}
                  <a href="https://shop-store-landing-page.netlify.app/" style={{color: "#fff"}}>
                    visit website
                  </a>
                </p>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  <div className='html5'>HTML5</div> 
                  <div className='css3'>CSS3</div>
                  <div className='javascript'>Javascript</div> 
                  <div className='responsive'>Responesive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects