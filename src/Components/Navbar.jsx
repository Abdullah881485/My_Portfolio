import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  /* AOS */
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* GSAP entrance */
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-4 inset-x-0 mx-auto z-50
      w-[95%] max-w-6xl
      transition-all duration-300
      ${
        scrolled
          ? "bg-base-300/80 backdrop-blur border border-gray-700 shadow-xl"
          : "bg-base-300/60 backdrop-blur border border-gray-800"
      }
      rounded-2xl`}
    >
      <nav className="px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-lg md:text-2xl font-extrabold tracking-wide text-primary logo"
        >
          Abdullah<span className="text-white">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {navLinks.map((link, i) => (
            <li key={link.name} data-aos="fade-down" data-aos-delay={i * 80}>
              <a
                href={link.href}
                className="relative text-gray-300 hover:text-primary transition
                after:absolute after:-bottom-1 after:left-0 after:h-0.5
                after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-700 bg-base-300 rounded-b-2xl"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-primary transition text-lg"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
