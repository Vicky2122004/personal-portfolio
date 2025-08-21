import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { ContactInfo, SocialLinks } from "@/Constants/Constants";

export const Contact: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % ContactInfo.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + ContactInfo.length) % ContactInfo.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContact = ContactInfo[currentIndex];

  return (
    <div
      className="min-h-screen bg-gray-950 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center items-center"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-pink-900/20 to-blue-900/20 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-blue-900/10 to-indigo-900/10 blur-3xl"
        ></motion.div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjAiIHk9IjAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiPjwvcmVjdD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiPjwvcmVjdD48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="w-full max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="flex gap-3 justify-center">
              <span className="text-white">Let's</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Connect
              </span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-500 mx-auto leading-relaxed"
          >
            Whether you have a project in mind or just want to say hello, I'd
            love to hear from you.
          </motion.p>
        </motion.div>

        {/* Centered Contact Card */}
        <div className="flex justify-center">
          <div className="relative w-full">
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors text-gray-300 hover:text-white"
              aria-label="Previous contact method"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentContact.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-800 hover:border-pink-500/30 transition-all duration-500 overflow-hidden backdrop-blur-sm min-h-[300px] flex flex-col justify-center"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentContact.color.replace(
                    "/20",
                    "/5"
                  )} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${currentContact.color.replace(
                    "/20",
                    "/10"
                  )} opacity-0 group-hover:opacity-100 blur-md transition-all duration-500`}
                ></div>

                <div className="relative z-10 text-center px-4">
                  {currentContact.type !== "social" ? (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-white">
                        {currentContact.title}
                      </h3>
                      {currentContact.action ? (
                        <div className="flex items-center justify-center">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-br ${currentContact.color} mr-4 backdrop-blur-sm border ${currentContact.borderColor}`}
                          >
                            {currentContact.icon}
                          </div>
                          <a
                            href={currentContact.action}
                            className="text-gray-300 hover:text-pink-300 transition-colors text-xl md:text-2xl break-all flex items-center"
                          >
                            {currentContact.value}
                            <span className="ml-3 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                          </a>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-br ${currentContact.color} mr-4 backdrop-blur-sm border ${currentContact.borderColor}`}
                          >
                            {currentContact.icon}
                          </div>
                          <p className="text-gray-300 text-xl md:text-2xl">
                            {currentContact.value}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-white">
                        Social Profiles
                      </h3>
                      <div className="space-y-4">
                        {SocialLinks.map((social) => (
                          <motion.a
                            key={social.name}
                            whileHover={{ x: 4 }}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center text-gray-300 ${social.color} transition-colors group/social text-xl`}
                          >
                            <div
                              className={`p-3 rounded-lg bg-gray-800/50 group-hover/social:bg-gradient-to-br ${social.bg} mr-4 transition-all duration-300`}
                            >
                              {social.icon}
                            </div>
                            {social.name}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors text-gray-300 hover:text-white"
              aria-label="Next contact method"
            >
              <FaArrowRight className="text-xl" />
            </button>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {ContactInfo.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-pink-500 w-6"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to contact method ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional contact encouragement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-8"
        >
          <p className="text-pink-400/70 text-lg font-medium">
            Don't hesitate to reach out - I'm always open to new opportunities!
          </p>
        </motion.div>
      </div>
    </div>
  );
};
