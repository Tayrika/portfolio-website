import animalshelter from "@/public/animalshelter.png";
import spacediscovery from "@/public/spacediscovery.png";
import geodashworld from "@/public/geodashworld.png";
import animalworld from "@/public/animalworld.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const projectsData = [
  {
    title: "Animal World App",
    description:
      "A website for children to learn about animals through games and quizzes.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    imageUrl: animalworld,
    projectLink: "https://v54-tier3-team-36.netlify.app/"
  },
  {
    title: "Animal Shelter App",
    description:
      "A platform for animal shelters that allows users to browse and adopt pets.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
    imageUrl: animalshelter,
    projectLink: "https://v53-tier3-team-40.onrender.com"
  },
  {
    title: "Space Discovery App",
    description:
      "A website to explore space through NASA's curated images, live ISS tracking, Mars Rover photos, and educational game activities.",
    tags: ["React", "Tailwind CSS", "NASA API"],
    imageUrl: spacediscovery,
    projectLink: "https://v52-tier3-team-40.onrender.com"
  },
  {
    title: "GeoDash World",
    description:
      "An interactive geographical area learning app that enables users to learn the neighborhoods, streets, and landmarks in major cities through creative game activities.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
    imageUrl: geodashworld,
    projectLink: "https://geodash-world-client.onrender.com"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "Daisy UI",
  "Git",
  "Python",
  "Framer Motion",
  "Figma",
  "UI/UX Design",
  ".NET",
  "C#",
] as const;
