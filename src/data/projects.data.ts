export interface ProjectData {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  images: string[];
  abstract: string;
  objective: string;
  solution: string;
  techStack: string[];
  toolsAndLLMs: string[];
  collaborators: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    title: "Skadoosh",
    description:
      "A Reddit-style scam awareness and reporting platform crowdsourcing fraud alerts across web and mobile.",
    link: "#",
    githubLink: "https://github.com/lokeshks-rookie/Skadoosh",
    images: [
      "/project-images/Skadoosh1.png",
      "/project-images/Skadoosh2.png",
      "/project-images/Skadoosh3.png",
      "/project-images/Skadoosh4.png",
      "/project-images/Skadoosh5.png",
      "/project-images/Skadoosh6.png",
    ],
    abstract:
      "Skadoosh (formerly ScamAlert) is a Reddit-inspired, multi-user platform for scam awareness and reporting. It gives users a community-driven space to post, discuss, and geographically map scam incidents, delivered as both a web application and a companion mobile app.",
    objective:
      "To provide an accessible, community-driven channel where people can report scams, warn others in near real time, and visualize scam activity by location — reducing reliance on scattered, informal warning channels.",
    solution:
      "A Reddit-style content model (posts, TipTap rich-text creation, threaded comments with a collapse-line reply pattern, and a share modal) combined with a Leaflet + OpenStreetMap map layer for geographic incident visibility, using the Google Places API for location search and autocomplete. The platform is built for dual-platform delivery — a Next.js web app and a Flutter mobile app — backed by a self-hosted MongoDB instance.",
    techStack: [
      "Frontend: Next.js",
      "Backend: Express.js, Node.js",
      "Database: MongoDB (self-hosted on AWS EC2 t2.micro, 30 GB EBS SSD)",
      "Mobile: Flutter",
      "Auth: Auth.js",
      "Maps: Leaflet + OpenStreetMap, Google Places API",
      "Media: Cloudinary",
      "Hosting: Vercel (frontend), Render (backend)",
    ],
    toolsAndLLMs: [
      "VS Code",
      "Antigravity",
      "Claude",
    ],
    collaborators: ["Aakash kumar T.K.S", "Madeswaran J.V ."],
  },
  {
    title: "NOVA",
    description:
      "A campus lost-and-found platform, MERN-built, that placed first in a college competition and is actively used by around 100 people.",
    link: "https://nova-lost-and-found.vercel.app",
    githubLink: "https://github.com/lokeshks-rookie/NOVA",
    images: [
      "/project-images/nova1.png",
      "/project-images/nova2.png",
      "/project-images/nova3.png",
      "/project-images/nova4.png",
      "/project-images/nova5.png",
      "/project-images/nova6.png",
      "/project-images/nova7.png",
    ],
    abstract:
      "NOVA is a campus lost-and-found web application built to connect people who lose items with those who find them. It won first place in a college-level competition and is in active use by approximately 100 people on campus.",
    objective:
      "To replace informal, ad-hoc lost-and-found channels on campus with a centralized, searchable system for reporting and recovering lost items.",
    solution:
      "A MERN-stack web application, scaffolded with Vercel v0 and built with Antigravity, that lets students post and search lost and found item listings, with Google Gemini API integration supporting the app's AI-driven features. Deployed for live campus use.",
    techStack: [
      "MERN stack (MongoDB, Express.js, React, Node.js) with Vite",
      "Google Gemini API",
      "Hosting: Vercel (frontend), Render (backend)",
    ],
    toolsAndLLMs: [
      "VS Code",
      "Antigravity",
      "Claude",
      "Vercel v0",
    ],
    collaborators: ["Karthick S"],
  },
  {
    title: "Healix",
    description:
      "An AI-driven healthcare chatbot connecting patients with care providers through guided, model-backed support.",
    link: "https://healix-weld.vercel.app",
    githubLink: "https://github.com/Madeswaranjv/Healix",
    images: [
      "/project-images/Healix1.png",
      "/project-images/Healix2.png",
      "/project-images/Healix3.png",
      "/project-images/Healix4.png",
      "/project-images/Healix5.png",
      "/project-images/Healix6.png",
      "/project-images/Healix7.png",
    ],
    abstract:
      "Healix is a healthcare-domain AI chatbot being developed as a competition entry.",
    objective:
      "To build a clinically-oriented conversational assistant with a polished, familiar chat interface, laying the frontend groundwork before backend logic is implemented.",
    solution:
      "A React, Vite, and TailwindCSS frontend, built solo using Antigravity, with a UI/UX inspired by Claude's own interface — a left sidebar (options menu, search, new-chat action, hover-expandable chats list) alongside a main chat canvas. A backend collaborator will join at a later stage to implement the underlying logic. Two visual directions are being explored: a light clinical-teal theme and a dark, monospace-heavy theme inspired by the \"Meridian\" observability-tool aesthetic.",
    techStack: [
      "React",
      "Vite",
      "TailwindCSS",
    ],
    toolsAndLLMs: [
      "VS Code",
      "Antigravity",
      "Claude",
    ],
    collaborators: ["Madeswaran J.V"],
  },
  {
    title: "LAURA-ANIDS",
    description:
      "An agentic network intrusion detection system giving SOC-less startups real-time, explainable threat detection.",
    link: "#",
    githubLink: "https://github.com/lokeshks-rookie/LAURA-ANIDS",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=500&fit=crop",
    ],
    abstract:
      "LAURA — formally ANIDS (Agentic Network Intrusion Detection System) — is a final year project building an agentic network intrusion detection system for Windows, aimed at small-scale startups and businesses that cannot afford a dedicated SOC team.",
    objective:
      "To provide affordable, autonomous network intrusion detection for smaller organizations that lack the resources for a dedicated security operations team.",
    solution:
      "Packet capture via dpkt and pypcap feeds a LightGBM classifier, with SHAP TreeExplainer providing explainability on flagged traffic. An agentic ReAct loop, powered by Llama 3.3 8B (Q4) via Ollama, reasons over the classifier's output, with DuckDB for storage and a Tauri overlay enabling human-in-the-loop remediation decisions. Guided by Dr. C. Santhiya. Trained on the BCCC-CIC-IDS-2017 (2024) dataset.",
    techStack: [
      "Packet capture: dpkt, pypcap",
      "ML classifier: LightGBM",
      "Explainability: SHAP TreeExplainer",
      "Agentic reasoning: Llama 3.3 8B (Q4) via Ollama, ReAct loop",
      "Storage: DuckDB",
      "Overlay/UI: Tauri",
      "Dataset: BCCC-CIC-IDS-2017 (2024)",
    ],
    toolsAndLLMs: [
      "VS Code",
      "Antigravity",
      "Claude",
      "GPT (image generation for SRS diagrams)",
    ],
    collaborators: ["VidyaNarayan S.M", "Aakash kumar T.K.S", "Prabanjan A", "Akchaya B.N", "MegaSri ."],
  },
  {
    title: "Qdemy",
    description:
      "AI-powered platform for learning quantum computing through an interactive circuit builder, real quantum simulation, and hands-on concept modules with AI tutoring. Built for Smart India Hackathon.",
    link: "#",
    githubLink: "https://github.com/lokeshks-rookie/SIH",
    images: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    ],
    abstract:
      "Qdemy is an AI-based, interactive quantum algorithm learning platform built for the Smart India Hackathon (Problem Statement ID 26140, Organization: Egreen Quanta, Category: Software, Theme: Smart Education). It replaces static, theory-heavy quantum computing education with hands-on circuit design, real-time simulation, and AI-guided tutoring in a single integrated web app.",
    objective:
      "To make abstract quantum computing concepts (qubits, superposition, entanglement, algorithms) learnable through direct interaction rather than passive theory, while working around limited access to real quantum hardware.",
    solution:
      "A full-scope platform combining a drag-and-drop and code-based circuit builder (React Flow), real-time execution against a Qiskit Aer simulation backend (with PennyLane, Cirq, and qBraid as stretch-goal backends), and an AI tutor grounded on a 17-concept content library covering foundational phenomena and quantum algorithms. Visualizations include Bloch spheres (react-three-fiber), measurement probability charts, and state-vector displays, layered with assessment modules, coding challenges, progress tracking, and instructor dashboards. Built in a single focused day using Google Antigravity for agentic, task-level development.",
    techStack: [
      "Frontend: React (Vite), TailwindCSS",
      "Circuit builder UI: React Flow",
      "Charts: Recharts / Chart.js",
      "3D: react-three-fiber (Three.js)",
      "Main backend: Node.js, Express",
      "Simulation microservice: Python, FastAPI (Qiskit Aer)",
      "Database: MongoDB Atlas",
      "Auth: Firebase Auth",
      "Hosting: Vercel (frontend), Render/Railway (Express API and FastAPI sim service), MongoDB Atlas (DB, free tier)",
    ],
    toolsAndLLMs: [
      "VS Code",
      "Antigravity",
      "Claude",
      "Gemini API",
    ],
    collaborators: [],
  },
  {
    title: "Smart Queue System",
    description:
      "An intelligent queue management system that streamlines customer flow, reduces waiting time, and provides real-time queue status and updates.",
    link: "#",
    githubLink: "https://github.com/lokeshks-rookie/Smart-Queue-System",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    ],
    abstract:
      "The Smart Queue Management System is a digital solution designed to simplify and modernize the traditional queueing process. It lets users join a queue digitally, view their current queue position, and monitor their waiting time without standing physically in line, while giving administrators an efficient way to manage queues and service flow.",
    objective:
      "To provide a digital alternative to physical queues — letting users join and track queues remotely, view real-time position and waiting-time information, and help administrators manage customers and service flow efficiently — reducing overcrowding and improving operational efficiency through a simple, intuitive interface.",
    solution:
      "A mobile-based queue management application connecting users to a centralized queue system. Users select a service and join its queue, then track their position and waiting status via a live timer. On the administrative side, authorized personnel monitor the queue, manage service progression, and update customer status. The Flutter frontend communicates with the backend through REST APIs, storing and retrieving queue information dynamically.",
    techStack: [
      "Frontend: Flutter (Dart)",
      "Backend: API layer handling application logic, authentication, and queue operations",
      "Database: stores users, queue entries, service information, and queue status",
      "Communication: REST APIs, JSON",
    ],
    toolsAndLLMs: [
      "VS Code / Android Studio",
      "Antigravity",
      "Claude",
      "Git & GitHub",
      "Postman",
      "Android Emulator / physical device",
      "ChatGPT (AI-assisted development and documentation — code generation/refinement, debugging, app logic design, UI/UX ideas, documentation)",
    ],
    collaborators: ["Aakash kumar T.K.S"],
  },
];
