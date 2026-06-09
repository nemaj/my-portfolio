# Jamen Mama — Senior Frontend Developer Portfolio

A premium engineering portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Sass Modules.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Sass Modules
- **Animation:** Framer Motion, GSAP, Lenis Smooth Scroll
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

Push to GitHub and import the repository in [Vercel](https://vercel.com). No additional configuration required.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── layout/           # Header, Footer, ScrollProgress
│   ├── sections/         # Page sections (Hero, About, etc.)
│   ├── projects/         # Project case study components
│   ├── ui/               # Reusable UI components
│   └── providers/        # App providers (Lenis smooth scroll)
├── data/                 # Static content and project data
├── lib/                  # Utilities and animation configs
├── styles/               # Sass variables and mixins
└── types/                # TypeScript type definitions
```

## Features

- Dark luxury design system
- Smooth scrolling with Lenis
- Scroll progress indicator
- Section reveal animations
- Magnetic buttons
- Animated project filtering
- Individual project case study pages
- SEO optimized metadata
- Fully responsive layout
