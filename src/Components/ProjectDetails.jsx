import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const projectData = {
  fundmate: {
    title: "FundMate",
    image: "https://i.ibb.co.com/Y7mWgswq/Screenshot-2025-12-31-122136.png",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    description:
      "FundMate is a microloan management platform that allows users to apply for loans, track application status, and complete secure payments, while admins manage loans and approvals through a role-based dashboard.",
    live: "https://fund-mate.netlify.app/",
    github: "https://github.com/Abdullah881485/FundMate-Client",
    challenges:
      "Handling protected routes on refresh, implementing role-based access control, securing API requests with Firebase tokens, and managing payment flow with Stripe.",
    future:
      "Adding EMI tracking, loan history analytics, notification system, and improving admin insights with advanced reports and charts.",
  },

  finease: {
    title: "FinEase",
    image: "https://i.ibb.co.com/NgZZ5tXx/Screenshot-2025-11-20-185012.png",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Firebase Authentication",
      "Axios",
      "MongoDB",
      "Express.js",
      "Chart.js",
    ],
    description:
      "FinEase is a modern personal finance management web application that helps users track income and expenses, analyze spending patterns, and maintain better financial control through a clean, intuitive, and data-driven interface.",
    live: "https://finease-72caa.web.app/",
    github: "https://github.com/Abdullah881485/Ph-A-10-Client",
    challenges:
      "Managing role-based protected routes, handling secure authentication, synchronizing frontend state with backend data, and presenting financial insights in a clear and user-friendly way.",
    future:
      "Adding budget goals, recurring transactions, advanced analytics, exportable reports, notifications, and enhanced admin-level insights for better financial planning.",
  },

  playnest: {
    title: "PlayNest",
    image: "https://i.ibb.co.com/G3xXrYK4/Screenshot-2025-12-02-193643.png",
    tech: ["React", "React Router", "Tailwind CSS", "Firebase", "AOS"],
    description:
      "PlayNest is a kid-friendly toy marketplace where users can explore toys from local sellers, view detailed product information, and interact with a clean, engaging interface designed for families.",
    live: "https://playnest-project.web.app/",
    github: "https://github.com/Abdullah881485/PlayNest-Project",
    challenges:
      "Designing a playful yet professional UI while managing protected routes, dynamic routing, and maintaining state across page reloads.",
    future:
      "Implementing a backend with real-time inventory, payment integration, order tracking, and enhanced seller management features.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) return null;

  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-sm text-gray-400 hover:text-primary transition cursor-pointer"
        >
          <FaArrowLeft />
          Back to Projects
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg mb-10"
        />

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

        <p className="text-gray-400 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm rounded-full 
              bg-base-300 border border-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-6">
          <p>
            <span className="font-semibold text-primary">Challenges:</span>{" "}
            {project.challenges}
          </p>

          <p>
            <span className="font-semibold text-primary">
              Future Improvements:
            </span>{" "}
            {project.future}
          </p>
        </div>

        <div className="flex gap-4 mt-10 flex-wrap">
          <a
            href={project.live}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Project
          </a>
          <a
            href={project.github}
            className="btn btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub (Client)
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
