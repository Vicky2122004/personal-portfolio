import { HeroSocialMediaIcons } from "@/Constants/Constants";
import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4 py-20 md:py-0">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-6 max-w-2xl"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white py-3"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Vignesh
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed text-justify px-3"
              variants={itemVariants}
            >
              I'm a{" "}
              <span className="font-semibold text-cyan-400">
                React & React Native Developer
              </span>{" "}
              specializing in building high-performance web and mobile
              applications. My expertise spans modern frontend technologies like
              Tailwind CSS and Redux, coupled with robust backend solutions
              using Node.js, Express, and both SQL & NoSQL databases.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed text-justify px-3"
              variants={itemVariants}
            >
              I craft seamless user experiences with optimized performance,
              real-time features, and scalable architectures that grow with your
              business needs.
            </motion.p>

            <motion.div className="flex gap-6 mt-4" variants={itemVariants}>
              {HeroSocialMediaIcons.map((socialMediaIcon, i: number) => (
                <motion.a
                  href={socialMediaIcon.link}
                  target="_blank"
                  key={i}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-2xl">{socialMediaIcon.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-20"></div>
            <div className="relative rounded-full p-1 bg-gradient-to-r from-cyan-500 to-blue-600">
              <img
                src="/assets/vignesh.jpg"
                alt="Vignesh"
                width={350}
                height={350}
                className="rounded-full border-4 border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
