import { AcademicDetails } from "@/Constants/Constants";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

export const Education: React.FC = () => {
  return (
    <div className="bg-gray-950 pt-22 relative" id="academics">
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
              Academics
            </span>
          </h1>

          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            My educational journey and academic achievements in the field of
            technology and innovation.
          </p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-6"
          />
        </motion.div>
      </div>
      <div className="bg-gray-950 py-14 px-4 sm:px-10">
        <VerticalTimeline lineColor="#be185d">
          {AcademicDetails.map((academic: any, i: number) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "linear-gradient(to bottom, #1f2937, #111827)",
                color: "#fce7f3",
                border: "1px solid #9d174d",
                backdropFilter: "blur(12px)",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(17, 24, 39, 0.8)",
              }}
              date={academic.year}
              iconStyle={{
                background: "#111827",
                color: "#f9a8d4",
                border: "2px dotted #be185d",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
              }}
              icon={academic.icon}
            >
              <h3 className="text-xl font-bold text-pink-100 mb-1">
                {academic.qualification}
              </h3>
              <h4 className="text-sm text-pink-300 font-medium">
                {academic.institute}
              </h4>
              <p className="text-pink-200 text-sm mt-2">{academic.place}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
