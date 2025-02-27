import animalshelter from "@/public/animalshelter.png";
import spacediscovery from "@/public/spacediscovery.png";
import geodashworld from "@/public/geodashworld.png";
import happybeats from "@/public/happybeats.png";

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
    title: "The Animal Shelter App",
    description:
      "A platform for animal shelters that allows users to browse and adopt pets.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
    imageUrl: animalshelter,
    projectLink: "https://v53-tier3-team-40.onrender.com"
  },
  {
    title: "The Space Discovery App",
    description:
      "An interactive platform that allows users to explore space through NASA's curated images, live ISS tracking, Mars Rover photos, and educational game activities.",
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
  {
    title: "Happy Beats",
    description:
      "A music player app that plays random upbeat jazz music.",
    tags: ["React", "JavaScript"],
    imageUrl: happybeats,
    projectLink: ""
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
] as const;
