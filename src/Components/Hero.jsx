import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-base-200 pt-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span
            className="inline-block px-4 py-1 text-sm rounded-full 
            bg-primary/10 text-primary font-medium"
          >
            👋 Hello, I’m Abdullah
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Frontend Developer <br />
            <span className="text-primary">& MERN Enthusiast</span>
          </h1>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            I design and build modern, responsive, and user-focused web
            applications using clean code, smooth animations, and scalable
            architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://drive.google.com/file/d/1VGC5fQrHPgRo0YY-8IR9E_nD2jshS5mh/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-4 md:px-6 md:py-3 py-2 rounded-lg bg-primary text-black font-medium
              hover:scale-105 transition shadow-lg shadow-primary/20"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-4 md:px-6 md:py-3 py-2 rounded-lg border border-gray-600
              hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 pt-4">
            <a
              href="https://www.facebook.com/abdullah.al.asad.857651"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-primary
              hover:-translate-y-1 transition-all"
            >
              <FaFacebook />
            </a>

            <a
              href="https://github.com/Abdullah881485"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-primary
              hover:-translate-y-1 transition-all"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abdullah-al-asad-/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-primary
              hover:-translate-y-1 transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          {/* Glow Ring */}
          <div
            className="absolute w-80 h-80 rounded-full 
            bg-linear-to-br from-primary/30 to-transparent blur-3xl"
          />

          <img
            src="https://i.ibb.co.com/tM2x17Fx/Gemini-Generated-Image-za78dtza78dtza78.png"
            alt="Abdullah"
            className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full
            border-4 border-primary shadow-2xl
            hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
