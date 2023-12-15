import { FaCloudDownloadAlt, FaReact, FaNode } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen py-40">
        <div>
          <div className="max-w-7xl flex flex-col lg:flex-row-reverse lg:gap-80">
            <div className="w-1/2 relative z-0 mt-10">
              <img src="https://i.ibb.co/wdtmLLf/propic.png" className="profile-image" />
              <button className="px-6 py-4 rounded-sm mt-8 ml-16 bg-gradient-to-r from-bgFrom to-bgTo text-sm font-bold resume-button flex gap-2 items-center hover:bg-none hover:text-bgFrom">
                <FaCloudDownloadAlt /> Download Resume
              </button>
              <div className="border-8 border-bgFrom h-[381px] w-[374px] absolute -left-12 -top-12 -z-10"></div>
            </div>

            <div className="w-1/2">
              <h1 className="uppercase section-title">About Me</h1>
              <p className="py-6 text-base font-light leading-7">
                Hello! I’m Md. Tanvir Hossain Talukder. Web Developer with over
                1 year of experience. Experienced with all stages of the
                development cycle for dynamic web projects. Having an in-depth
                knowledge including advanced HTML5, CSS3, JavaScript, React,
                NextJS, Express JS & MongoDB. Strong background in management
                and leadership.
              </p>
              <div className="space-y-3">
                <p className="font-bold text-lg">
                  <span className="text-bgFrom uppercase">Name: </span>Md.
                  Tanvir Hossain Talukder
                </p>
                <p className="font-bold text-lg">
                  <span className="text-bgFrom uppercase">Nationality: </span>
                  Bangladeshi
                </p>
                <p className="font-bold text-lg">
                  <span className="text-bgFrom uppercase">Email: </span>
                  rudro987@gmail.com
                </p>
                <p className="font-bold text-lg">
                  <span className="text-bgFrom uppercase">Expertise: </span>MERN
                  stack (Front end focused)
                </p>
                <p className="font-bold text-lg text-bgTo">
                  <span className="text-bgFrom uppercase">Github: </span>
                  <a
                    href="https://github.com/rudro987"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git Profile
                  </a>
                </p>
                <p className="font-bold text-lg text-bgTo">
                  <span className="text-bgFrom uppercase">LinkedIn: </span>
                  <a
                    href="https://www.linkedin.com/in/tanvir-rudro987/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="uppercase section-title">My skills</h1>
            <div className="flex gap-28 text-bgFrom font-bold mt-5">
              <div className="text-center">
                <SiTailwindcss className="p-5 rounded-full mb-4 border text-8xl border-bgFrom hover:bg-bgFrom hover:text-white cursor-pointer" />
                <span className="text-white font-normal">Tailwind CSS</span>
              </div>
              <div className="text-center">
                <FaReact className="p-5 rounded-full mb-4 border text-8xl border-bgFrom hover:bg-bgFrom hover:text-white cursor-pointer" />
                <span className="text-white font-normal text-center">
                  React
                </span>
              </div>
              <div className="text-center">
                <SiNextdotjs className="p-5 rounded-full mb-4 border text-8xl border-bgFrom hover:bg-bgFrom hover:text-white cursor-pointer" />
                <span className="text-white font-normal text-center">
                  NextJS
                </span>
              </div>
              <div className="text-center">
                <FaNode className="p-5 rounded-full mb-4 border text-8xl border-bgFrom hover:bg-bgFrom hover:text-white cursor-pointer" />
                <span className="text-white font-normal">Node</span>
              </div>
              <div className="text-center">
                <SiExpress className="p-5 rounded-full mb-4 border text-8xl border-bgFrom hover:bg-bgFrom hover:text-white cursor-pointer" />
                <span className="text-white font-normal">ExpressJS</span>
              </div>
              <div className="text-center">
                <SiMongodb className="p-5 rounded-full mb-4 border text-8xl border-bgFrom hover:bg-bgFrom hover:text-white cursor-pointer" />
                <span className="text-white font-normal">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
