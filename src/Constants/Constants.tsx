import {
  FaEnvelope,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaSchool,
} from "react-icons/fa";
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

const githubUrl = "https://github.com/Vicky2122004";
const linkedInUrl = "https://www.linkedin.com/in/vignesh-t-470a63257/";
const instagramUrl = "https://www.instagram.com/ruthuraj_vicky_21/";

export const ContactInfo = [
  {
    id: 1,
    type: "email",
    icon: <FaEnvelope className="text-pink-400 text-xl" />,
    title: "Email",
    value: "thangavelvicky21@gmail.com",
    color: "from-pink-500/20 to-purple-600/20",
    borderColor: "border-pink-500/20",
    action: `mailto:thangavelvicky21@gmail.com`,
  },
  {
    id: 2,
    type: "phone",
    icon: <FaPhone className="text-purple-400 text-xl" />,
    title: "Phone",
    value: "+91 8754653263",
    color: "from-purple-500/20 to-blue-600/20",
    borderColor: "border-purple-500/20",
    action: `tel:8754653263`,
  },
  {
    id: 3,
    type: "location",
    icon: <FaMapMarkerAlt className="text-blue-400 text-xl" />,
    title: "Location",
    value: "13-4-17, North Street, Andipatti, Theni",
    color: "from-blue-500/20 to-cyan-600/20",
    borderColor: "border-blue-500/20",
    action: null,
  },
  {
    id: 4,
    type: "social",
    icon: null,
    title: "Social Profiles",
    value: null,
    color: "from-indigo-500/20 to-violet-600/20",
    borderColor: "border-indigo-500/20",
    action: null,
  },
];

export const SocialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="text-xl" />,
    url: githubUrl,
    color: "hover:text-white",
    bg: "from-gray-800 to-gray-900",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-xl" />,
    url: linkedInUrl,
    color: "hover:text-blue-400",
    bg: "from-blue-800/30 to-blue-900/30",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-xl" />,
    url: instagramUrl,
    color: "hover:text-pink-500",
    bg: "from-pink-800/30 to-rose-900/30",
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

export const ProjectSections = ["All", "React", "Redux", "Node", "Remotion"];

export const ProjectDetailsData = [
  {
    id: "0",
    title: "Promo",
    short_desc:
      "An AI-powered video automation platform for instant professional marketing videos.",
    long_desc:
      "Promo is an advanced video creation platform built with React, Redux, Remotion, Node, Express, and Postgres. It allows users to choose from customizable templates, fill in details, and instantly generate professional videos that are directly uploaded to YouTube—no manual steps required. The platform offers powerful analytics to track created videos, audio assets, and downloads. With integrated AI assistance, Promo can automatically generate optimized titles, descriptions, and tags, making video creation smarter and faster than ever.",
    images: [
      "/assets/projectImages/promo/home.png",
      "/assets/projectImages/promo/profile.png",
      "/assets/projectImages/promo/videos.png",
    ],
    category: "Video Automation Platform",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "Bubblewrap",
      "Typescript",
      "TailwindCSS",
      "TWA",
    ],
    features: [
      "Create professional marketing videos and posters instantly",
      "Wide range of customizable templates for different industries",
      "AI-powered automation to personalize content quickly",
      "Easy-to-use editor with text, image, and branding options",
      "One-click export and sharing across social media platforms",
    ],
    githubUrl: "https://github.com/yaashschool/promo.git",
    liveUrl: "https://promo.yaash.co.in/",
    playStoreUrl: null,
    year: 2025,
  },
  {
    id: "1",
    title: "MakeMePro",
    short_desc:
      "AI-powered platform to transform selfies into professional styled images.",
    long_desc:
      "MakeMePro is a professional AI-powered image generation platform that transforms user selfies into stunning images based on selected themes and styles. Users can easily choose a style or theme, and the platform intelligently generates high-quality, visually appealing images. With advanced AI algorithms, MakeMePro ensures each image looks professional while maintaining the original facial features. It’s designed for users who want quick, creative, and personalized professional images effortlessly.",
    images: [
      "/assets/projectImages/makeMePro/home.png",
      "/assets/projectImages/makeMePro/library.png",
      "/assets/projectImages/makeMePro/popup.png",
    ],
    category: "Image Generation",
    techStack: [
      "React",
      "TypeScript",
      "Redux",
      "Firebase",
      "TailwindCSS",
      "Bubblewrap",
      "TWA",
    ],
    features: [
      "AI-powered selfie to professional image transformation",
      "Wide range of styles and themes to choose from",
      "High-resolution image generation with facial feature preservation",
      "Instant previews and multiple variations per style",
      "Easy export and social media sharing",
    ],
    githubUrl: "https://github.com/yaashschool/super_headshot_clone.git",
    liveUrl: null,
    playStoreUrl: null,
    year: 2025,
  },
  // {
  //   id: "2",
  //   title: "Ulloor Santhai",
  //   short_desc:
  //     "A local raw meat shopping app with simple ordering and status updates.",
  //   long_desc:
  //     "Ulloor Santhai is a local shopping application built to deliver fresh raw meat directly to nearby customers. The platform connects local sellers with buyers, making it easy to browse products, place orders, and receive delivery updates. Designed with simplicity in mind, Lo-Cart supports Cash on Delivery and provides users with an order history for quick reordering. It ensures a user-friendly shopping experience for communities that prefer local and fresh meat shopping.",
  //   images: [
  //     "/assets/projectImages/loCartHome.png",
  //     "/assets/projectImages/loCartProduct.png",
  //     "/assets/projectImages/loCartOrder.png",
  //   ],
  //   category: "E-Commerce",
  //   techStack: ["React", "TypeScript", "ContextAPI", "Firebase", "TailwindCSS"],
  //   features: [
  //     "Local raw meat product listings",
  //     "Easy order placement with Cash on Delivery",
  //     "Order status updates",
  //     "Customer order history",
  //     "Simple and user-friendly interface",
  //   ],
  //   githubUrl: "https://github.com/yaashschool/lo-cart.git",
  //   liveUrl: "https://shop.yaash.co.in",
  //   playStoreUrl: null,
  //   year: 2025,
  // },
  {
    id: "3",
    title: "Ammayappan Angadi",
    short_desc:
      "A grocery shopping platform available as a web app and Android TWA.",
    long_desc:
      "Ammayappan Angadi is a grocery e-commerce platform that brings the local store online. Customers can easily browse grocery products, place orders with Cash on Delivery, and track their order status. The app is designed as a responsive web-first platform and later converted into a Trusted Web Activity (TWA) for Android, making it directly accessible from the Google Play Store. With support for customer profiles, order history, and a smooth shopping flow, Ammayappan Angadi bridges the gap between traditional shops and modern online shopping.",
    images: [
      "/assets/projectImages/ammayappan/home.png",
      "/assets/projectImages/ammayappan/address.png",
      "/assets/projectImages/ammayappan/order_status.png",
    ],
    category: "Grocery",
    techStack: [
      "React",
      "ContextAPI",
      "Firebase",
      "TailwindCSS",
      "TWA",
      "Bubblewrap",
    ],
    features: [
      "Wide range of grocery product listings",
      "Cash on Delivery order system",
      "Order status updates",
      "Customer profile and order history",
      "Trusted Web Activity (TWA) Play Store deployment",
    ],
    githubUrl: "https://github.com/yaashschool/lo-cart.git",
    liveUrl: "https://ammayappan.org",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ammayappan.angadi",
    year: 2025,
  },
];
