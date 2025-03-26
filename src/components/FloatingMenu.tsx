import { NavData } from "@/Constants/Constants";
import React from "react";

export const FloatingMenu: React.FC = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] lg:hidden z-50">
      <div className="p-4 bg-white shadow-lg rounded-xl backdrop-blur-lg border border-gray-200">
        <nav>
          <ul className="flex justify-between items-center">
            {NavData.map((nav, i: number) => {
              const isActive = currentPath === nav.path;
              return (
                <li key={i} className="relative">
                  <a
                    href={nav.path}
                    className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {nav.icon}
                    {isActive && <span className="text-xs">{nav.label}</span>}
                  </a>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
