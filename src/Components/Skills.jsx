import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 90 },
  { name: "CSS3", icon: FaCss3Alt, level: 85 },
  { name: "JavaScript", icon: FaJs, level: 80 },
  { name: "React", icon: FaReact, level: 78 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
  { name: "Node.js", icon: FaNodeJs, level: 70 },
  { name: "Express.js", icon: SiExpress, level: 68 },
  { name: "MongoDB", icon: SiMongodb, level: 72 },
  { name: "Firebase", icon: SiFirebase, level: 70 },
  { name: "JWT", icon: SiJsonwebtokens, level: 65 },
  { name: "Git", icon: FaGitAlt, level: 80 },
  { name: "GitHub", icon: FaGithub, level: 82 },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const bars = gsap.utils.toArray(".skill-bar-fill");

    bars.forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: bar.dataset.level + "%",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          },
        },
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-28 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-medium tracking-widest">
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical Proficiency
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I use regularly to build scalable and production-ready
            web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-base-300 border border-gray-700
                rounded-2xl p-6 hover:shadow-primary/20
                hover:-translate-y-1 transition"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className="text-xl text-primary" />
                    <span className="font-medium text-gray-200">
                      {skill.name}
                    </span>
                  </div>

                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill h-full bg-primary rounded-full"
                    data-level={skill.level}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
