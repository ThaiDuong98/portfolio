import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import useElementOnScreen from "../../hook/useElementOnScreen";
import "./experience.css";

const WorkIcon = () => (
  <img src="/imgs/working.png" className="timeline-icon-img" />
);
const SchoolIcon = () => (
  <img src="/imgs/education.png" className="timeline-icon-img" />
);
const InternshipIcon = () => (
  <img src="/imgs/id-card.png" className="timeline-icon-img" />
);

const Experience = ({ scrollRef, observeActiveComponent }) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  useEffect(() => {
    if (isVisible) {
      observeActiveComponent(3);
    }
  }, [isVisible]);

  return (
    <div ref={scrollRef} className="experience-container" id="experience">
      <div className="experience-header" ref={containerRef}>
        <a className={isVisible ? "active" : ""}>Experiens</a>
      </div>
      <div className="experience-content">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="timeline-date"
            date="05/2022 - present"
            iconClassName="timeline-icon"
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Kargo 365 and EBST
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Frontend developer
            </h4>
            <p>
              I participated in three projects including ecowash, kargo portal,
              kargo finance. These are ERP systems specializing in managing the
              freight process, the receipt and return process in the laundry
              factory...
            </p>
            <p>
              As a frontend developer: My responsibility is to maintain the
              UI system, upgrade the UI system and cooperate with the BE team to create new functions based on the BA's documentation.
            </p>
            <p>For more infomation, please check my CV.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            dateClassName="timeline-date"
            date="11/2021 - 04/2022"
            iconClassName="timeline-icon"
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">FPT software</h3>
            <h4 className="vertical-timeline-element-subtitle">QC and FE</h4>
            <p>
              I joined PHC project, this web app is a monitoring system, the
              purpose of it is to manage the equipment used for the life device.
              Instrumentation will be collected data by the client and
              gateway...
            </p>
            <p>
              As a QC manual: I create test case based on document and conduct
              test according to test case
            </p>
            <p>
              As a Frontend: my responsibility is to fix bugs based on jira and
              redmine
            </p>
            <p>For more infomation, please check my CV.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            dateClassName="timeline-date"
            date="06/2021 - 10/2021"
            iconClassName="timeline-icon"
            icon={<InternshipIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              ABV (Act brain Company)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Internshipn and parttime
            </h4>
            <p>
              I joined the project next@cafe, an online teaching system. My main
              job is to test the system functions and report the results
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            dateClassName="timeline-date"
            date="2016 - 2021"
            iconClassName="timeline-icon"
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Can Tho University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Engineering degree
            </h4>
            <p>I majored in data communication and computer networking</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
