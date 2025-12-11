import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

import vain from "@/assets/projects/banners/vain.png";
import warm from "@/assets/projects/warm.jpg";
import egirls from "@/assets/projects/egirls.png";
import logo_256x256 from "@/assets/aelix/white/logo_256x256.png";
import i_logo_256x256 from "@/assets/aelix/dark/i_logo_256x256.png";

import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

export const DATA = {
  name: "Aelix",
  initials: "Aelix",
  url: "https://bhop.rest",
  description:
    "Building powerful and innovative Discord bots and web applications.",
  summary:
    "at [**Aelix LTD**](https://aelix.ltd), we build modern, high-performance software that blends design, innovation, and scalability. From advanced Discord bots to full-stack web applications, we focus on creating seamless, impactful user experiences.",
  avatarUrl: (theme: string) =>
    theme === "dark" ? logo_256x256.src : i_logo_256x256.src,
  skills: [
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
    { name: "Golang", icon: "go" },
    { name: "Rust", icon: "rust" },
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "TailwindCSS", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Vite", icon: "vite" },
    { name: "Zod", icon: "zod" },
    { name: "Astro", icon: "astro" },
    { name: "Svelte", icon: "svelte" },
    { name: "Webpack", icon: "webpack" },
    { name: "Bun", icon: "bun" },
    { name: "Elysia", icon: "express" },
    { name: "VSCode", icon: "vscode" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "vercel" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "AWS", icon: "aws" },
    { name: "Cloudflare", icon: "cloudflare" },
    { name: "Redis", icon: "redis" },
    { name: "Kubernetes", icon: "kubernetes" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aelix-LLC",
        icon: FaGithub,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.gg/aelix",
        icon: FaDiscord,
      },
    },
  },

  work: [],
  projects: [
    {
      title: "Vain",
      href: "https://vain.bot",
      active: true,
      description:
        "A competitive yet simple option when it comes to Discord Bots.",
      technologies: [
        "Python",
        "discord.py",
        "PostgreSQL",
        "Redis",
        "LiteStar",
        "NextJS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://vain.bot",
          icon: <IoIosLink className="size-3" />,
        },
      ],
      image: vain,
      video: "",
    },
    {
      title: "e-girls",
      href: "https://e-girls.host",
      active: true,
      description: "A image host that's simple, yet elegant to use.",
      technologies: [
        "NextJS",
        "Typescript",
        "PostgreSQL",
        "R2",
        "Bun",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://e-girls.host",
          icon: <IoIosLink className="size-3" />,
        },
      ],
      image: egirls,
      video: "",
    },
    {
      title: "warm",
      href: "https://warm.lat",
      active: true,
      description: "A bot that has extensive yet half broken features.",
      technologies: ["Python", "discord.py", "PostgreSQL", "Redis", "R2"],
      links: [
        {
          type: "Website",
          href: "https://warm.lat",
          icon: <IoIosLink className="size-3" />,
        },
      ],
      image: warm,
      video: "",
    },
  ],
} as const;
