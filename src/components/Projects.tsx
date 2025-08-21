import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ProjectDetailsData } from "@/Constants/Constants";

const groupProjectsById = () => {
  const groups: Record<string, typeof ProjectDetailsData> = {};
  ProjectDetailsData.forEach((project) => {
    const id = project.id.toLowerCase();
    if (!groups[id]) {
      groups[id] = [];
    }
    groups[id].push(project);
  });
  return groups;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// const scaleUp = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1 },
// };

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const groupedProjects = groupProjectsById();
  // const categories = ["all", ...Object.keys(groupedProjects)];
  const filteredProjects =
    activeCategory === "all"
      ? ProjectDetailsData
      : groupedProjects[activeCategory] || [];

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="bg-gray-950 pt-24 px-5 pb-28 relative" id="projects">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-900/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-5xl md:text-6xl font-bold mb-4"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Projects
          </span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 text-lg mb-6"
        >
          Explore my portfolio of work across different domains and technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-6"
        />
      </div>

      {/* Category Buttons */}
      {/* {categories.length > 1 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-3 mb-16 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={scaleUp}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all"
                ? "All"
                : `${category.charAt(0).toUpperCase() + category.slice(1)}`}
            </motion.button>
          ))}
        </motion.div>
      )} */}

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={`${project.id}-${i}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="h-full flex flex-col rounded-2xl bg-gradient-to-b from-gray-900 to-gray-900/80 border border-gray-800 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/10 overflow-hidden cursor-pointer">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

                {/* Tech Stack Badges */}
                {project.techStack && (
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-black/70 backdrop-blur-sm text-xs font-medium text-white rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-xs font-medium text-white rounded-full border border-gray-700">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.short_desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                    {project.category || "Development"}
                  </span>
                  <motion.div
                    animate={{
                      x: hoveredProject === project.id ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-500"
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
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-md mx-auto">
            <svg
              className="w-20 h-20 mx-auto text-gray-600 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-medium text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 mb-6">
              We couldn't find any projects in this category.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="px-6 py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-full font-medium transition-all duration-300 shadow-md"
            >
              View All Projects
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
