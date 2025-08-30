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

The contact form is fully integrated with Formspree and supports CAPTCHA:

- **Endpoint:** `https://formspree.io/f/myzdwkdl`
- **Features:** AJAX submission with CAPTCHA fallback, success/error handling, spam protection
- **CAPTCHA Support:** Automatically detects when CAPTCHA is required and redirects to Formspree
- **Environment:** Form ID injected at build time via Vite define variables
- **Fallback:** Success page for users without JavaScript enabled
- **Domain:** Configured for hardcodedlife.github.io

**How It Works:**
1. Form attempts AJAX submission first for seamless experience
2. If CAPTCHA is required (403 response), shows friendly message and redirects
3. User completes CAPTCHA on Formspree's secure page
4. Redirects back to success page after submission

To modify the form, edit `src/pages/contact.astro`. The form ID is defined in `astro.config.mjs`.

## Next Steps

1. **Verify Formspree Settings** - Ensure domain is set to "hardcodedlife.github.io" (with 'd')
2. **Add content** - Create new blog posts in `src/content/blog/`
3. **Customize** - Update contact information and about page
4. **Add comments** - Set up Giscus for blog comments
5. **Optional** - Consider disabling CAPTCHA in Formspree for better user experience

## Troubleshooting

The contact form has been thoroughly tested and debugged:
- ✅ Environment variables properly injected at build time
- ✅ TypeScript errors resolved with proper declarations
- ✅ CAPTCHA support with intelligent fallback
- ✅ Domain configuration verified
- ✅ All HTTP error codes handled gracefully
