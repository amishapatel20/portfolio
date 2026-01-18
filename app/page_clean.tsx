// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TYPING_TEXT =
  "LLM + RAG · Spatiotemporal ML · Risk & Forecasting · Applied AI";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const HIGHLIGHT_SKILLS = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Time-series ML",
  "Geospatial ML",
  "LLMs",
  "RAG",
  "FastAPI",
  "Docker",
  "PostgreSQL",
  "Git",
];

const SKILLS = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Time-series ML",
  "Geospatial ML",
  "Computer Vision",
  "LLMs",
  "RAG",
  "FastAPI",
  "REST APIs",
  "Docker",
  "Git",
  "PostgreSQL",
];

const PROFICIENCY = [
  { label: "Python, ML & Deep Learning", level: 85 },
  { label: "LLMs, RAG & NLP", level: 80 },
  { label: "Spatiotemporal / Forecasting", level: 78 },
  { label: "MLOps, APIs & Deployment", level: 72 },
];

const PROJECTS = [
  {
    title: "Spatiotemporal Wildfire Early Warning",
    description:
      "Built ML pipeline over satellite and sensor data to forecast fire risk and alert regions at risk before ignition.",
    tags: ["Spatiotemporal ML", "Geospatial", "Risk Forecasting"],
    link: "https://github.com/amishapatel20",
  },
  {
    title: "Road-safety Analytics for High-risk Segments",
    description:
      "Analyzed traffic and incident data to rank dangerous road segments and propose targeted interventions.",
    tags: ["Analytics", "Risk Scoring", "Visualisation"],
    link: "https://github.com/amishapatel20",
  },
  {
    title: "Clinical RAG Decision Support",
    description:
      "Prototype LLM + RAG system for summarising guidelines and answering clinician queries with citations.",
    tags: ["LLM", "RAG", "Healthcare"],
    link: "https://github.com/amishapatel20",
  },
  {
    title: "Amazon ML Challenge 2024 Work",
    description:
      "Built ranking models for e-commerce recommendations as part of Amazon ML Challenge 2024.",
    tags: ["Recommenders", "Ranking", "Competition"],
    link: "https://github.com/amishapatel20",
  },
];

const EDUCATION = [
  {
    institution: "National Institute of Technology Rourkela",
    degree: "Integrated MSc in Mathematics",
    period: "2021 – 2026 (Expected)",
    location: "Odisha, India",
    details:
      "Integrated MSc with focus on probability, statistics, optimisation and machine learning; applying maths to real-world ML problems.",
  },
];

