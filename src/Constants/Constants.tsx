import { FaHome, FaSchool } from "react-icons/fa";
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
import { GiGraduateCap } from "react-icons/gi";

export const NavData: (
  | {
      label: string;
      path: string;
      icon: ReactElement;
      id: string;
    }
  | {
      label: string;
      path: string;
      icon: string;
      id: string;
    }
)[] = [
  {
    label: "Home",
    path: "/home",
    icon: <FaHome size={35} />,
    id: "home",
  },
  // {
  //   label: "About",
  //   path: "/",
  //   icon: <IoIosPerson size={35} />,
  // },
  {
    label: "Skills",
    path: "/",
    icon: <IoIosPerson size={35} />,
    id: "skills",
  },
  {
    label: "Academics",
    path: "/",
    icon: <IoIosPerson size={35} />,
    id: "academics",
  },
  {
    label: "Projects",
    path: "/",
    icon: <GoProject size={35} />,
    id: "projects",
  },
  {
    label: "Contact",
    path: "/",
    icon: <MdOutlineContacts size={35} />,
    id: "contact",
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

export const SkillsData = [
  {
    title: "HTML5",
    image: "/assets/techToolImages/html5.png",
    desc: `Proficient in writing clean, semantic, and accessible HTML.
  Experienced in crafting well-structured content using modern HTML5
  standards, optimizing for SEO, and ensuring consistent performance
  across all major browsers.`,
  },
  {
    title: "CSS3",
    image: "/assets/techToolImages/css3.png",
    desc: `Proficient in crafting responsive, visually appealing layouts using modern CSS3 features. Skilled in Flexbox, Grid, animations, and custom styling to build user-friendly interfaces optimized for all screen sizes and browsers.`,
  },
  {
    title: "JavaScript",
    image: "/assets/techToolImages/js.png",
    desc: `Experienced in writing efficient and maintainable JavaScript code. Skilled in ES6+ features, DOM manipulation, event handling, and building interactive web applications with a focus on performance and scalability.`,
  },
  {
    title: "ReactJs",
    image: "/assets/techToolImages/react.png",
    desc: `Skilled in building dynamic, high-performance web applications using React. Proficient in hooks, component-based architecture, state management, and integrating REST APIs for seamless user experiences.`,
  },
  {
    title: "NodeJs",
    image: "/assets/techToolImages/node.png",
    desc: `Experienced in building scalable, high-performance backend applications using Node.js. Proficient in developing RESTful APIs, handling asynchronous operations, and integrating databases with Express and  modern frameworks.`,
  },
  {
    title: "React Native",
    image: "/assets/techToolImages/reactNative.png",
    desc: `Proficient in developing cross-platform mobile applications using React Native. Skilled in creating smooth user interfaces, integrating native modules, and managing state with hooks and libraries like Redux or Context API.`,
  },
  {
    title: "Redux",
    image: "/assets/techToolImages/redux.png",
    desc: `Skilled in managing complex application state using Redux. Experienced in structuring scalable state architecture, creating reusable actions and reducers, and integrating Redux Toolkit for efficient and maintainable code.`,
  },
  {
    title: "Remotion",
    image: "/assets/techToolImages/remotion.png",
    desc: `Experienced in creating dynamic and programmable videos using Remotion. Skilled in combining React with animation techniques to build high-quality video for marketing, automation, and media production.`,
  },
];

export const AcademicDetails = [
  {
    year: "2021 - 2024",
    icon: <GiGraduateCap size={25} />,
    qualification: "Bachelor of Commerce with Computer Applications",
    institute: "Theni Kammavar Sangam College of Arts & Science",
    place: "Theni",
  },
  {
    year: "2020 - 2021",
    icon: <FaSchool />,
    qualification: "Higher Secondary Certificate (12th)",
    institute: "Hindu Higher Secondary School",
    place: "Andipatti",
  },
  {
    year: "2018 - 2019",
    icon: <FaSchool />,
    qualification: "Secondary School Leaving Certificate",
    institute: "Hindu Higher Secondary School",
    place: "Andipatti",
  },
];
