import { NavData } from "@/Constants/Constants";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of NavData) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMenu(false);

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const calculateBorderWidth = (label: string) => {
    const navItem = NavData.find((nav: any) => nav.label === label);
    if (!navItem) return "0px";

    const textLength = navItem.label.length;
    const adjustedLength = Math.max(textLength - 2, 0);

    const pxWidth = adjustedLength * 7;
    return `${pxWidth}px`;
  };

  return (
    <header className="fixed w-full  z-50 transition-all duration-300">
      <div className="mx-4 my-4 lg:mx-8 lg:my-5">
        <div className="flex items-center justify-between px-6 py-2 lg:px-12 bg-gray-900 rounded-sm border border-gray-700 shadow-md">
          {/* Logo */}
          <a href="/" className="flex items-center group relative">
            {/* Logo */}
            <img src="/assets/logo.png" alt="Logo" className="w-10 h-10" />

            {/* Name - hidden on mobile */}
            <span
              className="ml-2 text-xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
             bg-clip-text text-transparent whitespace-nowrap
             opacity-0 translate-x-[-10px] transition-all duration-300
             group-hover:opacity-100 group-hover:translate-x-0 hidden sm:inline-block"
            >
              Vignesh
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {NavData.map((nav, i) => (
              <li
                key={i}
                className="animate-fade-in list-none"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={(e) => handleNavClick(nav.id, e)}
                  className={`text-md font-medium transition duration-200 hover:text-pink-500 ${
                    activeId === nav.id ? "text-pink-500" : "text-gray-200"
                  }`}
                >
                  {nav.label}
                </a>
                <div
                  className={`
                border-b-2 mx-auto transition-all duration-300
                ${
                  activeId === nav.id
                    ? "border-pink-500 opacity-100"
                    : "border-transparent opacity-0"
                }
              `}
                  style={{
                    width: `${calculateBorderWidth(nav.label)}`,
                  }}
                ></div>
              </li>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            {openMenu ? (
              <IoMdClose
                size={28}
                onClick={handleOpenMenu}
                className="text-gray-100 cursor-pointer transition-transform transform hover:scale-110"
              />
            ) : (
              <GiHamburgerMenu
                size={28}
                onClick={handleOpenMenu}
                className="text-gray-100 cursor-pointer transition-transform transform hover:scale-110"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {openMenu && (
          <div className="absolute top-full right-4 w-52 bg-gray-900/90 backdrop-blur-md rounded-md border border-gray-700 shadow-lg lg:hidden">
            <nav className="py-2 px-8">
              <ul className="space-y-4 text-center">
                {NavData.map((nav, i) => (
                  <li
                    key={i}
                    className="animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <a
                      href={`#${nav.id}`}
                      onClick={(e) => handleNavClick(nav.id, e)}
                      className={`
                    block text-lg font-medium 
                    transition hover:text-pink-600 
                    relative pb-1
                    ${activeId === nav.id ? "text-pink-500" : "text-gray-100"}
                  `}
                    >
                      {nav.label}
                      <div
                        className={`
                      absolute bottom-0 left-1/2 transform -translate-x-1/2
                      border-b-2 w-6 transition-all duration-300
                      ${
                        activeId === nav.id
                          ? "border-pink-500 opacity-100"
                          : "border-transparent opacity-0"
                      }
                      group-hover:border-pink-500 group-hover:opacity-100
                    `}
                      ></div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
