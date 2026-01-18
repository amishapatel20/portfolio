## Amisha Patel – AI/ML Portfolio

This repository contains my personal AI/ML research and engineering portfolio, built with Next.js (App Router) and focused on end-to-end machine learning systems.

**Live site:** https://portfolio-five-eta-16.vercel.app

The site showcases my projects, research interests, experience, and skills in a single-page, scroll-animated layout inspired by DeveloperFolio.

## Features

- **Hero section** with animated mathematical background, AI/ML roles (TypeAnimation), and call-to-action buttons.
- **About** section describing my Integrated MSc Mathematics background at NIT Rourkela and systems-focused mindset.
- **Research interests** covering core ML, deep learning, generative/probabilistic models, ML systems, and retrieval/RAG.
- **Projects** section highlighting:
	- Spatiotemporal wildfire early warning (Agnirhodhak).
	- Road-safety analytics (SafeRoadAI).
	- AuscultoML – lung sound disease classification.
	- Amazon ML Challenge work.
- **Experience & Education** cards (WSN Lab internship, Integrated MSc at NIT Rourkela).
- **Animated tech stack carousel** with branded icons (Python, PyTorch, TensorFlow, FastAPI, Docker, cloud, etc.).
- **Smooth scroll-triggered animations** using AOS and Framer Motion (no forced auto-scroll intro).
- **GitHub highlights** section that fetches recent repositories via the GitHub API.
- **Contact** section with a mailto-based form and quick links (GitHub, LinkedIn, email).

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript-ready)
- **UI**: React 19, Tailwind CSS 4 (via `@tailwindcss/postcss`), custom gradients and utility classes
- **Animation**: Framer Motion, AOS (Animate On Scroll), react-type-animation
- **Icons**: lucide-react, react-icons (Simple Icons, Font Awesome)
- **Other**: react-parallax-tilt, GitHub REST API for repo data

## Getting Started (Local Development)

Clone the repository and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 (or the port shown in the terminal) in your browser.

## Production Build

To create an optimized production build:

```bash
npm run build
npm start
```

This will run `next build` and start the production server.

## Deployment

The project is designed to be deployed on **Vercel** (recommended), but any platform that supports Next.js can be used.

Typical Vercel settings:

- Framework: `Next.js`
- Build command: `next build`
- Output directory: `.next`

Every push to the main branch can trigger an automatic redeploy.

## Contact

If you’d like to discuss research internships, collaborations, or ML systems work, feel free to reach out:

- GitHub: https://github.com/amishapatel20
- LinkedIn: https://www.linkedin.com/in/amisha-patel51/
- Email: amishanitr23july@gmail.com
