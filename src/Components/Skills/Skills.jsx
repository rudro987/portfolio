import SkillBar from "react-skillbars";

const Skills = () => {
  const skills = [
    { type: "HTML CSS", level: 95 },
    { type: "Javascript", level: 85 },
    { type: "React", level: 80 },
    { type: "Node", level: 70 },
    { type: "Express", level: 75 },
    { type: "MongoDB", level: 70 },
    { type: "Next", level: 60 },
  ];
  const colors = {
    bar: "#00d2ff",
    title: {
      text: "#fff",
      fontSize: "50px",
      background: "#3a7bd5",
    },
  };

  return (
    <div className="bg-[#313741]">
      <div className="max-w-7xl mx-auto py-40">
        <div className="w-full flex justify-center pb-28">
          <h1 className="section-title uppercase">Professional Skills</h1>
        </div>
        <div>
          <SkillBar skills={skills} colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
