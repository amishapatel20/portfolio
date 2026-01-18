"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import {
  Moon,
  Sun,
  Briefcase,
  Sparkles,
  Code,
  Github,
  ExternalLink,
  Download,
  Mail,
  Linkedin,
  Twitter,
  Brain,
} from "lucide-react";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaJava, FaMicrosoft, FaCode } from "react-icons/fa";
import {
  SiGooglescholar,
  SiResearchgate,
  SiPython,
  SiJavascript,
  SiReact,
  SiTensorflow,
  SiPytorch,
  SiCplusplus,
  SiR,
  SiMysql,
  SiKeras,
  SiScikitlearn,
  SiNextdotjs,
  SiFastapi,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiOpencv,
  SiMongodb,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub as SiGithubIcon,
  SiJupyter,
  SiLinux,
} from "react-icons/si";

const HERO_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6 },
  }),
};

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const techStack = [
  // Programming Languages
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "R", icon: SiR, color: "#276DC3" },
  { name: "Structured Query Language", icon: SiMysql, color: "#4479A1" },

  // ML / AI Frameworks
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "Keras", icon: SiKeras, color: "#D00000" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },

  // Web & APIs
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Flask", icon: SiFlask, color: "#000000" },

  // Data Science & Visualisation
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Plotly", icon: SiPlotly, color: "#11557c" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },

  // Databases
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },

  // Cloud & DevOps
  { name: "Amazon Web Services", icon: FaAws, color: "#FF9900" },
  { name: "Google Cloud Platform", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Microsoft Azure", icon: FaMicrosoft, color: "#0078D4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },

  // Tools
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithubIcon, color: "#181717" },
  { name: "Visual Studio Code", icon: FaCode, color: "#007ACC" },
  { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

const researchInterests = [
  "Core machine learning and deep learning: representation learning, optimization, generalization",
  "Applied ML across domains – vision, time-series, tabular, and multimodal data",
  "Generative and probabilistic models that can reason under uncertainty",
  "ML systems: data pipelines, evaluation, monitoring, and deployment in the real world",
  "Responsible and interpretable AI: robustness, failure modes, and human-centered evaluation",
  "Search, retrieval, and recommendation systems powered by modern embeddings and RAG",
];

const skillGroups = [
  {
    title: "ML & Statistical Modelling",
    items: [
      "Supervised & unsupervised learning",
      "Deep learning (PyTorch)",
      "Time-series & sequence models",
      "Evaluation & error analysis",
    ],
  },
  {
    title: "Data & Systems",
    items: [
      "Python, C/C++",
      "Data structures & algorithms",
      "SQL & analytical queries",
      "ETL over geospatial & sensor data",
    ],
  },
  {
    title: "Serving & Tooling",
    items: [
      "FastAPI & REST services",
      "Docker & deployment basics",
      "Experiment tracking",
      "Dashboards & storytelling",
    ],
  },
];

const researchProjects = [
  {
    title: "Spatiotemporal Wildfire Early Warning (Agnirhodhak)",
    role: "Lead ML developer",
    description:
      "Forecast wildfire risk over satellite and sensor data to surface high-risk regions days in advance.",
    tech: ["Python", "U-Net", "Google Earth Engine", "Geospatial ML"],
    github: "https://github.com/amishapatel20/GeoML-Forest-Fire-Predictor-Agnirhodhak-",
  },
  {
    title: "SafeRoadAI – Road-safety Analytics",
    role: "ML engineer",
    description:
      "Rank high-risk road segments from traffic and crash data to guide targeted, data-driven interventions.",
    tech: ["Time-series", "Risk modelling", "Dashboards"],
    github: "https://github.com/amishapatel20/SafeRoadAI",
  },
  {
    title: "AuscultoML – Lung Sound Disease Classification",
    role: "Research project lead",
    description:
      "End-to-end audio ML pipeline that classifies lung sound recordings into disease categories for decision support.",
    tech: ["Audio ML", "Librosa", "CNNs", "FastAPI"],
    github:
      "https://github.com/amishapatel20/AuscultoML-Lung-Sound-Disease-Classification",
  },
  {
    title: "Amazon ML Challenge – Smart Product Pricing",
    role: "Top 300 / 82,787 participants",
    description:
      "Built and tuned ranking models for price recommendations as part of the Amazon ML Challenge 2024.",
    tech: ["Recommenders", "Ranking", "Competition"],
    github: "https://github.com/amishapatel20/Amazon_ml_Project",
  },
];

const publicationsAndAchievements = [
  {
    title: "Amazon ML Challenge 2025",
    detail: "Top 300 out of 82,787 participants for price recommendation models.",
  },
  {
    title: "BookingJini March Cohort Hackathon Winner (2025)",
    detail: "Won cohort hackathon for building data-driven product features.",
  },
  {
    title: "Google Developer Groups (GDG) On Campus Recognition (2025)",
    detail: "Recognized for contributions to ML workshops and student developer community.",
  },
];

const experience = [
  {
    title: "Summer Research Intern (ML)",
    org: "Wireless Sensor Networks Lab, NIT Rourkela",
    period: "May 2025 – Jul 2025",
    location: "Rourkela, India",
    description:
      "Built U-Net based pipelines, geospatial ETL, and inference services over large-scale satellite data.",
  },
];

const education = [
  {
    title: "Integrated MSc in Mathematics",
    org: "National Institute of Technology Rourkela",
    period: "2022 – 2027 (Expected)",
    location: "Rourkela, Odisha",
  },
];

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

const GITHUB_USERNAME = "amishapatel20";

export default function DevfolioPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [navHidden, setNavHidden] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    (async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        offset: 120,
        once: true,
      });
    })();
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
        );
        if (!response.ok) {
          throw new Error("Unable to load GitHub repositories");
        }
        const data: GitHubRepo[] = await response.json();
        setRepos(data);
      } catch (error) {
        setRepoError("GitHub projects could not be loaded right now.");
      } finally {
        setIsLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      setNavHidden(scrollingDown && currentY > 80);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const subject = encodeURIComponent("Research internship inquiry");
    const body = encodeURIComponent(
      `Hi Amisha,\n\nMy name is ${name || "[Your name]"}.\n\n${message || "I am interested in your work and would like to connect about potential research opportunities."}\n\nYou can reach me back at ${email || "[your email]"}.`,
    );

    window.location.href = `mailto:amishanitr23july@gmail.com?subject=${subject}&body=${body}`;
  };

  const isDark = theme === "dark";

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] text-slate-100"
          : "min-h-screen bg-slate-50 text-slate-900"
      }
    >
      <header
        className={
          "sticky top-0 z-40 border-b backdrop-blur transition-transform duration-300 " +
          (isDark
            ? "border-white/10 bg-slate-950/70"
            : "border-slate-200 bg-white/80") +
          (navHidden ? " -translate-y-full" : " translate-y-0")
        }
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div
            className={
              "text-sm font-semibold tracking-tight " +
              (isDark ? "text-slate-100" : "text-slate-900")
            }
          >
            Amisha Patel
          </div>
          <div className="hidden items-center gap-6 text-xs font-medium sm:flex">
            <a
              href="#about"
              className={
                isDark
                  ? "text-slate-300 hover:text-[#ff8fb1]"
                  : "text-slate-600 hover:text-[#55198b]"
              }
            >
              About
            </a>
            <a
              href="#research"
              className={
                isDark
                  ? "text-slate-300 hover:text-[#ff8fb1]"
                  : "text-slate-600 hover:text-[#55198b]"
              }
            >
              Research
            </a>
            <a
              href="#skills"
              className={
                isDark
                  ? "text-slate-300 hover:text-[#ff8fb1]"
                  : "text-slate-600 hover:text-[#55198b]"
              }
            >
              Stack
            </a>
            <a
              href="#projects"
              className={
                isDark
                  ? "text-slate-300 hover:text-[#ff8fb1]"
                  : "text-slate-600 hover:text-[#55198b]"
              }
            >
              Projects
            </a>
            <a
              href="#publications"
              className={
                isDark
                  ? "text-slate-300 hover:text-[#ff8fb1]"
                  : "text-slate-600 hover:text-[#55198b]"
              }
            >
              Publications
            </a>
            <a
              href="#experience"
              className={
                isDark
                  ? "text-slate-300 hover:text-[#ff8fb1]"
                  : "text-slate-600 hover:text-[#55198b]"
              }
            >
              Experience
            </a>
            <a
              href="#contact"
              className={
                isDark
                  ? "text-slate-300 hover:text-[#ff8fb1]"
                  : "text-slate-600 hover:text-[#55198b]"
              }
            >
              Contact
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-400/60 bg-white/10 text-xs text-slate-100 shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-md"
              aria-label="Toggle theme"
            >
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: isDark ? 0 : 360 }}
                transition={{ duration: 0.4 }}
              >
                {isDark ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4 text-yellow-500" />
                )}
              </motion.span>
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-0 pb-20 pt-0 sm:px-0 sm:pt-0 lg:px-0 lg:pt-0 space-y-24 sm:space-y-28">
        {/* ULTRA-PREMIUM AI/ML HERO */}
        <section
          id="hero"
          className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
        >
          {/* Animated mathematical background */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div
              className="absolute top-20 left-6 text-4xl font-mono text-white/80"
              animate={{ y: [0, -150, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 12, repeat: Infinity }}
            >
              y = σ(Wx + b)
            </motion.div>
            <motion.div
              className="absolute top-40 right-10 text-3xl font-mono text-cyan-300/70"
              animate={{ y: [0, 120, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 14, repeat: Infinity, delay: 1 }}
            >
              ∇L = ∂L/∂w
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-24 text-4xl font-mono text-pink-300/70"
              animate={{ x: [0, 80, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 16, repeat: Infinity, delay: 2 }}
            >
              J(θ) = -Σ y log(ŷ)
            </motion.div>
            <motion.div
              className="absolute top-60 right-32 text-3xl font-mono text-purple-300/70"
              animate={{ rotate: [0, 360], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              softmax(z) = e^zi / Σe^zj
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-10 text-3xl font-mono text-blue-300/70"
              animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
              transition={{ duration: 10, repeat: Infinity, delay: 3 }}
            >
              ReLU(x) = max(0, x)
            </motion.div>
          </div>

          {/* Animated grid overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Neural-style particles background (placeholder) */}
          <Canvas3DBackground />

          <div className="relative z-10 mx-auto flex max-w-6xl px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32">
            <div className="grid w-full items-center gap-12 lg:grid-cols-2">
              {/* Left: text content */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <motion.div
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-md"
                  animate={{
                    boxShadow: [
                      "0 0 18px rgba(168,85,247,0.4)",
                      "0 0 34px rgba(236,72,153,0.6)",
                      "0 0 18px rgba(168,85,247,0.4)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                  <span>Open to research internships & ML systems work</span>
                </motion.div>

                <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="block"
                  >
                    Hi, I&apos;m
                    <span className="ml-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Amisha
                    </span>
                    <motion.span
                      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      className="ml-2 inline-block"
                    >
                      👋
                    </motion.span>
                  </motion.span>
                </h1>

                <div className="mb-6 h-14 text-2xl font-semibold text-transparent sm:text-3xl lg:text-4xl">
                  <TypeAnimation
                    sequence={[
                      "Machine Learning Researcher 🧠",
                      2000,
                      "Applied ML Engineer 🤖",
                      2000,
                      "Spatiotemporal Modelling Enthusiast 🌍",
                      2000,
                      "End-to-end Systems Builder ⚙️",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
                  />
                </div>

                <p className="mb-4 max-w-xl text-sm leading-relaxed text-violet-100/90 sm:text-base">
                  I work on end-to-end machine learning systems—from messy, real-world data
                  and modelling, through evaluation and iteration, to deployment-ready APIs
                  and dashboards.
                </p>
                <p className="mb-8 max-w-xl text-sm leading-relaxed text-violet-100/90 sm:text-base">
                  Lately, that has meant wildfire early warning, road-safety analytics, and
                  clinical decision support—projects where careful modelling and solid
                  engineering can actually move the needle.
                </p>

                <div className="mb-8 grid grid-cols-3 gap-4 text-center text-xs sm:text-sm">
                  {[
                    { icon: "📊", value: "4+", label: "Research projects" },
                    { icon: "🏆", value: "3", label: "Major recognitions" },
                    { icon: "💻", value: "2+", label: "Years in ML" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.06, y: -4 }}
                      className="rounded-2xl border border-white/20 bg-white/10 px-3 py-3 text-white backdrop-blur-md"
                    >
                      <div className="mb-1 text-xl">{stat.icon}</div>
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-[11px] text-violet-100/80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-purple-500/40"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      View projects
                    </span>
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Get in touch
                    </span>
                  </motion.a>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    {
                      Icon: Github,
                      href: "https://github.com/amishapatel20",
                      label: "GitHub",
                    },
                    {
                      Icon: Linkedin,
                      href: "https://www.linkedin.com/in/amisha-patel51/",
                      label: "LinkedIn",
                    },
                    {
                      Icon: Mail,
                      href: "mailto:amishanitr23july@gmail.com",
                      label: "Email",
                    },
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={label === "Email" ? undefined : "_blank"}
                      whileHover={{ scale: 1.15, y: -4 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-sm backdrop-blur-md"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right: animated illustration side */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.25 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-3xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="relative z-10"
                  animate={{ y: [0, -26, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl ring-1 ring-white/10">
                    <div className="absolute -top-4 left-6 rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      AI / ML
                    </div>
                    <div className="absolute -bottom-4 right-6 rounded-full bg-purple-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-100">
                      Real-world
                    </div>
                    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40 p-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-indigo-100">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span>Neural model online</span>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-950/80 shadow-inner">
                        <span className="text-3xl">🤖</span>
                      </div>
                      <p className="mt-1 text-xs text-center text-slate-100/90">
                        Abstract representation of an AI engineer orchestrating data, models, and systems.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating tech icons */}
                <motion.div
                  className="absolute -left-10 top-8 rounded-2xl border border-white/40 bg-white/20 p-3 text-white backdrop-blur-md"
                  animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SiTensorflow className="h-9 w-9 text-[#FF6F00]" />
                </motion.div>
                <motion.div
                  className="absolute -right-6 top-32 rounded-2xl border border-white/40 bg-white/20 p-3 text-white backdrop-blur-md"
                  animate={{ y: [0, 16, 0], rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <SiPytorch className="h-9 w-9 text-[#EE4C2C]" />
                </motion.div>
                <motion.div
                  className="absolute -left-12 bottom-32 rounded-2xl border border-white/40 bg-white/20 p-3 text-white backdrop-blur-md"
                  animate={{ x: [0, -14, 0], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                >
                  <SiPython className="h-9 w-9 text-[#3776AB]" />
                </motion.div>
                <motion.div
                  className="absolute right-6 bottom-10 rounded-2xl border border-white/40 bg-white/20 p-3 text-white backdrop-blur-md"
                  animate={{ x: [0, 14, 0], y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <SiJupyter className="h-9 w-9 text-[#F37626]" />
                </motion.div>

                <AnimatedNeuralNetwork />

                {/* Speech bubbles */}
                <motion.div
                  className="absolute -top-8 left-16 max-w-xs rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-xs font-semibold text-white shadow-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <p className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" /> Training models…
                  </p>
                </motion.div>
                <motion.div
                  className="absolute top-20 right-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-xs font-semibold text-white shadow-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  <p className="flex items-center gap-2">
                    <Brain className="h-4 w-4" /> Monitoring metrics
                  </p>
                </motion.div>

                {/* Loss graph card */}
                <motion.div
                  className="absolute -bottom-16 -left-6 w-72 rounded-2xl border border-white/30 bg-white/10 p-5 text-xs text-white shadow-2xl backdrop-blur-md"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    <span className="font-semibold">Training progress</span>
                  </div>
                  <AnimatedLossGraph />
                </motion.div>

                <FloatingEmoji emoji="🚀" className="absolute right-20 top-0" delay={0} />
                <FloatingEmoji emoji="💡" className="absolute left-0 bottom-36" delay={1} />
                <FloatingEmoji emoji="⚡" className="absolute right-0 top-52" delay={2} />
                <FloatingEmoji emoji="🎯" className="absolute right-40 bottom-0" delay={1.4} />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 text-slate-50">
            <svg className="h-16 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <motion.path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#ffffff"
                animate={{
                  d: [
                    "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                    "M321.39,70c58-10.79,114.16-20,172-30,82.39-16.72,168.19-20,250.45-10C823.78,45,906.67,85,985.66,105c70.05,18.48,146.53,30,214.34,15V0H0V40A600.21,600.21,0,0,0,321.39,70Z",
                    "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </section>

        {/* ABOUT - enhanced animated section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-5 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.65)] dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
          data-aos="fade-up"
        >
          <div className="pointer-events-none absolute top-10 left-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-pink-300/25 blur-3xl" />

          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-2 text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent sm:text-4xl">
              About me
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Get to know the person behind the projects.
            </p>
          </motion.div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Illustration side */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-30 blur-2xl" />
              <motion.div
                animate={{ y: [0, -18, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 rounded-3xl bg-white/90 p-4 shadow-xl dark:bg-slate-900/90"
              >
                <img
                  src="https://illustrations.popsy.co/amber/remote-work.svg"
                  alt="Research-focused developer at work"
                  className="h-auto w-full"
                />
              </motion.div>

              <motion.div
                className="absolute -top-6 right-6 rounded-2xl bg-white px-5 py-3 text-sm font-semibold shadow-2xl dark:bg-slate-900"
                animate={{ y: [0, -10, 0], rotate: [0, -4, 4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-purple-600 dark:text-purple-300">Hi there! 👋</p>
              </motion.div>

              <motion.div
                className="absolute top-16 -left-4 text-3xl"
                animate={{ y: [0, -16, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                🚀
              </motion.div>
              <motion.div
                className="absolute bottom-10 -right-4 text-3xl"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                💡
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-xl dark:border-purple-900/60 dark:bg-slate-900/90">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  A bit about me
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  I&apos;m an Integrated MSc Mathematics student at NIT Rourkela, with a
                  strong interest in how mathematical ideas, data, and machine learning
                  come together in real systems. I enjoy turning vague, noisy problems
                  into clear pipelines, experiments, and tools that others can rely on.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  I&apos;m generally excited about any system work where ML, data, and
                  thoughtful engineering come together – not just one narrow domain.
                  Spatiotemporal forecasting, risk modelling, and domain-specific
                  retrieval systems are things I&apos;ve especially enjoyed recently.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  Outside of projects, you&apos;ll usually find me experimenting with new
                  model ideas, improving my problem-solving skills, or reading about how
                  ML systems are deployed and maintained in the real world.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs sm:text-sm">
                {["End-to-end systems", "Research-driven", "Always learning"].map((label) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 px-3 py-3 text-white shadow-md"
                  >
                    <p className="font-semibold">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* RESEARCH INTERESTS - animated overview + skills */}
        <motion.section
          id="research"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="relative overflow-hidden rounded-3xl bg-white px-5 py-12 shadow-[0_18px_70px_rgba(15,23,42,0.6)] dark:bg-slate-900"
          data-aos="fade-up"
        >
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #667eea 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.7, once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-2 text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent sm:text-4xl">
                Research interests
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                What I&apos;m excited about exploring and building next.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
              <div>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  {researchInterests.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.5, once: true }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="grid gap-4 sm:grid-cols-2"
                variants={STAGGER_CONTAINER}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
              >
                {skillGroups.map((group) => (
                  <motion.div
                    key={group.title}
                    variants={CARD_VARIANTS}
                    whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(15,23,42,0.16)" }}
                    className="relative overflow-hidden rounded-2xl bg-white p-4 text-sm shadow-md dark:bg-slate-950"
                  >
                    <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br from-sky-400/20 via-violet-500/20 to-fuchsia-500/20" />
                    <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {group.title}
                    </p>
                    <ul className="relative mt-3 space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* TECH STACK CAROUSEL WITH REAL ICONS */}
        <motion.section
          id="skills"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15, once: true }}
          className="rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-5 py-12 text-slate-900 shadow-[0_22px_80px_rgba(15,23,42,0.15)] dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100"
          data-aos="fade-up"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              Stack I use
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Technologies I work with to build machine learning models and systems that solve real problems.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-purple-50 dark:from-slate-900 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-purple-50 dark:from-slate-900 to-transparent z-10" />

            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.2, y: -10 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity" />
                    <div className="relative bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg border-2 border-slate-100 dark:border-slate-700 group-hover:border-transparent transition-all flex items-center justify-center">
                      <tech.icon
                        size={42}
                        style={{ color: tech.color }}
                        className="transition-transform group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* RESEARCH PROJECTS */}
        <motion.section
          id="projects"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15, once: true }}
          className="rounded-3xl bg-white/95 px-5 py-10 shadow-[0_22px_80px_rgba(15,23,42,0.7)]"
          data-aos="fade-up"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Research projects
            </h2>
            <Link
              href="https://github.com/amishapatel20"
              target="_blank"
              className="text-xs font-medium text-[#55198b] hover:underline"
            >
              View more on GitHub
            </Link>
          </div>

          <motion.div
            className="mt-6 grid gap-6 md:grid-cols-2"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            {researchProjects.map((project) => (
              <Tilt
                key={project.title}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2000}
                glareEnable={false}
              >
                <motion.div
                  variants={CARD_VARIANTS}
                  whileHover={{ y: -10 }}
                  className="project-card group relative overflow-hidden rounded-3xl"
                >
                  <div className="relative overflow-hidden h-40">
                    <div className="w-full h-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tech.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] text-white font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative bg-white p-5 border-2 border-slate-100 group-hover:border-purple-500 transition-all duration-300 dark:bg-slate-900 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 mb-2">
                      {project.role}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-700 text-[10px] font-medium text-slate-700 dark:text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                      >
                        <Github className="h-4 w-4" /> Code
                      </Link>
                    </div>

                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </motion.section>

        {/* SPATIOTEMPORAL WILDFIRE DEMO */}
        <motion.section
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-violet-900 px-5 py-10 text-slate-100 shadow-[0_22px_80px_rgba(15,23,42,0.8)]"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Spatiotemporal wildfire early warning
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-200">
                A live demo of my Agnirhodhak project: forecasting wildfire risk over
                satellite and sensor data to surface high-risk regions in advance.
              </p>
            </div>
            <Link
              href="https://geoml-forest-fire-predictor-agnirhodhak-2.onrender.com"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <ExternalLink className="h-4 w-4" />
              Open live demo
            </Link>
          </div>
        </motion.section>

        {/* GITHUB HIGHLIGHTS */}
        <motion.section
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15, once: true }}
          className="rounded-3xl bg-gradient-to-r from-sky-900/80 via-slate-900/90 to-violet-900/80 px-5 py-9 text-slate-100 shadow-[0_22px_80px_rgba(15,23,42,0.8)]"
          data-aos="fade-up"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              More from GitHub
            </h2>
            <Link
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              className="text-xs font-medium text-sky-200 hover:underline"
            >
              See all repositories
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
            {isLoadingRepos && <p>Loading repositories...</p>}
            {!isLoadingRepos && repoError && <p>{repoError}</p>}
            {!isLoadingRepos && !repoError &&
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  className="flex flex-col justify-between rounded-2xl bg-white/5 p-4 shadow-sm transition transform hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {repo.name}
                    </p>
                    {repo.description && (
                      <p className="mt-1 text-[11px] text-slate-200">
                        {repo.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-200">
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      {repo.language ?? "Code"}
                    </span>
                    <span className="flex items-center gap-2">
                      <span>★ {repo.stargazers_count}</span>
                      <span>⑂ {repo.forks_count}</span>
                    </span>
                  </div>
                </a>
              ))}
          </div>
        </motion.section>

        {/* PUBLICATIONS & ACHIEVEMENTS + EXPERIENCE & EDUCATION */}
        <motion.section
          id="experience"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15, once: true }}
          className="rounded-3xl bg-gradient-to-r from-fuchsia-50 via-white to-sky-50 px-5 py-10 shadow-[0_22px_80px_rgba(15,23,42,0.7)]"
          data-aos="fade-up"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            {/* Publications & achievements */}
            <div>
              <h2
                id="publications"
                className="text-2xl font-bold tracking-tight text-slate-900"
              >
                Publications &amp; achievements
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {publicationsAndAchievements.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl bg-white/90 p-3 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience & education with premium card design */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Experience &amp; education
              </h2>

              <div className="mt-4 grid gap-4">
                {/* Experience card */}
                <motion.div
                  variants={CARD_VARIANTS}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  <div className="relative bg-white rounded-2xl p-6 text-sm shadow-xl border-2 border-transparent group-hover:border-purple-500 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-50" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-slate-100 text-xs font-semibold shadow-lg">
                          WSN Lab
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {experience[0]?.org}
                        </h3>
                        <p className="text-slate-600 font-medium">
                          {experience[0]?.title}
                        </p>
                        <p className="text-xs text-slate-500">{experience[0]?.period}</p>
                      </div>
                    </div>

                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-5" />

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 p-2 bg-purple-100 rounded-lg">
                          <Briefcase className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Technical contributions</h4>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {experience[0]?.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 p-2 bg-pink-100 rounded-lg">
                          <Sparkles className="h-5 w-5 text-pink-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Impact</h4>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            Focused on building robust spatiotemporal pipelines over satellite and sensor data to support data-driven decision making.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["U-Net", "Geospatial processing", "Time-series", "Python"].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 rounded-full text-[11px] font-medium text-purple-700 hover:scale-105 transition-transform"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full" />
                  </div>
                </motion.div>

                {/* Education cards */}
                {education.map((item) => (
                  <div
                    key={item.org}
                    className="relative rounded-2xl bg-white p-4 text-sm shadow-sm border border-slate-200"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.period}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600">{item.org}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="rounded-3xl bg-white/95 px-5 py-10 text-center shadow-[0_22px_80px_rgba(15,23,42,0.8)]"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Let&apos;s connect
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            I&apos;m actively looking for ML research internship opportunities.
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] text-left">
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#55198b] focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#55198b] focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#55198b] focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                  placeholder="Tell me a bit about your lab, team, or project."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#55198b] px-6 py-2 text-sm font-medium text-white shadow-md shadow-[#55198b]/40 transition transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send email
              </button>
            </form>

            <div className="space-y-4 text-left text-sm text-slate-600">
              <p>
                Prefer direct links? You can also reach me via:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:amishanitr23july@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium shadow-sm transition transform hover:-translate-y-0.5 hover:border-[#55198b] hover:text-[#55198b] hover:shadow-md"
                >
                  <FaEnvelope className="h-4 w-4" /> Email
                </a>
                <a
                  href="https://github.com/amishapatel20"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium shadow-sm transition transform hover:-translate-y-0.5 hover:border-[#55198b] hover:text-[#55198b] hover:shadow-md"
                >
                  <FaGithub className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/amisha-patel51/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium shadow-sm transition transform hover:-translate-y-0.5 hover:border-[#55198b] hover:text-[#55198b] hover:shadow-md"
                >
                  <FaLinkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950/80 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Amisha Patel. Crafted with Next.js.
      </footer>
    </div>
  );
}

type FloatingEmojiProps = {
  emoji: string;
  className?: string;
  delay?: number;
};

function FloatingEmoji({ emoji, className = "", delay = 0 }: FloatingEmojiProps) {
  return (
    <motion.div
      className={`text-4xl ${className}`}
      animate={{ y: [0, -26, 0], rotate: [0, 360], scale: [1, 1.18, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {emoji}
    </motion.div>
  );
}

function AnimatedNeuralNetwork() {
  const nodes = [
    { cx: 20, cy: 50, r: 7 },
    { cx: 20, cy: 100, r: 7 },
    { cx: 20, cy: 150, r: 7 },
    { cx: 100, cy: 40, r: 7 },
    { cx: 100, cy: 80, r: 7 },
    { cx: 100, cy: 120, r: 7 },
    { cx: 100, cy: 160, r: 7 },
    { cx: 180, cy: 70, r: 7 },
    { cx: 180, cy: 130, r: 7 },
  ];

  return (
    <div className="pointer-events-none absolute -right-28 top-1/2 h-60 w-60 -translate-y-1/2 opacity-30">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {nodes.map((node, index) => (
          <motion.circle
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            {...node}
            fill="#a855f7"
            animate={{
              r: [node.r, node.r + 3, node.r],
              fill: ["#a855f7", "#ec4899", "#a855f7"],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.18 }}
          />
        ))}

        <motion.line
          x1="20"
          y1="50"
          x2="100"
          y2="40"
          stroke="#a855f7"
          strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="20"
          y1="100"
          x2="100"
          y2="80"
          stroke="#a855f7"
          strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <motion.line
          x1="20"
          y1="150"
          x2="100"
          y2="120"
          stroke="#a855f7"
          strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <motion.line
          x1="100"
          y1="40"
          x2="180"
          y2="70"
          stroke="#a855f7"
          strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <motion.line
          x1="100"
          y1="80"
          x2="180"
          y2="70"
          stroke="#a855f7"
          strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
        <motion.line
          x1="100"
          y1="120"
          x2="180"
          y2="130"
          stroke="#a855f7"
          strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

function AnimatedLossGraph() {
  return (
    <div className="h-24 w-full">
      <svg viewBox="0 0 100 40" className="h-full w-full">
        <defs>
          <linearGradient id="lossGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <motion.polyline
          fill="none"
          stroke="url(#lossGradient)"
          strokeWidth="1.8"
          points="0,30 10,26 20,22 30,18 40,15 50,13 60,11 70,10 80,9 90,8 100,7"
          strokeDasharray="120"
          initial={{ strokeDashoffset: 120 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.2 }}
        />
      </svg>
    </div>
  );
}

function Canvas3DBackground() {
  return <div className="pointer-events-none absolute inset-0" />;
}
