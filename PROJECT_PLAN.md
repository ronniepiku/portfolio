# Portfolio Website — Project Plan

## Tech Stack
- **SSG**: Eleventy (11ty) v3
- **Styling**: Tailwind CSS v3
- **Templates**: Nunjucks
- **Build**: PostCSS + Autoprefixer
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions → GitHub Pages
- **Tests**: Playwright (smoke tests)

## Milestones

### M1: Scaffold & Config (Commits 1–2)
- Init project, package.json, eleventy config
- Tailwind + PostCSS setup
- Prettier config
- Base layout template

### M2: Core Sections (Commits 3–5)
- Hero section with animated intro
- Skills grid (ML, Python, SQL, Docker, CI/CD, etc.)
- Work experience timeline
- Education section
- Projects grid with cards

### M3: Case Studies (Commits 6–7)
- Case study template with Colab/Binder embed support
- Sample case study: F1 Performance Pipeline
- Sample case study: ML Detection System

### M4: Polish & Accessibility (Commit 8)
- ARIA labels, skip links, focus management
- Responsive testing, dark theme refinement
- Lighthouse audit pass (target 90+ all categories)

### M5: CI/CD & Deploy (Commits 9–10)
- GitHub Actions workflow (format check, build, test, deploy)
- README with deploy instructions
- Playwright smoke tests

## File Tree
```
/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .devcontainer/
│   └── devcontainer.json
├── src/
│   ├── _data/
│   │   ├── site.json
│   │   ├── skills.json
│   │   ├── experience.json
│   │   ├── education.json
│   │   └── projects.json
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk
│   │   │   └── case-study.njk
│   │   └── partials/
│   │       ├── nav.njk
│   │       ├── hero.njk
│   │       ├── skills.njk
│   │       ├── experience.njk
│   │       ├── education.njk
│   │       ├── projects.njk
│   │       ├── contact.njk
│   │       └── footer.njk
│   ├── assets/
│   │   └── cv.pdf  (placeholder)
│   ├── css/
│   │   └── main.css
│   ├── projects/
│   │   ├── f1-performance-pipeline.md
│   │   └── ml-detection-system.md
│   └── index.njk
├── tests/
│   └── smoke.spec.ts
├── .eleventy.js
├── .prettierrc
├── Dockerfile
├── docker-compose.yml
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── playwright.config.ts
├── STYLE_GUIDE.md
├── ACCESSIBILITY_CHECKLIST.md
└── README.md
```

## Commit Message Convention
- `feat:` new feature or section
- `fix:` bug fix
- `docs:` documentation only
- `style:` formatting, no logic change
- `ci:` CI/CD changes
- `test:` adding/updating tests
