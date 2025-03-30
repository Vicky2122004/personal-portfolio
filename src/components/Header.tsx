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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-gray-900/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3 lg:px-12">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold text-white tracking-wide">
          Portfolio<span className="text-emerald-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {NavData.map((nav, i) => (
            <a
              key={i}
              href={nav.path}
              className="text-md font-medium transition duration-200 text-gray-200 hover:text-emerald-400"
            >
              {nav.label}
            </a>
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

      {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-full right-0 w-48 bg-gray-900/90 backdrop-blur-md">
          <nav className="py-4 px-6">
            <ul className="space-y-4 text-center">
              {NavData.map((nav, i) => (
                <li
                  key={i}
                  className="animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <a
                    href={nav.path}
                    className="block text-lg font-medium text-gray-100 transition hover:text-emerald-400"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
