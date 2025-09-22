import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaArrowUp } from "react-icons/fa";
import { SocialLinks } from "@/Constants/Constants";

export const Footer: React.FC = () => {
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Academics", href: "#academics" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -3,
      transition: { duration: 0.3 },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-pink-900/10 blur-3xl"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjAiIHk9IjAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiPjwvcmVjdD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiPjwvcmVjdD48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-3"
          >
            <motion.div variants={itemVariants}>
              <img src="/assets/logo.png" className="w-12 h-12" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Full Stack Developer creating digital experiences that matter.
              Focused on performance, accessibility, and beautiful interfaces.
            </motion.p>

            <motion.div variants={itemVariants} className="flex space-x-4">
              {SocialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 text-xl transition-colors duration-300 ${social.color}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-2"
          >
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-lg font-semibold text-white mb-6"
              >
                Navigation
              </motion.h3>
              <motion.ul variants={containerVariants} className="space-y-3">
                {footerLinks.map((link, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="h-px w-4 bg-gray-600 mr-3 transition-all duration-300 group-hover:w-6 group-hover:bg-pink-500"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <motion.h3
                variants={itemVariants}
                className="text-lg font-semibold text-white mb-6"
              >
                Connect
              </motion.h3>
              <motion.ul variants={containerVariants} className="space-y-3">
                <motion.li variants={itemVariants}>
                  <a
                    href="https://github.com/Vicky2122004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-px w-4 bg-gray-600 mr-3 transition-all duration-300 group-hover:w-6 group-hover:bg-pink-500"></span>
                    GitHub
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a
                    href="https://www.linkedin.com/in/vignesh-t-470a63257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-px w-4 bg-gray-600 mr-3 transition-all duration-300 group-hover:w-6 group-hover:bg-pink-500"></span>
                    LinkedIn
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vignesh T. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="text-gray-500 hover:text-white transition-colors flex items-center group"
            >
              <span className="mr-2">Back to Top</span>
              <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-pink-500 group-hover:border-pink-500 transition-all">
                <FaArrowUp className="text-xs group-hover:translate-y-[-2px] transition-transform" />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-gray-600 text-sm flex justify-center items-center"
        >
          Made with <FaHeart className="text-pink-500 mx-1" /> in India
        </motion.div>
      </div>
    </footer>
  );
};
