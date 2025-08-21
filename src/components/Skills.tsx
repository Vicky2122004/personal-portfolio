import { SkillsData } from "@/Constants/Constants";
import React from "react";
import { motion } from "framer-motion";

export const Skills: React.FC = () => {
  return (
    <div className="bg-gray-950 relative" id="skills">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-900/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-gradient bg-300%">
              Skills
            </span>
          </h1>

          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I've mastered through projects and experience
          </p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-6"
          />
        </motion.div>
      </div>
      <section className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {SkillsData.map((data: any, i: number) => (
          <div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-md border border-gray-700 shadow-md hover:shadow-lg transition duration-300 m-2"
            key={i}
          >
            <div className="flex items-center gap-3 border-b border-gray-600 pb-3 mb-4">
              <img
                src={data.image}
                alt={`${data.title} Logo`}
                className="h-10 w-10 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <h2 className="text-xl font-semibold text-pink-500">
                {data.title}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm text-justify">
              {data.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};
