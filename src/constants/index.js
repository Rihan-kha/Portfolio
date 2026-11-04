import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  postgre,
  python,
  inamigo,
  MangoStore,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "postgre",
    icon: postgre,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "AI Data Scientist",
    company_name: "InAmigo Foundation",
    icon: inamigo,
    iconBg: "#383E56",
    date: "october 2026 - november 2026",
    points: [
      "using Data Science and Machine Learning techniques to analyze and interpret complex data sets, extracting valuable insights to inform business decisions.",
    ],
  },
  
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
];

const projects = [
  {
    name: "Mango Store",
    description:
      "Web-based platform to demonstrate frontend design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: MangoStore,
    source_code_link: "https://rihan-kha.github.io/Product-mango-juice-store/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
