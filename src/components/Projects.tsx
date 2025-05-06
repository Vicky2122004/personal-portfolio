import { ProjectSections } from "@/Constants/Constants";
import React, { useState } from "react";

export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const selectSection = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-gray-950 h-screen pt-20" id="projects">
      <div>
        <h1 className="text-white font-bold text-2xl text-center">
          Projects<span className="text-pink-500">.</span>
        </h1>
        <div className="mt-2 mx-auto w-12 border-b-4 border-pink-500"></div>
      </div>
      <div className="flex justify-center gap-7 pt-8">
        {ProjectSections.map((section: any, i: number) => (
          <button
            key={i}
            onClick={() => selectSection(i)}
            className="text-center cursor-pointer"
          >
            <h1
              className={`text-lg font-semibold ${
                activeIndex === i ? "text-pink-500" : "text-white"
              }`}
            >
              {section}
            </h1>
            {activeIndex === i && (
              <div className="mt-2 mx-auto w-10 border-b-4 border-pink-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
