import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <div
      className="bg-gray-950 h-screen flex items-center justify-center px-6 relative"
      id="home"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-900/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10">
        {/* Left Content */}
        <div className="text-justify lg:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-center lg:text-left">
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-gradient bg-300%">
              Vignesh
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light">
            I’m a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-gradient bg-300% font-semibold">
              Full Stack Developer
            </span>{" "}
            <span>
              passionate about building intuitive, high-performance web
              applications.
            </span>
            <span>
              {"  "}I thrive on turning ideas into elegant digital experiences
              with clean code and modern design.
            </span>
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 group-hover:animate-gradient group-hover:bg-300%">
                  View My Work
                </span>
                <svg
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[350px] h-[350px] rounded-full"
          >
            {/* Main profile image */}
            <motion.img
              src="/assets/vignesh.jpg"
              alt="Vignesh"
              className="absolute inset-0 rounded-full w-full h-full object-cover border-4 border-gray-900"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Subtle glow pulse */}
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 pointer-events-none"
            />

            {/* <motion.div
              className="absolute -inset-6 rounded-full p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_200%] shadow-lg"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full rounded-full bg-transparent" />
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
