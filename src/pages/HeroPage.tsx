import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import React from "react";

export const HeroPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Education />
    </div>
  );
};
