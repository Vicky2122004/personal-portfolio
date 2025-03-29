import { NavData } from "@/Constants/Constants";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section
      className={`fixed h-14 top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 pt-3 lg:px-10 lg:pt-2">
        <div>
          <a href="/">
            <h1 className="text-3xl font-bold text-gray-100">Portfolio.</h1>
          </a>
        </div>
        <nav>
          <ul className="hidden gap-8 lg:flex">
            {NavData.map((nav, i: number) => {
              return (
                <li
                  key={i}
                  className="text-lg font-medium transition-colors duration-200 highlight-text animate-fade-in text-gray-100"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <a href={nav.path}>{nav.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="block lg:hidden">
          {openMenu ? (
            <IoMdClose
              size={25}
              onClick={handleOpenMenu}
              className="text-gray-100"
            />
          ) : (
            <GiHamburgerMenu
              size={25}
              onClick={handleOpenMenu}
              className="text-gray-100"
            />
          )}
        </div>
      </div>
      {openMenu && (
        <div>
          <nav className="px-7 grid place-items-end lg:hidden">
            <ul className="bg-transparent rounded-lg p-6 space-y-4 w-40 text-center">
              {NavData.map((nav, i: number) => {
                return (
                  <li
                    key={i}
                    className="font-medium text-lg hover:text-emerald-400 transition text-gray-100"
                  >
                    <a href={nav.path}>{nav.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
};
