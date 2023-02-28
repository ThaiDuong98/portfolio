import React, { useEffect } from "react";
import useElementOnScreen from "../../hook/useElementOnScreen";
import "./skill.css";

const Skill = ({ scrollRef, observeActiveComponent }) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      observeActiveComponent(4);
    }
  }, [isVisible]);


  return (
    <section ref={scrollRef} className="skill-container">
      <div ref={containerRef} className="skill-content">
        <div className={isVisible ? "skill-header active" : "skill-header"}>
            <a className={isVisible ? "active" : ""}>Skills</a>
            <div className="languages sub-skill">
                <img src="/imgs/css-3.png"/>
                <img src="/imgs/html-5.png"/>
                <img src="/imgs/javascript.png"/>
                <img src="/imgs/jsx.png"/>
            </div>
            <div className="framework sub-skill">
                <img src="/imgs/bootstrap.png"/>
                <img src="/imgs/hook.png"/>
                <img src="/imgs/mui.png"/>
                <img src="/imgs/api.png"/>
                <img src="/imgs/science.png"/>
            </div>
            <div className="tool sub-skill">
                <img src="/imgs/git.png"/>
                <img src="/imgs/jira.png"/>
                <img src="/imgs/postman.png"/>
                <img src="/imgs/sourcetree.png"/>
                <img src="/imgs/svn.png"/>
                <img src="/imgs/webstorm.png"/>
                <img src="/imgs/vscode.png"/>
            </div>
            <div className="package sub-skill">
                <img src="/imgs/mysql.png"/>
                <img src="/imgs/npm.png"/>
                <img src="/imgs/yarn.png"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
