# Portfolio

Professional portfolio site — performance data analyst & ML engineer.

Built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/). Deployed on GitHub Pages.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Production build
npm run build
```

Output goes to `_site/`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Eleventy dev server with hot reload |
| `npm run build` | Build static site + minify CSS |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting (CI) |
| `npm test` | Run Playwright smoke tests |
| `npm run clean` | Remove `_site/` build output |

## Project Structure

```
src/
├── _data/           # Site data (JSON): skills, experience, education, projects
├── _includes/
│   ├── layouts/     # Base + case-study layouts (Nunjucks)
│   └── partials/    # Reusable UI sections
├── assets/          # Static files (CV PDF, images)
├── css/             # Tailwind entry point
├── projects/        # Case study markdown files
└── index.njk        # Homepage
```

## Deployment

### GitHub Pages

1. Push code to `main` branch
2. Go to repo **Settings → Pages → Source** → set to "GitHub Actions"
3. The included `.github/workflows/ci.yml` will:
   - Check formatting with Prettier
   - Build the site
   - Run Playwright smoke tests
   - Deploy to GitHub Pages on merge to `main`

Site will be live at `https://ronniepiku.github.io/portfolio/`.

## Adding Content

### New Project / Case Study

1. Create `src/projects/your-project-slug.md`
2. Add frontmatter:
   ```yaml
   ---
   layout: layouts/case-study.njk
   title: "Project Title"
   tags: ["Python", "ML"]
   colab: "https://colab.research.google.com/..."  # optional
   ---
   ```
3. Add entry to `src/_data/projects.json`
4. Write markdown content

### Update CV Data

Edit the JSON files in `src/_data/`:
- `experience.json` — work history
- `education.json` — degrees
- `skills.json` — skill categories
- `projects.json` — project cards on homepage

### CV PDF

Place your PDF at `src/assets/cv.pdf`. It will be served at `/assets/cv.pdf`.

## License

MIT
