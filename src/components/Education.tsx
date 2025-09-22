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
    <div className="bg-gray-950 pt-22 relative overflow-hidden" id="academics">
      {/* Decorative blurred gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-pink-600/20 via-purple-600/20 to-indigo-600/20 blur-3xl animate-pulse" />
      </div>

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
              Academics
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
            My educational journey and academic achievements in the field of
            technology and innovation.
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

      {/* Timeline */}
      <div className="bg-gray-950 py-14 px-4 sm:px-10 relative z-10">
        <VerticalTimeline lineColor="#db2777">
          {AcademicDetails.map((academic: any, i: number) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--education"
              contentStyle={{
                background:
                  "linear-gradient(135deg, rgba(31,41,55,0.9), rgba(17,24,39,0.9))",
                color: "#fce7f3",
                border: "1px solid rgba(219,39,119,0.6)",
                backdropFilter: "blur(14px)",
                borderRadius: "14px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.5)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(31,41,55,0.8)",
              }}
              date={academic.year}
              iconStyle={{
                background: "#111827",
                color: "#f9a8d4",
                border: "2px solid #db2777",
                boxShadow:
                  "0 0 15px rgba(219,39,119,0.5), 0 0 25px rgba(147,51,234,0.3)",
              }}
              icon={academic.icon}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-pink-100 mb-1">
                  {academic.qualification}
                </h3>
                <h4 className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                  {academic.institute}
                </h4>
                <p className="text-pink-200 text-sm mt-2">{academic.place}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
