# AI Engineer Portfolio

Premium portfolio site for Subhash Kumar Singh, built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, and React Router.

## What is included

- Premium single-page portfolio experience with scroll-aware navigation
- Featured projects with detailed modals
- JSON-driven "Currently Building" section
- GitHub stats area with live public API fetching
- Markdown-powered blog articles
- Accessible contact form with EmailJS fallback
- SEO metadata, social preview assets, and deployment support

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Create your environment file
   ```bash
   copy .env.example .env
   ```
3. Update the values in `.env`
4. Start the dev server
   ```bash
   npm run dev
   ```

## Environment variables

- `VITE_SITE_URL`
- `VITE_CONTACT_EMAIL`
- `VITE_GITHUB_USERNAME`
- `VITE_LINKEDIN_URL`
- `VITE_RESUME_URL`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Deployment

Deploy on Vercel as a static Vite app.

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Set the environment variables above.
4. Build command: `npm run build`
5. Output directory: `dist`

## Notes

- Put the final resume file at `public/resume.pdf` or point `VITE_RESUME_URL` to the correct file.
- Replace placeholder social links with your real profiles before publishing.
- `public/sitemap.xml` and `public/robots.txt` are generated from the site URL during build.
