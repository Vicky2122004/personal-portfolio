import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="pt-20 flex justify-center px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-justify md:text-justify px-3 md:px-0">
        <p className="max-w-2xl">
          I am a{" "}
          <span className="font-semibold">React & React Native Developer</span>{" "}
          with expertise in building scalable web and mobile applications using
          modern technologies like Tailwind CSS, Redux, and Expo. I have a
          strong background in backend development with Node.js, Express,
          MongoDB, and PostgreSQL, and I specialize in building high-performance
          APIs with authentication, real-time features, and optimized database
          queries.
        </p>
        <img
          src="/assets/vignesh.jpg"
          alt="vignesh"
          width={330}
          height={330}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
