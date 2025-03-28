import React from "react";
import { HeaderPage } from "./pages/HeaderPage";
import { HeroPage } from "./pages/HeroPage";

export const App: React.FC = () => {
  return (
    <>
      <HeaderPage />
      <HeroPage />
    </>
  );
};
