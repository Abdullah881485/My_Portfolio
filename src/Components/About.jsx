import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaLaptopCode, FaRocket, FaGamepad } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section id="about" className="py-28 bg-base-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A frontend-focused developer passionate about crafting clean,
            interactive, and user-friendly digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT TEXT */}
          <div
            ref={textRef}
            className="space-y-6 text-gray-400 leading-relaxed"
          >
            <p>
              My journey into programming started with curiosity — understanding
              how websites function behind the scenes. That curiosity quickly
              grew into a strong passion for building modern web applications.
            </p>

            <p>
              I enjoy working on frontend development the most, creating smooth
              interfaces and connecting them with reliable backend logic. Clean
              code, performance, and usability are always my priorities.
            </p>

            <p>
              Outside of coding, I enjoy gaming, exploring new technologies, and
              constantly improving myself through hands-on practice and
              experimentation.
            </p>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            ref={cardRef}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-base-200 border border-gray-700 
            rounded-2xl p-8 shadow-xl overflow-hidden"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 
            transition duration-500 bg-gradient-to-br 
            from-primary/15 to-transparent pointer-events-none"
            />

            <h3 className="text-xl font-semibold text-primary mb-6">
              What I Do
            </h3>

            <ul className="space-y-5 text-gray-300">
              {[
                {
                  icon: FaLaptopCode,
                  text: "Responsive & Modern UI Development",
                },
                { icon: FaCode, text: "MERN Stack Web Applications" },
                {
                  icon: FaRocket,
                  text: "Performance Optimization & Clean Code",
                },
                { icon: FaGamepad, text: "Interactive UI & Smooth UX" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center gap-4"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-primary text-lg"
                  >
                    <item.icon />
                  </motion.span>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
