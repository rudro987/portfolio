import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { BiSolidSchool } from "react-icons/bi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-40">
        <div className="w-full flex justify-center pb-28">
          <h1 className="section-title uppercase">Education</h1>
        </div>
        <div className="">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work school"
              contentStyle={{ background: "#fff", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date="2002 - 2003"
              iconStyle={{ background: "#22252c", color: "#00d2ff" }}
              icon={<FaSchool />}
            >
              <h3 className="vertical-timeline-element-title text-mainBg text-2xl font-semibold">
                Secondary School Certificate
              </h3>
              <p className="text-mainBg font-light text-xl">
                Institute: Hasan Ali Govt. School, Chandpur, Bangladesh
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#00d2ff", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #00d2ff" }}
              date="2004 - 2005"
              iconStyle={{ background: "#00d2ff", color: "#fff" }}
              icon={<BiSolidSchool />}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                Higher Secondary Certificate
              </h3>
              <p className="font-light text-xl">
                Institute: Chandpur Govt. College, Chandpur, Bangladesh
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work school"
              contentStyle={{ background: "#fff", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date="2009 - Incomplete"
              iconStyle={{ background: "#22252c", color: "#00d2ff" }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title text-mainBg text-2xl font-semibold">
                Computer Science & Engineering
              </h3>
              <p className="text-mainBg font-light text-xl">
                Institute: University of South Asia, Dhaka, Bangladesh
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
