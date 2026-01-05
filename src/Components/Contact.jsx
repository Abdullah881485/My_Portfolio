import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhoneSquareAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Have a project in mind, want to collaborate, or just say hello? I’d
          love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-xl" />
              <span className="text-gray-300">
                abdullahalasad106882@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneSquareAlt className="text-primary text-xl" />
              <span className="text-gray-300">+880 1894150206</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-primary text-xl" />
              <span className="text-gray-300">+880 1894150206</span>
            </div>

            <div className="flex items-center gap-4">
              <FaLocationDot className="text-primary text-xl" />
              <span className="text-gray-300">Chittagong, Bangladesh</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-4">
              <a
                href="https://github.com/Abdullah881485"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-400 hover:text-primary
                hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-al-asad-/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-400 hover:text-primary
                hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/abdullah.al.asad.857651"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-400 hover:text-primary
                hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Contact Card */}
          <div
            className="bg-base-300 border border-gray-700 rounded-2xl p-8
            shadow-xl hover:shadow-primary/20 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Let’s Work Together
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I’m open to freelance projects, internships, and collaboration
              opportunities. If you have an idea or opportunity, feel free to
              reach out — I usually respond quickly.
            </p>

            <a
              href="mailto:abdullahalasad106882@gmail.com"
              className="inline-block mt-8 px-6 py-3 rounded-lg bg-primary
              text-black font-medium hover:scale-105 transition"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
