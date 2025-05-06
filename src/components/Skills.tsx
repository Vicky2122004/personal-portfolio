import { SkillsData } from "@/Constants/Constants";
import React from "react";

export const Skills: React.FC = () => {
  return (
    <div className="bg-gray-950  lg:h-screen" id="skills">
      <div className="pt-25 text-center">
        <h1 className="text-white text-3xl font-bold tracking-wider">
          Skills<span className="text-pink-500">.</span>
        </h1>
        <div className="mt-2 mx-auto w-12 border-b-4 border-pink-500"></div>
      </div>
      <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {SkillsData.map((data: any, i: number) => (
          <div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-md border border-gray-700 shadow-md hover:shadow-lg transition duration-300 m-2"
            key={i}
          >
            <div className="flex items-center gap-3 border-b border-gray-600 pb-3 mb-4">
              <img
                src={data.image}
                alt={`${data.title} Logo`}
                className="h-10 w-10 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <h2 className="text-xl font-semibold text-pink-500">
                {data.title}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm text-justify">
              {data.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};
