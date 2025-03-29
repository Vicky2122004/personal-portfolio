import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GoProject } from "react-icons/go";
import { ReactElement } from "react";
import { MdOutlineContacts } from "react-icons/md";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

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

export const HeroSocialMediaIcons: {
  title: string;
  icon: ReactElement;
  link: string;
}[] = [
  {
    title: "Linkedin",
    icon: <TbBrandLinkedin size={25} />,
    link: "",
  },
  {
    title: "Github",
    icon: <TbBrandGithub size={25} />,
    link: "https://github.com/Vicky2122004",
  },
  {
    title: "Instagram",
    icon: <TbBrandInstagram size={25} />,
    link: "https://www.instagram.com/ruthuraj_vicky_21/?hl=en",
  },
  {
    title: "Facebook",
    icon: <TbBrandFacebook size={25} />,
    link: "",
  },
];
