import { Project, Experience, Skill } from "../../../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Tesla Tweet Sentiment Analyzer",
    description:
      "Hybrid ML sentiment analysis app combining VADER and Logistic Regression (TF-IDF), with an interactive React dashboard, file upload, visual analytics and Excel report export. Freelance client project.",
    technologies: ["React", "FastAPI", "Python", "NLTK", "scikit-learn", "pandas"],
  },
  {
    id: "2",
    title: "MHike - Cross-Platform Hiking Tracker",
    description:
      "Mobile app for an international client to log hikes, track statistics and manage observations, with full CRUD through a SQLite database service.",
    technologies: [".NET MAUI", "C#", "SQLite"],
  },
  {
    id: "3",
    title: "Online Voting System",
    description:
      "Full-stack voting solution with fingerprint authentication and admin dashboard.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Socket.io",
      "PostgreSQL",
      "Node.js",
      "Express",
    ],
    githubUrl: "https://github.com/brunocode-s/OVS-frontend.git",
    liveUrl: "https://ovs-frontend-drab.vercel.app/",
    imageUrl: "/assets/ovs.png",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tripplex Technologies",
    position: "Frontend Developer",
    duration: "Mar 2026 - Present",
    description: [
      "Building the frontend of Loftspace, including the business dashboard used by hosts and the guest-facing app.",
      "Implemented core dashboard features including menu management, order tracking, inventory, and billing/subscriptions.",
      "Building responsive, reusable UI components and integrating them with backend REST APIs.",
      "Integrated S3 presigned URL uploads and built data visualizations with Recharts.",
    ],
    technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Recharts"],
  },
  {
    id: "2",
    company: "DigitalFigures, Ibadan, Nigeria",
    position: "Frontend Developer Intern",
    duration: "Jan 2025 - Present",
    description: [
      "Contributing to frontend development of an education web application and other client-facing products.",
      "Collaborating with the product team on UI implementation, component architecture, and performance optimisation in an agile environment.",
    ],
    technologies: ["React", "TypeScript"],
  },
  {
    id: "3",
    company: "Self-employed, Remote",
    position: "Freelance Frontend Developer",
    duration: "2025",
    description: [
      "Designed and delivered multiple client websites and web applications, managing projects end-to-end from requirements to deployment.",
      "Built MHike, a cross-platform mobile hiking tracker, and the Tesla Tweet Sentiment Analyzer for international clients.",
      "Kept direct client communication, delivering projects on time and within scope.",
    ],
    technologies: ["React", "Python", ".NET MAUI"],
  },
];

export const education = {
  degree: "BSc Computer Science",
  school: "Federal University of Oye-Ekiti (FUOYE)",
  duration: "2022 - July 2026",
  details: [
    "CGPA: 3.79 / 5.0",
    "Coursework: Data Structures & Algorithms, Software Engineering, Web Development, Database Systems",
  ],
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    technologies: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "styled-components",
    ],
  },
  {
    category: "Backend & Data",
    technologies: ["Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "SQLite", ".NET MAUI"],
  },
  {
    category: "Tools & Other",
    technologies: ["Git", "GitHub", "VS Code", "Figma", "REST APIs", "Vercel"],
  },
];
