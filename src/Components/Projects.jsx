import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "fundmate",
    title: "FundMate",
    image: "https://i.ibb.co.com/Y7mWgswq/Screenshot-2025-12-31-122136.png",
    shortDesc:
      "A secure microloan management platform with role-based dashboards and online payment support.",
    tech: [
      "React",
      "Tailwind",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
  },
  {
    id: "finease",
    title: "FinEase",
    image: "https://i.ibb.co.com/NgZZ5tXx/Screenshot-2025-11-20-185012.png",
    shortDesc:
      "A smart personal finance app to track income, expenses, and gain clear financial insights.",
    tech: ["React", "Tailwind", "Firebase", "MongoDB"],
  },
  {
    id: "playnest",
    title: "PlayNest",
    image: "https://i.ibb.co.com/G3xXrYK4/Screenshot-2025-12-02-193643.png",
    shortDesc:
      "A toy marketplace with seller dashboards, detailed listings, and a vibrant UI.",
    tech: ["React", "React Router", "Tailwind", "Firebase"],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-cubic" });

    gsap.fromTo(
      ".project-image",
      { scale: 1.15 },
      {
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 bg-base-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary tracking-widest font-medium">
            PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A few projects that showcase my skills, problem-solving ability, and
            growth as a developer.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group bg-base-200 border border-gray-700
              rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-52 object-cover
                  transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-linear-to-t
                  from-black/60 to-transparent opacity-0
                  group-hover:opacity-100 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                      border border-gray-700 bg-base-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2
                  text-primary font-medium pt-2
                  hover:gap-3 transition-all"
                >
                  View Details <MdOutlineArrowOutward />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
