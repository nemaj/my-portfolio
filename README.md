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

## Deploy to GitHub Pages

This project is configured for **static export** and deploys automatically via GitHub Actions.

### 1. Create a GitHub repository

Create a new repo on GitHub named `jamen-mama-portfolio` (or any name — the workflow auto-detects it).

### 2. Push your code

```bash
cd C:\Users\yhato\Projects\jamen-mama-portfolio
git add .
git commit -m "Initial portfolio with GitHub Pages deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jamen-mama-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Open your repo on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically

### 4. Live URL

Your site will be available at:

```
https://YOUR_USERNAME.github.io/jamen-mama-portfolio/
```

> **Important:** If you use a different repo name, the URL path changes to match the repo name. The workflow sets `basePath` automatically.

### Local build (GitHub Pages preview)

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/jamen-mama-portfolio"
$env:NEXT_PUBLIC_SITE_URL="https://YOUR_USERNAME.github.io/jamen-mama-portfolio"
npm run build
```

Static files are output to the `out/` folder. Serve locally with any static server to preview.

## Deploy to Vercel (alternative)

For server-side features, remove `output: "export"` from `next.config.ts` and deploy via [Vercel](https://vercel.com).

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
