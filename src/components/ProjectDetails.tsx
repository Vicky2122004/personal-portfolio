import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectDetailsData } from "@/Constants/Constants";

export const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = ProjectDetailsData.find((p) => p.id === id);

  useEffect(() => {
    if (!project) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <div className="bg-gray-900 w-full h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Compact Image Slider Section */}
      <div className="relative h-[250px] lg:h-screen w-full overflow-hidden">
        {/* Image Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.images[currentImageIndex]})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Overlay details (Desktop only) */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent lg:flex items-end pb-12 hidden md:flex">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    {project.title}
                  </h1>
                  <div className="flex justify-center gap-4 text-lg text-gray-300">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-6" : "bg-gray-500"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile title section (below image) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="md:hidden text-center px-6 mt-6"
      >
        <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
        <div className="flex justify-center gap-4 text-base text-gray-300">
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
      </motion.div>

      {/* Project Details Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Project Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16 text-justify"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            {project.long_desc}
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.6 }}
                  className="flex items-start"
                >
                  <span className="text-pink-500 mr-3 text-xl">•</span>
                  <span className="text-lg text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Tech Stack & Links Section */}
          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index + 0.8 }}
                    className="px-4 py-2 bg-gray-800 rounded-lg text-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Project Links
              </h2>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
                >
                  <span className="text-lg">GitHub Repository</span>
                  <span className="text-xl">→</span>
                </motion.a>
                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <span className="text-lg">Live Demo</span>
                    <span className="text-xl">→</span>
                  </motion.a>
                )}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};
