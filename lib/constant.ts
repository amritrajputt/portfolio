import { DiRedis } from "react-icons/di";
import {
  IconBrandCss3,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTypescript,
} from "@tabler/icons-react";

import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiGit,
  SiSocketdotio,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiTypescript,
  SiPostman,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHashnode,
} from "react-icons/si";
import { FaJava, FaHtml5, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  Home04Icon,
  VisualStudioCodeIcon,
} from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react";

export const skills = [
  {
    title: "Javascript",
    icon: SiJavascript,
  },
  {
    title: "Typescript",
    icon: SiTypescript,
  },
  {
    title: "Java",
    icon: FaJava,
  },
  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
  },
  {
    title: "Express.js",
    icon: SiExpress,
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    title: "Redis",
    icon: DiRedis,
  },
  {
    title: "Docker",
    icon: SiDocker,
  },
  {
    title: "WebSockets",
    icon: SiSocketdotio,
  },
  {
    title: "Git",
    icon: SiGit,
  },
  {
    title: "HTML",
    icon: FaHtml5,
  },
  {
    title: "CSS",
    icon: IconBrandCss3,
  },
  {
    title: "Postman",
    icon: SiPostman,
  },
];

export const navLinks: navLinksType[] = [
  {
    name: "Home",
    icon: Home04Icon,
    icon2: Home04Icon,
    link: "/",
    value: "/",
  },
  {
    name: "Project",
    icon: VisualStudioCodeIcon,
    icon2: VisualStudioCodeIcon,
    link: "/projects",
    value: "/projects",
  },
];

export interface navLinksType {
  name: string;
  icon: IconSvgElement;
  icon2: IconSvgElement;
  link: string;
  value: tabType;
}
export type tabType = "/" | "/projects";

export const allProjects = [
  {
    name: "PRRabbit",
    description:
      "An autonomous GitHub App that reviews pull requests using Pinecone-powered RAG and Inngest for async orchestration, posting contextual inline feedback directly on code diffs.",
    deployed: "pr-rabbit-nu.vercel.app",
    github: "https://github.com/amritrajputt/PRRabbit",
    tech: [IconBrandNextjs, IconBrandTypescript, IconBrandNodejs,SiPostgresql, SiDocker],
    image: "/prrabbit.png",
    category: "Product",
  },
  {
    name: "AuthCraft",
    description:
      "A spec-compliant OpenID Connect (OIDC) identity provider built with Node.js and PostgreSQL, featuring Authorization Code Flow, PKCE, RS256 JWT signing, and token rotation.",
    deployed: "authcraft-oidc.onrender.com/login",
    github: "https://github.com/amritrajputt/OIDC-provider",
    tech: [IconBrandNodejs, SiExpress, SiPostgresql, SiDocker],
    image: "/authcraft.png",
    category: "Product",
  },
  {
    name: "Muzzix",
    description:
      "A real-time collaborative music queue room with NTP-style synchronized playback, Redis Sorted Sets for sub-millisecond voting, and live WebSocket broadcasts.",
    deployed: "muzzix.vercel.app",
    github:
      "https://github.com/amritrajputt/Muzzix---Collaborative-Music-Queue-App",
    tech: [IconBrandNextjs, IconBrandTypescript, DiRedis, SiSocketdotio],
    image: "/muzzix.png",
    category: "Product",
  },
  {
    name: "Resumio",
    description:
      "An AI resume builder that transforms structured prompts into pixel-perfect LaTeX PDFs compiled in sandboxed Docker containers on AWS EC2, delivering 15-second generation.",
    deployed: "resumiobyamrit.vercel.app",
    github: "https://github.com/amritrajputt/AI-Resume-Builder",
    tech: [IconBrandNextjs, IconBrandTypescript, SiDocker, IconBrandNodejs],
    image: "/resumio.png",
    category: "Product",
  },
  {
    name: "Prepr AI",
    description:
      "A voice-first AI mock interview agent powered by OpenAI's Realtime Voice API and WebRTC, dynamically tailoring technical questions to your resume and target job role.",
    deployed: "prepr-ai-seven.vercel.app",
    github: "https://github.com/amritrajputt/prepr",
    tech: [IconBrandNextjs, IconBrandTypescript, SiSocketdotio, IconBrandNodejs],
    image: "/prepr.png",
    category: "Product",
  },
];

export const experienceData = [
  {
    company: "Pinnacle Labs",
    role: "Web Development Intern",
    timeframe: "June 2026 - July 2026",
    description:
      "Engineered an end-to-end event management platform using Next.js and TypeScript, empowering organizers to create, manage, and publish events seamlessly. Solved critical booking race conditions by implementing PostgreSQL row-level locking and idempotent API architecture to guarantee zero double-bookings under concurrent traffic. Integrated Drizzle ORM for atomic transactional workflows and automated background email notifications for invitations and reminders.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "REST APIs"],
  },
];

export const socialsData = [
  {
    link: "https://github.com/amritrajputt",
    icon: FaGithub,
  },
  {
    link: "https://www.linkedin.com/in/amritxrajput/",
    icon: FaLinkedinIn,
  },
  {
    link: "https://leetcode.com/u/amrit_2004/",
    icon: SiLeetcode,
  },
  {
    link: "https://www.geeksforgeeks.org/profile/amrit_xrajput",
    icon: SiGeeksforgeeks,
  },
  {
    link: "https://hashnode.com/@amritxrajput",
    icon: SiHashnode,
  },
];
