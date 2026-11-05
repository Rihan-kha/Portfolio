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
  Valentine,
  Plateformer,
  FlappyBirdAi,
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
  {
    name: "Valentine's Day",
    description:
      "Made an interactive 3D Valentine's Day greeting card, allowing users to explore a virtual environment and experience a romantic atmosphere.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: Valentine,
    source_code_link: "https://rihan-kha.github.io/valentine/",
  },
  {
    name: "Plateformer game",
    description:
      "Designed and developed a 2D platform game inspired by classic titles such as Super Mario, using Python and Pygame. The project focuses on creating an engaging gameplay experience while demonstrating game development fundamentals, including player movement, level design, and interactive environments.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
    ],
    image: Plateformer,
    source_code_link: "https://github.com/Rihan-kha/Plateformer-game",
  },
  {
    name: "Flappy Bird",
    description:
      "Developed a Flappy Bird-inspired game using Python and Pygame, then applied machine learning to create an agent that can play the game autonomously. This project explores how an intelligent agent can interact with a game environment and make decisions based on gameplay.",
    tags: [
      {
        name: "Pygame",
        color: "blue-text-gradient",
      },
      {
        name: "Machine learning",
        color: "green-text-gradient",
      },
      {
        name: "neat",
        color: "pink-text-gradient",
      },
    ],
    image: FlappyBirdAi,
    source_code_link: "https://github.com/Rihan-kha/Flappy-bird-AI",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
