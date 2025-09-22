import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiReactquery,
  SiShadcnui,
  SiZod,
  SiPrimereact,
} from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";

const SkillsData = {
  frontend: {
    title: "Frontend Development",
    technologies: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    ],
  },
  styling: {
    title: "Styling & UI Libraries",
    technologies: [
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
      {
        name: "PrimeReact",
        icon: <SiPrimereact className="text-emerald-500" />,
      },
      { name: "ShadCN", icon: <SiShadcnui className="text-purple-500" /> },
    ],
  },
  stateManagement: {
    title: "State Management",
    technologies: [
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Zustand", icon: <BiCodeCurly className="text-blue-600" /> },
      { name: "ContextAPI", icon: <SiReact className="text-green-400" /> },
      { name: "React Query", icon: <SiReactquery className="text-pink-500" /> },
    ],
  },
  backend: {
    title: "Backend & Databases",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
    ],
  },
  mobile: {
    title: "Mobile Development",
    technologies: [
      {
        name: "React Native",
        icon: <SiReact className="text-cyan-400" />,
      },
    ],
  },
  utilities: {
    title: "Utilities & Validation",
    technologies: [{ name: "Zod", icon: <SiZod className="text-pink-400" /> }],
  },
};

export const Skills: React.FC = () => {
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
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="min-h-screen bg-gray-950 relative py-16 md:py-24 overflow-hidden"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            {/* Title */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient bg-200%">
                Skills & Technologies
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technologies I've mastered through projects and experience.
            </motion.p>

            {/* Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mt-6 rounded-full"
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(SkillsData).map(([key, category], index) => (
            <motion.div
              key={key}
              variants={categoryVariants}
              custom={index}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-300 group-hover:duration-200" />

              <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-950/70 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm h-full">
                <div className="p-6">
                  <div className="flex items-center mb-5">
                    <motion.div
                      className="h-3 w-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mr-3"
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(236, 72, 153, 0.7)",
                          "0 0 0 6px rgba(236, 72, 153, 0)",
                          "0 0 0 0 rgba(236, 72, 153, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <h2 className="text-xl font-semibold text-white">
                      {category.title}
                    </h2>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                  >
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        variants={itemVariants}
                        custom={techIndex}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(17, 24, 39, 0.8)",
                          borderColor: "rgba(236, 72, 153, 0.4)",
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full 
                      text-sm font-medium text-gray-200 
                      transition-all duration-300 border border-gray-700/50
                      backdrop-blur-sm"
                      >
                        {tech.icon && (
                          <motion.span
                            className="text-lg"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {tech.icon}
                          </motion.span>
                        )}
                        {tech.name}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-5 bg-gradient-to-r from-gray-900/30 to-gray-950/30 rounded-2xl border border-gray-700/30 backdrop-blur-md">
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              With expertise across the full stack, I build responsive,
              performant web and mobile applications using modern tools and best
              practices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
