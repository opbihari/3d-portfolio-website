import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JSON",
    image: "json.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "c.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.svg",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const FRONTEND_SKILL: Skill[] = [];

export const BACKEND_SKILL: Skill[] = [];

export const FULLSTACK_SKILL: Skill[] = [];

export const OTHER_SKILL: Skill[] = [];

export const PROJECTS = [
  {
    title: "Python AI Code Assistant",
    description: "A robust Flask-based backend API that integrates with multiple LLM providers (Google Gemini, OpenAI GPT-4, Anthropic Claude). It exposes endpoints to automatically generate Python code snippets from natural language prompts, explain code logic, and suggest refactoring improvements.",
    image: "/projects/project-1.png",
    link: "https://github.com/opbihari/python-portfolio/tree/main/Python_Function_Practice_With_AI",
    runUrl: "https://github.com/opbihari/python-portfolio/blob/main/Python_Function_Practice_With_AI/ai_sage_api.py",
  },
  {
    title: "DDoS Detector & Firewall Simulator",
    description: "A security-focused project that analyzes server logs to identify potential Distributed Denial of Service (DDoS) attacks. It processes raw text logs, counts IP requests, and flags suspicious activity.",
    image: "/projects/project-2.png",
    link: "https://github.com/opbihari/python-portfolio/tree/main/DDoS_Detector_Project",
    runOptions: [
      { name: "Run DDoS Detector", url: "https://github.com/opbihari/python-portfolio/blob/main/DDoS_Detector_Project/01_DDoS_Detector.py" },
      { name: "Run Firewall Server", url: "https://github.com/opbihari/python-portfolio/blob/main/DDoS_Detector_Project/02_Firewall_Server.py" },
      { name: "Run Log Generator", url: "https://github.com/opbihari/python-portfolio/blob/main/DDoS_Detector_Project/03_Log_Entry_Generator.py" }
    ],
  },
  {
    title: "IP Blacklist Checker",
    description: "An interactive security tool that checks IP addresses against a simulated threat intelligence database. It provides real-time alerts based on threat levels and previous blocks.",
    image: "/projects/project-3.png",
    link: "https://github.com/opbihari/python-portfolio/tree/main/IP_Blacklist_Checker_Project",
    runUrl: "https://github.com/opbihari/python-portfolio/tree/main/IP_Blacklist_Checker_Project",
  },
  {
    title: "Web Scraping Data Extractor",
    description: "A web scraper built using Python's requests and BeautifulSoup libraries. It connects to a target website, parses the HTML DOM to extract specific data elements, and saves the structured output into a CSV file.",
    image: "/projects/project-4.png",
    link: "https://github.com/opbihari/python-portfolio/tree/main/Web_Scraping_Project",
    runUrl: "https://github.com/opbihari/python-portfolio/tree/main/Web_Scraping_Project",
  },
  {
    title: "Contact Management System",
    description: "A fully functional CLI-based contact management system that allows users to add, view, and delete contacts with persistent data storage utilizing CSV files.",
    image: "/projects/project-5.png",
    link: "https://github.com/opbihari/python-portfolio/blob/main/Mini_Projects/Contact_Management_System.ipynb",
    runUrl: "https://colab.research.google.com/github/opbihari/python-portfolio/blob/main/Mini_Projects/Contact_Management_System.ipynb",
  },
  {
    title: "Online Book Store Inventory",
    description: "An interactive bookstore inventory management application. It handles tasks such as adding new books, tracking unique genres, updating information for existing books, and removing sold books.",
    image: "/projects/project-6.png",
    link: "https://github.com/opbihari/python-portfolio/blob/main/Mini_Projects/Online_Book_Store_System.ipynb",
    runUrl: "https://colab.research.google.com/github/opbihari/python-portfolio/blob/main/Mini_Projects/Online_Book_Store_System.ipynb",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com",
};
