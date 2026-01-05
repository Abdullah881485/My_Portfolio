import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <p className="text-center text-gray-400 mb-14">
          Tools & technologies I use to craft modern web experiences
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-base-300 border border-gray-700 rounded-2xl p-6 
              flex flex-col items-center justify-center gap-3
              hover:border-primary hover:shadow-xl hover:shadow-primary/20
              hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className="text-4xl text-primary 
                group-hover:rotate-6 group-hover:scale-110 transition duration-300"
              >
                {skill.icon}
              </div>

              <p className="text-gray-300 font-medium tracking-wide">
                {skill.name}
              </p>

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition duration-300 bg-linear-to-br from-primary/10 to-transparent pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
