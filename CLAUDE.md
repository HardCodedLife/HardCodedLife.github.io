# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website repository (HardCodedLife.github.io) for GitHub Pages hosting. The project will be built with **Astro** as the static site generator.

**Key Decisions Made:**
- **Technology Stack:** Astro (chosen over Jekyll/Next.js for modern tooling, performance, and simplicity)
- **Workflow:** Simple Git-based (local development → commit → push → auto-deploy)
- **Domain:** HardCodedLife.github.io
- **Content Management:** Markdown files committed directly to repository
- **Required Features:** Comment system (Giscus), contact forms (Formspree/Netlify Forms)

## Established Workflow

**Development Process:**
1. Edit locally on laptop using command line tools
2. `npm run dev` for local preview (build-and-refresh workflow)
3. Content in Markdown files, images committed to repo
4. `git add . && git commit -m "message" && git push` to deploy
5. GitHub Actions automatically builds and deploys to GitHub Pages

**Project Structure (Reference):**
```
HardCodedLife.github.io/
├── src/
│   ├── content/           # Markdown files
│   │   ├── blog/         # Blog posts
│   │   └── pages/        # Static pages
│   ├── components/       # Reusable components
│   ├── layouts/          # Page templates
│   └── pages/            # Routes
├── public/               # Static assets (images, etc.)
├── astro.config.mjs      # Astro configuration
└── package.json
```

## Current State

**✅ COMPLETED SETUP** - Astro website is fully implemented and operational

**Project Structure:**
```
HardCodedLife.github.io/
├── .github/workflows/deploy.yml    # GitHub Actions deployment
├── src/
│   ├── content/
│   │   ├── blog/welcome.md         # Sample blog post
│   │   ├── pages/about.md          # About page content
│   │   └── config.ts               # Content collections config
│   ├── components/                 # (Ready for future components)
│   ├── layouts/
│   │   ├── BaseLayout.astro        # Main site layout
│   │   └── BlogPost.astro          # Blog post layout
│   └── pages/
│       ├── index.astro             # Home page
│       ├── about.astro             # About page
│       ├── contact.astro           # Contact page
│       └── blog/
│           ├── index.astro         # Blog listing
│           └── [...slug].astro     # Dynamic blog posts
├── public/favicon.svg              # Site favicon
├── astro.config.mjs                # Astro configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## Development Commands

**Active Commands:**
- `npm run dev` - Start Astro development server (http://localhost:4321)
- `npm run build` - Build static site for deployment
- `npm run preview` - Preview built site locally
- `npm run astro` - Run Astro CLI commands

## User Preferences & Requirements

- **Solo project** - no collaboration needed
- **Update frequency:** Variable (daily when active, monthly/yearly when quiet)
- **Security:** No vital information exposure, static files only
- **Local development** on laptop, command line comfortable
- **Content:** Markdown files and images committed directly to repo

## Implementation Status

**✅ COMPLETE:** Full Astro website implementation finished
- All core pages and layouts created
- Content collections configured
- GitHub Actions deployment ready
- Development server tested and working
- Sample content added (welcome blog post, about page)

**Next Steps for User:**
1. Enable GitHub Pages in repository settings if not already done
2. Commit and push to deploy live site
3. Add more blog posts in `src/content/blog/`
4. Customize contact form integration (Formspree/Netlify)
5. Add comment system integration (Giscus)

## Critical Context Updates

Always automatically update this CLAUDE.md when critical project context is established to maintain continuity across Claude Code sessions.