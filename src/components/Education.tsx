import { AcademicDetails } from "@/Constants/Constants";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Education: React.FC = () => {
  return (
    <div className="h-[102vh] bg-gray-950" id="academics">
      <div className="font-bold text-2xl pt-22">
        <h1 className="text-white text-center">
          Academics <span className="text-pink-500">.</span>
        </h1>
        <div className="mt-2 mx-auto w-20 border-b-4 border-pink-500"></div>
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
