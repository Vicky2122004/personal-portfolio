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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-4 my-4 lg:mx-8 lg:my-5">
        <div className="flex items-center justify-between px-6 py-2 lg:px-12 bg-gray-900 rounded-md border border-gray-700 shadow-md">
          <a className="text-2xl font-bold text-white tracking-wide">
            Portfolio<span className="text-pink-500">.</span>
          </a>

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
                      border-b-2 w-6 mx-auto transition-all duration-300

                      ${
                        activeId === nav.id
                          ? "border-pink-500 opacity-100"
                          : "border-transparent opacity-0"
                      }
                    `}
                ></div>
              </li>
            ))}
          </nav>

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

        {openMenu && (
          <div className="absolute top-full right-4 w-52 bg-gray-900/90 backdrop-blur-md rounded-md border border-gray-700 shadow-lg">
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
