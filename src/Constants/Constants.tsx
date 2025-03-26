import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GoProject } from "react-icons/go";
import { ReactElement } from "react";
import { MdOutlineContacts } from "react-icons/md";

export const NavData: (
  | {
      label: string;
      path: string;
      icon: ReactElement;
    }
  | {
      label: string;
      path: string;
      icon: string;
    }
)[] = [
  {
    label: "Home",
    path: "/",
    icon: <FaHome size={35} />,
  },
  {
    label: "About",
    path: "/",
    icon: <IoIosPerson size={35} />,
  },
  {
    label: "Projects",
    path: "/",
    icon: <GoProject size={35} />,
  },
  {
    label: "Contact",
    path: "/",
    icon: <MdOutlineContacts size={35} />,
  },
];
