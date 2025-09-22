import React from "react";
import { motion } from "framer-motion";
import { ContactInfo, SocialLinks } from "@/Constants/Constants";

export const Contact: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-gray-950 py-20 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center relative overflow-hidden"
      id="contact"
    >
      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient bg-200% tracking-tight mb-6">
            Let’s Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I’d love to hear
            from you!
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ContactInfo.map((contact) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-800 hover:border-pink-500/40 transition-all duration-500 backdrop-blur-sm shadow-lg"
            >
              {/* Glow Hover Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contact.color.replace(
                  "/20",
                  "/10"
                )} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex items-center space-x-5">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${contact.color} backdrop-blur-sm border ${contact.borderColor} flex items-center justify-center`}
                >
                  {contact.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {contact.title}
                  </h3>
                  {contact.action ? (
                    <a
                      href={contact.action}
                      className="text-gray-300 hover:text-pink-300 transition-colors text-lg break-all flex items-center group"
                    >
                      {contact.value}
                      <motion.span
                        initial={{ opacity: 0, x: 0 }}
                        whileHover={{ opacity: 1, x: 6 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2"
                      >
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
                      </motion.span>
                    </a>
                  ) : (
                    <p className="text-gray-300 text-lg">{contact.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-8">
            Social Profiles
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {SocialLinks.map((social) => (
              <motion.a
                key={social.name}
                whileHover={{ y: -3 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 group/social text-lg bg-gray-800/40 hover:bg-gray-700/60 px-5 py-3 rounded-xl transition-all duration-300"
              >
                <div
                  className={`p-3 rounded-lg bg-gray-900/60 group-hover/social:bg-gradient-to-br ${social.bg} mr-3 transition-all duration-300`}
                >
                  {social.icon}
                </div>
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-pink-400/70 text-lg font-medium">
            Don’t hesitate to reach out — I’m always open to new opportunities!
          </p>
        </motion.div>
      </div>
    </div>
  );
};
