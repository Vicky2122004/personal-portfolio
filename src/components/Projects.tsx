import { ProjectSections } from "@/Constants/Constants";
import React, { useState } from "react";

export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const selectSection = (index: number) => {
    setActiveIndex(index);
  };

  const calculateBorderWidth = (label: string) => {
    const navItem = ProjectSections.find((nav: any) => nav === label);
    if (!navItem) return "0px";

    const textLength = navItem.length;
    const adjustedLength = Math.max(textLength - 1, 0);

    const pxWidth = adjustedLength * 7;
    return `${pxWidth}px`;
  };

  return (
    <div className="bg-gray-950 h-screen pt-20" id="projects">
      <div>
        <h1 className="text-white font-bold text-2xl text-center">
          Projects<span className="text-pink-500">.</span>
        </h1>
        <div className="mt-2 mx-auto w-12 border-b-4 border-pink-500"></div>
      </div>
      <div className="flex justify-center gap-15 pt-8">
        {ProjectSections.map((section: any, i: number) => (
          <button
            key={i}
            onClick={() => selectSection(i)}
            className="text-center cursor-pointer"
          >
            <h1
              className={`text-lg font-semibold transition-colors duration-300 ${
                activeIndex === i ? "text-pink-500" : "text-white"
              }`}
            >
              {section}
            </h1>
            <div className="h-[4px] mt-1 transition-all duration-300 ease-in-out">
              <div
                className={`mx-auto rounded-full ${
                  activeIndex === i
                    ? "border-b-4 border-pink-500"
                    : "w-0 border-b-4 border-transparent"
                }`}
                style={{
                  width: `${calculateBorderWidth(section)}`,
                }}
              ></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