const EXPERIENCES = [
  {
    role: "Summer Research Intern (ML)",
    org: "Wireless Sensor Networks Lab, NIT Rourkela",
    period: "May 2024 – Jul 2024",
    location: "Rourkela, India",
    stack: "Python, PyTorch, Time-series ML, Geospatial data",
    bullets: [
      "Built and evaluated models for wildfire risk prediction from multi-source sensor and satellite data.",
      "Experimented with temporal architectures to capture seasonal and short-term patterns in fire activity.",
      "Collaborated with researchers to turn model outputs into interpretable risk maps and metrics.",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "Amazon ML Challenge 2024 Participant",
    year: "2024",
    description:
      "Competed in Amazon's ML Challenge, working on real-world recommendation and ranking tasks.",
  },
  {
    title: "Applied ML Projects in Safety & Risk",
    year: "2023 – 2024",
    description:
      "Independent projects on wildfire early warning, road-safety analytics, and RAG-based decision support.",
  },
];

function getSkillIcon(skill: string) {
  if (skill.toLowerCase().includes("python")) return "Py";
  if (skill.toLowerCase().includes("torch")) return "Pt";
  if (skill.toLowerCase().includes("time-series")) return "Ts";
  if (skill.toLowerCase().includes("geo")) return "G";
  if (skill.toLowerCase().includes("rag")) return "R";
  if (skill.toLowerCase().includes("llm")) return "L";
  if (skill.toLowerCase().includes("docker")) return "D";
  if (skill.toLowerCase().includes("fastapi")) return "F";
  return skill[0] ?? "?";
}

export default function Home() {
  const [typingText, setTypingText] = useState("");
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      setTypingText(TYPING_TEXT.slice(0, index + 1));
      index += 1;
      if (index >= TYPING_TEXT.length) {
        window.clearInterval(interval);
      }
    }, 70);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY + 140;
      const ids = ["home", ...SECTIONS.map((s) => s.id)];
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (top <= fromTop && bottom > fromTop) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".js-fade");
    if (!("IntersectionObserver" in window) || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const coreSkills = SKILLS.slice(0, 8);
  const infraSkills = SKILLS.slice(8);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="hero-photo-bg" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="network-overlay" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300 p-[1px] shadow-[0_0_32px_rgba(56,189,248,0.6)]">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950">
                <span className="text-sm font-semibold tracking-wide text-sky-200">
                  AP
                </span>
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-slate-100">
                Amisha Patel
              </p>
              <p className="text-xs text-slate-400">
                Machine Learning · Applied AI
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-4 text-xs font-medium md:flex md:text-sm">
            {SECTIONS.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`transition-colors ${
                  activeSection === section.id
                    ? "text-sky-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {section.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative mx-auto flex max-w-5xl flex-col gap-24 px-5 pb-20 pt-24 md:px-6 md:pb-28 md:pt-32 lg:px-8 lg:pt-36">
        {/* HERO */}
        <section id="home" className="section-anchor js-fade fade-in">
          <div className="mx-auto flex max-w-5xl flex-col gap-10">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-800/80 bg-slate-950/90 shadow-[0_32px_90px_rgba(15,23,42,0.96)]">
              <div className="hero-banner" />

              <div className="absolute -bottom-12 left-10 flex items-center gap-4">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-slate-950 bg-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.9)]">
                  <Image
                    src="/profile.jpg"
                    alt="Amisha Patel"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium tracking-tight text-slate-200">
                    Amisha Patel
                  </p>
                  <p className="text-xs text-slate-400 sm:text-[13px]">
                    ML engineer · Integrated MSc @ NIT Rourkela
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 right-8 flex items-center gap-3 text-slate-300">
                <a
                  href="https://github.com/amishapatel20"
                  target="_blank"
                  aria-label="GitHub profile"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 shadow-sm shadow-slate-900/60 transition hover:border-sky-400 hover:text-sky-200"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.18 9.18 0 0 1 12 6.4c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/amisha-patel51/"
                  target="_blank"
                  aria-label="LinkedIn profile"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 shadow-sm shadow-slate-900/60 transition hover:border-sky-400 hover:text-sky-200"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1s2.5 1.12 2.5 2.5ZM.2 8.25h4.6V23H.2V8.25ZM8.55 8.25h4.41v2.01h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V23h-4.6v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.82 1.9-2.82 3.86V23H8.55V8.25Z"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:amishanitr23july@gmail.com"
                  aria-label="Email Amisha"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 shadow-sm shadow-slate-900/60 transition hover:border-sky-400 hover:text-sky-200"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.17l8 5.16 8-5.16V6H4Zm0 2.89V18h16V8.89l-7.47 4.81a1.5 1.5 0 0 1-1.62 0L4 8.89Z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid gap-8 pt-10 md:grid-cols-[minmax(0,3.2fr)_minmax(0,2.3fr)] md:items-center">
              <div className="space-y-6">
                <div className="pill inline-flex items-center gap-2 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-sky-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.25)]" />
                  <span>Open to research internships 2026</span>
                </div>

                <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-[2.6rem]">
                  <span className="mb-1 block text-sm font-normal text-slate-300 sm:text-base">
                    Hi all, I&apos;m Amisha 👋
                  </span>
                  I design ML systems that turn messy data into
                  <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    reliable decisions people can trust.
                  </span>
                </h1>

                <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  Integrated MSc Mathematics @ NIT Rourkela, with experience building spatiotemporal
                  forecasting models, risk pipelines, and LLM-powered RAG systems for
                  forest-fire early warning, road-safety analytics, and clinical decision support.
                </p>

                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  {typingText}
                </p>

                <div className="flex flex-wrap gap-3 pt-2 text-sm font-medium">
                  <Link
                    href="#experience"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-2 text-slate-950 shadow-[0_18px_40px_rgba(56,189,248,0.55)] transition hover:bg-sky-300"
                  >
                    View contributions
                    <span aria-hidden>↗</span>
                  </Link>
                  <a
                    href="https://github.com/amishapatel20"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 px-5 py-2 text-slate-200 transition hover:border-sky-400 hover:text-sky-100"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="glass-panel card-3d relative overflow-hidden p-5 md:p-6">
                <div className="pointer-events-none orb-float absolute -left-10 -top-16 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="pointer-events-none orb-float absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />

                <div className="relative flex h-full flex-col justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      ML / RAG playground
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-50">
                      Systems across LLMs, spatiotemporal ML, and applied AI.
                    </p>
                  </div>

                  <div className="relative my-2 flex h-32 items-center justify-center md:h-36">
                    <div className="hero-orbit hero-orbit--outer" />
                    <div className="hero-orbit hero-orbit--inner" />
                    <div className="hero-orbit-dot" style={{ top: "14%", left: "18%" }} />
                    <div className="hero-orbit-dot" style={{ bottom: "10%", right: "22%" }} />
                    <div className="hero-orbit-pill" style={{ top: "8%", right: "10%" }}>
                      LLM · RAG
                    </div>
                    <div className="hero-orbit-pill" style={{ bottom: "6%", left: "6%" }}>
                      Geospatial ML
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-100">
                    <div className="rounded-xl border border-slate-700/80 bg-slate-950/80 p-3">
                      <p className="mb-1 text-[11px] font-semibold text-sky-200">
                        LLM + RAG
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Retrieval pipelines, hybrid search, evaluation loops.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-700/80 bg-slate-950/80 p-3">
                      <p className="mb-1 text-[11px] font-semibold text-sky-200">
                        Spatiotemporal ML
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Forecasting over satellite and sensor time-series.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-700/80 bg-slate-950/80 p-3">
                      <p className="mb-1 text-[11px] font-semibold text-sky-200">
                        Risk & safety
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Fire-risk maps, road-safety scores, clinical triage.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-700/80 bg-slate-950/80 p-3">
                      <p className="mb-1 text-[11px] font-semibold text-sky-200">
                        Productisation
                      </p>
                      <p className="text-[11px] text-slate-300">
                        FastAPI services, dashboards, and monitoring hooks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / WHAT I DO */}
        <section id="about" className="section-anchor js-fade fade-in">
          <div className="glass-panel card-3d flex flex-col gap-6 p-5 md:flex-row md:items-center md:p-6">
            <div className="flex-1 space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                What I do
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                I build end-to-end ML systems: from cleaning spatiotemporal and
                tabular data, to modeling and evaluation, to deploying APIs and
                dashboards that people actually use.
              </p>
              <ul className="space-y-1.5 text-sm text-slate-200">
                <li>
                  ⚡ Designing LLM + RAG pipelines for domain-specific question
                  answering and decision support.
                </li>
                <li>
                  ⚡ Building geospatial ML workflows over satellite and sensor
                  data for risk forecasting.
                </li>
                <li>
                  ⚡ Shipping ML features as FastAPI / Next.js products with
                  monitoring in mind.
                </li>
              </ul>
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-2">
                {HIGHLIGHT_SKILLS.map((skill) => (
                  <div key={skill} className="skill-pill">
                    <span className="skill-icon">{getSkillIcon(skill)}</span>
                    <span className="skill-label text-[0.78rem]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-anchor js-fade fade-in space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              Work experience & summer research
            </h2>
            <span className="text-xs text-slate-400">
              Work spanning geospatial ML, deployment, and applied projects
            </span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <article
                key={`${exp.org}-${exp.period}`}
                className="glass-panel card-3d relative flex flex-col gap-4 p-5 md:p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      {exp.role}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                      {exp.org}
                    </h3>
                  </div>
                  <div className="text-[11px] text-slate-400 md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300">
                  {exp.stack}
                </p>
                <ul className="mt-1 space-y-1.5 text-xs text-slate-200">
                  {exp.bullets.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section-anchor js-fade fade-in">
          <div className="glass-panel card-3d space-y-4 p-5 md:p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                Education
              </h2>
              <span className="text-xs text-slate-400">
                Academic background and relevant coursework
              </span>
            </div>
            <div className="space-y-4">
              {EDUCATION.map((item) => (
                <article
                  key={item.institution}
                  className="flex flex-col justify-between gap-2 border-t border-slate-800/70 pt-3 first:border-t-0 first:pt-0 md:flex-row md:items-baseline"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      {item.degree}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                      {item.institution}
                    </h3>
                    <p className="mt-1 max-w-xl text-xs text-slate-300">
                      {item.details}
                    </p>
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400 md:text-right">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section-anchor js-fade fade-in space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              Projects
            </h2>
            <span className="text-xs text-slate-400">
              Selected work across forecasting, pricing, and safety
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="group glass-panel card-3d relative flex flex-col justify-between p-5"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        aria-label="View project on GitHub"
                        className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 text-slate-300 shadow-sm shadow-slate-900/60 transition hover:border-sky-400 hover:text-sky-200"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.18 9.18 0 0 1 12 6.4c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] text-sky-200">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-sky-400/40 bg-sky-400/10 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-flex items-center text-xs font-medium text-sky-300 transition group-hover:text-emerald-200"
                  >
                    View on GitHub
                    <span className="ml-1" aria-hidden>
                      →
                    </span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="section-anchor js-fade fade-in">
          <div className="glass-panel card-3d space-y-4 p-5 md:p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                Achievements &amp; recognitions
              </h2>
              <span className="text-xs text-slate-400">
                Projects and challenges I&apos;m proud of
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {ACHIEVEMENTS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 text-xs text-slate-200"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-anchor js-fade fade-in">
          <div className="glass-panel card-3d p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                Skills &amp; tech stack
              </h2>
              <span className="text-xs text-slate-400">
                Languages, frameworks, and tools I work with
              </span>
            </div>

            <div className="space-y-4">
              <div className="skill-row">
                <div className="skill-track">
                  {[...coreSkills, ...coreSkills].map((skill, index) => (
                    <div key={`${skill}-core-${index}`} className="skill-pill">
                      <span className="skill-icon">{getSkillIcon(skill)}</span>
                      <span className="skill-label">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-row skill-row--reverse">
                <div className="skill-track">
                  {[...infraSkills, ...infraSkills].map((skill, index) => (
                    <div key={`${skill}-infra-${index}`} className="skill-pill">
                      <span className="skill-icon">{getSkillIcon(skill)}</span>
                      <span className="skill-label">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-semibold tracking-tight text-slate-50">
                Proficiency
              </h3>
              {PROFICIENCY.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span>{item.label}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800/80">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-anchor js-fade fade-in">
          <div className="glass-panel card-3d flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                Let&apos;s talk
              </h2>
              <p className="mt-1 text-xs text-slate-300 md:text-sm">
                I&apos;m actively looking for research internship opportunities in
                ML / AI for 2026.
              </p>
            </div>
            <div className="space-y-1 text-xs md:text-sm">
              <p className="text-slate-300">
                Email:{" "}
                <a
                  href="mailto:amishanitr23july@gmail.com"
                  className="text-sky-300 hover:text-emerald-200"
                >
                  amishanitr23july@gmail.com
                </a>
              </p>
              <p className="text-slate-300">
                GitHub:{" "}
                <a
                  href="https://github.com/amishapatel20"
                  target="_blank"
                  className="text-sky-300 hover:text-emerald-200"
                >
                  github.com/amishapatel20
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Amisha Patel. Crafted for research internship applications.
      </footer>
    </div>
  );
}
