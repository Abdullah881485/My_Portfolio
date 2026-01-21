import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    text: "abdullahalasad106882@gmail.com",
  },
  { icon: <FaPhoneAlt />, label: "Phone", text: "+880 1894150206" },
  { icon: <FaWhatsapp />, label: "WhatsApp", text: "+880 1894150206" },
  {
    icon: <FaLocationDot />,
    label: "Location",
    text: "Chittagong, Bangladesh",
  },
];

const socials = [
  { icon: <FaGithub />, link: "https://github.com/Abdullah881485" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/abdullah-al-asad-/",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/abdullah.al.asad.857651",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-cubic" });

    // Landing fade-in for the whole section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-28 bg-base-200 min-h-screen overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary tracking-widest font-medium">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Let’s Connect</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project, opportunity, or just want to say hello? I’m always
            open to meaningful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            className="grid gap-6"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.01 }}
                className="flex items-center gap-4 bg-base-300 border border-gray-700 rounded-2xl p-5 shadow-lg w-full"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary text-xl">
                  {item.icon}
                </div>
                <div className="flex flex-col wrap-break-word">
                  <span className="text-gray-400 text-xs">{item.label}</span>
                  <p className="text-gray-300 text-sm md:text-base">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div className="flex gap-6 pt-4 justify-center md:justify-start flex-wrap">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-2xl text-gray-400 hover:text-primary transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-base-300 border border-gray-700 rounded-2xl p-8 shadow-xl flex flex-col justify-between w-full max-w-full"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Ready to Work Together?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I’m open to freelance work, internships, and collaboration
                opportunities. If you have an idea or role in mind, feel free to
                reach out — I usually reply fast.
              </p>
            </div>

            <motion.a
              href="mailto:abdullahalasad106882@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-black font-medium shadow-lg hover:shadow-primary/30 transition"
            >
              Send Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
