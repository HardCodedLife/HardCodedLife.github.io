# HardCodedLife.github.io

Personal website built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Status

✅ **Ready to Deploy** - Astro website fully implemented and tested

## Tech Stack

- **Static Site Generator:** Astro
- **Styling:** Custom CSS with semantic HTML
- **Hosting:** GitHub Pages
- **Domain:** https://hardcodedlife.github.io
- **Content:** Markdown files with frontmatter
- **Comments:** Giscus (GitHub Discussions) - *To be implemented*
- **Contact Forms:** Formspree - *Fully implemented*

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Workflow

Simple Git-based workflow:
1. Edit content locally
2. Preview with `npm run dev`
3. Commit and push to main branch
4. GitHub Actions automatically builds and deploys

## Features

- ✅ **Home Page** - Welcome section with recent blog posts
- ✅ **Blog System** - Full blog with individual post pages
- ✅ **About Page** - Personal information and background
- ✅ **Contact Page** - Contact methods with working Formspree form
- ✅ **Responsive Design** - Clean, professional styling
- ✅ **GitHub Actions** - Automated deployment
- ✅ **TypeScript** - Full type safety and validation

## Content Structure

```
src/
├── content/
│   ├── blog/        # Blog posts (.md) - Add new posts here
│   └── pages/       # Static pages (.md)
├── components/      # Astro components (ready for custom components)
├── layouts/         # Page templates (BaseLayout, BlogPost)
└── pages/           # Routes and special pages
    └── contact/
        └── success.astro  # Form submission success page
```

## Contact Form

The contact form is fully integrated with Formspree:

- **Endpoint:** `https://formspree.io/f/myzdwkdl`
- **Features:** AJAX submission, success/error handling, spam protection
- **Environment:** Form ID configured in `.env` file
- **Fallback:** Success page for users without JavaScript enabled

To modify the form, edit `src/pages/contact.astro`. The form ID is stored in the `FORMSPREE_FORM_ID` environment variable.

## Next Steps

1. **Enable GitHub Pages** in repository settings
2. **Commit and push** to deploy your live site
3. **Add content** - Create new blog posts in `src/content/blog/`
4. **Customize** - Update contact information and about page
5. **Test contact form** - Verify form submissions are working
6. **Add comments** - Set up Giscus for blog comments
