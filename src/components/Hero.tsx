import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { downloadResume } from "@/utils/downloadResume";

export const Hero: React.FC = () => {
  const Icons = [
    {
      icon: SiInstagram,
      url: "https://www.instagram.com/ruthuraj_vicky_21/",
      color: "text-[#E1306C]", // Instagram's exact brand color
      hoverColor: "hover:text-[#C13584]", // Instagram's gradient purple
    },
    {
      icon: SiLinkedin,
      url: "https://www.linkedin.com/in/vignesh-t-470a63257/",
      color: "text-[#0077B5]", // LinkedIn's exact brand color
      hoverColor: "hover:text-[#005682]", // Darker shade
    },
    {
      icon: SiGithub,
      url: "https://github.com/Vicky2122004",
      color: "text-[#333333]", // GitHub's exact brand color
      hoverColor: "hover:text-[#4078c0]", // GitHub's blue for hover
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-950  flex items-center justify-center px-6 relative overflow-hidden"
      id="home"
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              background: `linear-gradient(45deg, ${
                i % 2 === 0
                  ? "rgba(236, 72, 153, 0.3)"
                  : "rgba(139, 92, 246, 0.3)"
              }, transparent)`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? "50%" : "30%",
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              rotate: [0, 180],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 relative z-10">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient bg-300%">
                Vignesh
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent relative">
                Full Stack Developer
              </h2>
            </motion.div>
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            I'm passionate about building intuitive, high-performance web
            applications. I thrive on turning ideas into elegant digital
            experiences with clean code and modern design.
          </motion.p>

          <motion.div
            className="pt-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(236, 72, 153, 0.4), 0 5px 10px -5px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={downloadResume}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden flex items-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              <span className="flex items-center gap-2">
                <motion.svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ y: [0, 5, 0] }} // vertical bounce
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v12m0 0l-6-6m6 6l6-6"
                  />
                </motion.svg>
                <span className="mr-2 z-20">Download CV</span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute -inset-6 rounded-full"
              animate={{
                rotate: 360,
                boxShadow: [
                  "0 0 20px 5px rgba(236, 72, 153, 0.3)",
                  "0 0 30px 10px rgba(139, 92, 246, 0.3)",
                  "0 0 20px 5px rgba(236, 72, 153, 0.3)",
                ],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Main profile image container */}
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile image */}
              <motion.img
                src="/assets/vignesh.png"
                alt="Vignesh"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Floating elements around the image */}
            {Icons.map((icon, i) => {
              const Icon = icon.icon;

              return (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 via-gray-100 to-white
  flex items-center justify-center shadow-lg"
                  style={{
                    top: i === 0 ? "10%" : i === 1 ? "80%" : "45%",
                    left: i === 0 ? "80%" : i === 1 ? "10%" : "85%",
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  <a
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex justify-center items-center"
                  >
                    <Icon
                      size={22} // bigger size
                      className={`${icon.color} ${icon.hoverColor} transition-colors duration-300`}
                    />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
