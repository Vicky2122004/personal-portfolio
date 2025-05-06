import React from "react";

export const Hero: React.FC = () => {
  return (
    <div
      className="bg-gray-950 h-screen flex items-center justify-center px-6"
      id="home"
    >
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10">
        {/* Left Content */}
        <div className="text-justify lg:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-center lg:text-left">
            Hi, I am <span className="text-pink-600">Vignesh</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light">
            I’m a{" "}
            <span className="text-pink-500 font-semibold">
              Full Stack Developer
            </span>{" "}
            <span>
              passionate about building intuitive, high-performance web
              applications.
            </span>
            <span>
              { "  " }I thrive on turning ideas into elegant digital experiences with
              clean code and modern design.
            </span>
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md shadow-md transition duration-300">
              View My Work
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 animate-fade-in">
          <div className="relative w-[350px] h-[350px] rounded-full p-[6px] shadow-2xl">
            <img
              src="/assets/vignesh.jpg"
              alt="Vignesh"
              className="rounded-full w-full h-full object-cover border-4 border-gray-900"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full ring-4 ring-pink-500 ring-opacity-10 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
