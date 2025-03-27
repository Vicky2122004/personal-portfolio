import { NavData } from "@/Constants/Constants";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 pt-3 lg:px-10 lg:pt-2">
        <div>
          <a href="/">
            <h1 className="text-2xl font-bold">Portfolio.</h1>
          </a>
        </div>
        <nav>
          <ul className="hidden gap-8 lg:flex">
            {NavData.map((nav, i: number) => {
              return (
                <li
                  key={i}
                  className="font-medium text-md hover:text-emerald-400 transition"
                >
                  <a href={nav.path}>{nav.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="block lg:hidden">
          {openMenu ? (
            <IoMdClose size={25} onClick={handleOpenMenu} />
          ) : (
            <GiHamburgerMenu size={25} onClick={handleOpenMenu} />
          )}
        </div>
      </div>
      {openMenu && (
        <div>
          <nav className="px-7 grid place-items-end lg:hidden">
            <ul className="bg-gray-300 rounded-lg p-6 space-y-4 w-40 text-center">
              {NavData.map((nav, i: number) => {
                return (
                  <li
                    key={i}
                    className="font-medium text-md hover:text-emerald-400 transition"
                  >
                    <a href={nav.path}>{nav.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
