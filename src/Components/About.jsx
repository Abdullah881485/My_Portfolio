import { FaCode, FaLaptopCode, FaRocket, FaGamepad } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 bg-base-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          A passionate frontend-focused developer who loves turning ideas into
          interactive digital experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <p className="text-gray-400 leading-relaxed">
              My programming journey began with curiosity — understanding how
              websites work behind the scenes. That curiosity quickly evolved
              into a passion for building clean, modern, and interactive web
              applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy frontend development the most, crafting smooth user
              interfaces and connecting them with efficient backend logic. I
              strongly value clean code, performance, and user-focused design.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Beyond coding, I enjoy gaming, exploring new technologies, and
              continuously improving myself through learning, practice, and
              experimentation.
            </p>
          </div>

          {/* Right Card */}
          <div
            className="relative bg-base-200 border border-gray-700 rounded-2xl p-8
            shadow-xl hover:shadow-primary/20 hover:-translate-y-2
            transition-all duration-300 group"
          >
            <h3 className="text-xl font-semibold text-primary mb-6">
              What I Do
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FaLaptopCode className="text-primary text-lg group-hover:scale-110 transition" />
                Responsive & Modern UI Development
              </li>

              <li className="flex items-center gap-3">
                <FaCode className="text-primary text-lg group-hover:scale-110 transition" />
                MERN Stack Web Applications
              </li>

              <li className="flex items-center gap-3">
                <FaRocket className="text-primary text-lg group-hover:scale-110 transition" />
                Performance Optimization & Clean Code
              </li>

              <li className="flex items-center gap-3">
                <FaGamepad className="text-primary text-lg group-hover:scale-110 transition" />
                Interactive UI & Smooth User Experience
              </li>
            </ul>

            {/* Subtle glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
              transition duration-300 bg-linear-to-br from-primary/10 to-transparent pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
