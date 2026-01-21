import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  /* AOS */
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-cubic" });
  }, []);

  /* GSAP intro */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      textRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
    ).fromTo(
      imageRef.current,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6",
    );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-base-200 flex items-center pt-24 pb-10 md:pb-0 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div ref={textRef} className="space-y-6">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
            👋 Hello, I’m Abdullah
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            MERN Stack Developer
            <br />
            <span className="text-primary code">
              <Typewriter
                options={{
                  strings: [
                    "Building modern web applications",
                    "Turning ideas into polished digital products",
                    "Creating seamless user experiences",
                    "Developing scalable MERN projects",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 25,
                }}
              />
            </span>
          </h1>

          <p
            data-aos="fade-up"
            className="text-gray-400 max-w-xl leading-relaxed"
          >
            I design and build responsive, user-focused web applications with
            clean code, performance in mind, and smooth animations.
          </p>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.a
              href="https://drive.google.com/file/d/1VGC5fQrHPgRo0YY-8IR9E_nD2jshS5mh/view"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-primary text-black font-medium shadow-lg shadow-primary/30"
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg border border-gray-600 hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social */}
          <div className="flex gap-6 pt-4">
            {[
              {
                icon: <FaFacebook />,
                link: "https://www.facebook.com/abdullah.al.asad.857651",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/Abdullah881485",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/abdullah-al-asad-/",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.15 }}
                className="text-2xl text-gray-400 hover:text-primary transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          data-aos="zoom-in"
          data-aos-delay="300"
          className="relative flex justify-center items-center"
        >
          {/* Soft outer glow */}
          <div
            className="absolute w-90 h-90 rounded-full 
    bg-primary/25 blur-3xl animate-pulse"
          />

          {/* Orbit ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-[320px] h-80 rounded-full 
    border border-primary/30"
          />

          {/* Profile image */}
          <motion.img
            src="https://i.ibb.co.com/tM2x17Fx/Gemini-Generated-Image-za78dtza78dtza78.png"
            alt="Abdullah"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: 1,
            }}
            className="relative z-10 w-72 h-72 md:w-80 md:h-80 
    object-cover rounded-full 
    border-4 border-primary 
    shadow-2xl shadow-primary/30"
          />

          {/* Decorative dots */}
          <motion.span
            className="absolute -top-6 right-10 w-3 h-3 rounded-full bg-primary"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.span
            className="absolute bottom-8 left-12 w-2 h-2 rounded-full bg-primary/70"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
