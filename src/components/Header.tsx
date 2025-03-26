import { NavData } from "@/Constants/Constants";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 lg:px-10 pt-2">
      <div>
        <h1 className="text-2xl font-bold">Portfolio.</h1>
      </div>
      <nav>
        <ul className="hidden gap-8 lg:flex">
          {NavData.map((nav, i: number) => {
            return (
              <li
                key={i}
                className="font-medium hover:text-emerald-400 transition"
              >
                <a href={nav.path}>{nav.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
