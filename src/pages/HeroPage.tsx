import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectDetails } from "@/components/ProjectDetails";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderPage } from "./HeaderPage";

export const HeroPage: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderPage />
                <Hero />
                <Skills />
                <Education />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
