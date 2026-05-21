# Jamen Mama Portfolio

React and Next.js portfolio page for Jamen Mama, built from the resume details and selected project list.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Static build

This project uses Next.js static export mode. To generate static files:

```bash
npm install
npm run build:static
```

The static site will be generated in the `out` folder.

## Edit content

Most portfolio content lives in `app/page.tsx`:

- `projects` controls the project cards and links.
- `skills` controls the technology list.
- `timeline` controls work experience.

Global styling lives in `app/globals.css`.

## Deploy free with GitHub Pages

1. Create a new public GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Push again, or run the **Deploy to GitHub Pages** workflow manually from the Actions tab.

The workflow builds the Next.js app as a static site and publishes the `out` folder to GitHub Pages.
