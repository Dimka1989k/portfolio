import PageHeaderContent from "./../../component/pageHeaderContent/index";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./styles.scss";
import { MdWork } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";

import { data } from "./utils";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--team-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--sub-text-color)",
                  border: "1.5px solid var(--team-main-color)",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#000000",
                  color: "var(--team-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
                <h4>{item.subTitle}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__experience__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--team-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--sub-text-color)",
                  border: "1.5px solid var(--team-main-color)",
                }}
                icon={<FaUniversity />}
                iconStyle={{
                  background: "#000000",
                  color: "var(--team-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
                <h4>{item.subTitle}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
