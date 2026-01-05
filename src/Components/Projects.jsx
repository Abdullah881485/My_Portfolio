import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

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
    tech: ["React", "Tailwind CSS", "Firebase", "MongoDB"],
  },

  {
    id: "playnest",
    title: "PlayNest – Toy Marketplace",
    image: "https://i.ibb.co.com/G3xXrYK4/Screenshot-2025-12-02-193643.png",
    shortDesc:
      "A kid-friendly toy marketplace featuring local sellers, detailed toy views, and a vibrant, responsive UI.",
    tech: ["React", "React Router", "Tailwind CSS", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-base-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-gray-400 mb-12">
          A selection of projects that reflect my skills and learning journey
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-base-200 rounded-2xl overflow-hidden 
              border border-gray-700 shadow-lg hover:-translate-y-2
              hover:shadow-primary/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover 
                  group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                      bg-base-300 border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium
                  hover:gap-3 transition-all"
                >
                  View Details <MdOutlineArrowOutward />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
