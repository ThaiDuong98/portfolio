import React, { useEffect } from 'react'
import useElementOnScreen from '../../hook/useElementOnScreen';
import './project.css'

const Projects = ({scrollRef, observeActiveComponent}) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1
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
        <p className={isVisible ? "active" : ""}>
          Most of the projects that I'm involved in are ERP systems, so these
          systems are confidential and can't be revealed. However I have some
          personal projects below
        </p>
      </div>
      <div className="project-layout">
        <div className="project-card">
          <div className="project-inner">
            <div className="project-img">
              <img src="/imgs/shop-store.png" />
            </div>
            <div className="project-detail">
              <div className="content">
                <h4>Home store landing page</h4>
                <p style={{ textAlign: "justify" }}>
                  this is a website selling clothes with information such as
                  images, prices...
                </p>
                <p>Status: building...</p>
                <p>
                  Website:{" "}
                  <a
                    href="https://shop-store-landing-page.netlify.app/"
                    style={{ color: "#fff" }}
                  >
                    visit website
                  </a>
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="html5 skill-label">HTML5</div>
                  <div className="css3 skill-label">CSS3</div>
                  <div className="javascript skill-label">Javascript</div>
                  <div className="responsive skill-label">Responesive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-inner">
            <div className="project-img">
              <img src="/imgs/todo.png" />
            </div>
            <div className="project-detail">
              <div className="content">
                <h4>Todo app</h4>
                <p style={{ textAlign: "justify" }}>
                  web app has features like add, edit, delete, mark complete and
                  filter todo
                </p>
                <p>Status: done</p>
                <p>
                  Website:{" "}
                  <a
                    href="http://ThaiDuong98.github.io/Todo-App-Redux-React"
                    style={{ color: "#fff" }}
                  >
                    visit website
                  </a>
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="html5 skill-label">HTML5</div>
                  <div className="antd skill-label">Antd</div>
                  <div className="react skill-label">React</div>
                  <div className="hook skill-label">React hook</div>
                  <div className="redux  skill-label">Redux/RTK</div>
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