import project1 from "../assets/flow.webp";
import project2 from "../assets/compiler.webp";
import project3 from "../assets/intelligence.jpg";
import project4 from "../assets/curr.jpg";
import project5 from "../assets/pass.jpg";
import project6 from "../assets/weather.jpg";
import pic1 from "../assets/pic1.jpeg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"


import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Other stuff", href: "#stories" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Dhairya Kaithwar",
  role: "Developer, Designer and Cinematographer",
  subheading:
    "With Experience in Coding and Photography I use my vision to develop and design websites and applications that are visually appealing and user-friendly.",
};

export const STORIES=[
  {
    id: 1,
    title: "Connection - A Silent Bond :",
    description:
    "Under the vast expanse of the sky, a young soul stretched out their hand, offering crumbs of bread to a curious seagull. The bird hovered hesitantly before landing gracefully, its wings frozen mid-motion in trust. In that moment, time stood still—a silent connection between human and nature. The world around them blurred, and all that mattered was the fragile bond they shared. As the seagull took off, carrying a morsel of food, the person smiled softly, realizing that sometimes, even the simplest acts of kindness can make the heart soar as high as the birds.",
    imgSrc: pic1,
  },
  {
    id: 2,
    title: "Scilence and Peace :",
    description:
    "The langur sat still, its eyes scanning the horizon as if deep in thought. Perched high above the bustling world, it seemed like a silent sage, guarding secrets of the forest. The soft rustle of leaves and the distant chirping of birds were its only companions. As a gentle breeze brushed through its fur, the langur pondered the simple joys of its life—leaping through trees, sharing fruit with its troop, and basking in the warm sunlight. In its stillness, there was a calm wisdom, as if it knew something the rest of the world had forgotten: that true peace lies in simply being.",
    imgSrc: pic2,
  },
  {
    id: 3,
    title: "The Independence :",
    description:
    "As the orange hues of the sunrise lit the sky, a flower bloomed, symbolizing the courage of those who fought for freedom. On the river, a boat glided through the calm waters, its journey reflecting the purity and truth embodied in peace. The green-tinted raindrops clinging to the glass spoke of growth, prosperity, and a renewed hope for the future. Together, the colors whispered the story of a nation’s pride—a tribute to the Indian flag and its enduring spirit of unity and independence.",
    imgSrc: pic3,
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: "WorkFlow",
    description:
      "App to streamline task management including different features for to handle tasks efficiently. Integrated a comprehensive analytics dashboard to provide actionable insights and enhance decision-making.",
    techStack: ["React", "Chart.js", "TailwindCSS"],
    imgSrc: project1,
    link: "https://dhairyakaithwar.github.io/workflow/",
  },
  {
    id: 2,
    title: "DevCompiler",
    description:
      "A real-time code editor and compiler for HTML, CSS, and JavaScript, eliminating the need for external tools. Designed with an intuitive interface that supports rapid prototyping and debugging for web developers.",
    techStack: ["React", "TailwindCSS"],
    imgSrc: project2,
    link: "https://dhairyakaithwar.github.io/DevCompiler/",
  },
  {
    id: 3,
    title: "Real Intelligence",
    description:
      "an advanced AI chatbot powered by the Gemini API, offering intelligent and context-aware responses. It supports multiple features like recent chats, new chat, cards suggestion, and personalized assistance. Designed with a sleek UI.",
    techStack: ["React", "TailwindCSS"],
    imgSrc: project3,
    link: "https://dhairyakaithwar.github.io/real-intelligence/",
  },
  {
    id: 4,
    title: "Currency Change",
    description:
      "Currency Change App with a user-friendly UI that supports real-time accurate conversion for all global currencies.",
    techStack: [ "React", "Tailwind CSS","Open API"],
    imgSrc: project4,
    link: "https://currchange.netlify.app/",
  },
  {
    id: 5,
    title: "Password Generator",
    description:
      "App that creates secure passwords of varying lengths with many different options. to include uppercase, lowercase, numbers, and special characters.",
    techStack: ["React", "TailwindCSS"],
    imgSrc: project5,
    link: "https://dhairyakaithwar.github.io/passwordGenerator/",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Weather App that provides real-time weather updates with dynamic background images reflecting current conditions.",
    techStack: ["React", "TailwindCSS", "Weather API"],
    imgSrc: project6,
    link: "https://dhairyakaithwar.github.io/weatherapp/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "SQL",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Node.js",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];



export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    yearRange: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description:
      "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
    techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    yearRange: "2020 - 2021",
    role: "Software Engineer",
    company: "PayPal",
    description:
      "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
    techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Mathematics",
    institution: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
    duration: "2020 - 2023",
    description:
      "Graduated with a strong foundation in pure and applied mathematics. Acquired problem-solving skills and analytical thinking, with exposure to computational techniques and mathematical modeling.",
  },
  {
    id: 2,
    degree: "Master of Computer Applications",
    institution: "University of Delhi",
    duration: "2023 - current",
    description:
      "Pursuing advanced training in computer applications and software development. Focused on programming, database management, and emerging technologies like artificial intelligence and machine learning.",
  }  
];


