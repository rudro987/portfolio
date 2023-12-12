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
          <h1 className="section-title uppercase">Work Experience</h1>
        </div>
        <div className="">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#00d2ff", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #00d2ff" }}
              date="2023 - present"
              iconStyle={{ background: "#00d2ff", color: "#fff" }}
              icon={<FaSchool />}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                MERN Stack Developer (Front end focused)
              </h3>
              <p className="font-light text-xl">
                Freelance (Upwork, local etc.)
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work school"
              contentStyle={{ background: "#fff", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date="2018 - 2023"
              iconStyle={{ background: "#22252c", color: "#00d2ff" }}
              icon={<BiSolidSchool />}
            >
              <h3 className="vertical-timeline-element-title text-mainBg text-2xl font-semibold">
                IT & Operations Head
              </h3>
              <p className="font-light text-mainBg text-xl">
                Opal Fashion Wear, Dhaka, Bangladesh
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#00d2ff", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #00d2ff" }}
              date="2023 - present"
              iconStyle={{ background: "#00d2ff", color: "#fff" }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                Wordpress Developer
              </h3>
              <p className="font-light text-xl">
                Freelance (Upwork, local etc.)
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
