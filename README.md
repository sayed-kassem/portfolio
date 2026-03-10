# Sayed Portfolio v2

A redesigned personal portfolio built with React 18, Lenis smooth scroll, and CSS animations.

## Stack

- **React 18** with functional components & hooks
- **Lenis** — buttery smooth scrolling
- **React Router v6** — client-side routing with page transitions
- **React Helmet Async** — document head management
- **Syne + DM Sans** — Google Fonts pairing
- **CSS custom properties** — full dark/light theme system

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

## Project Structure

```
src/
├── App.js                  # Root app, Lenis init
├── index.js                # React DOM entry
├── content_option.js       # All site data (edit this!)
├── app/
│   └── index.jsx           # Routes + page transitions
├── components/
│   ├── Navbar.jsx          # Fixed nav, theme toggle, mobile menu
│   └── SocialIcons.jsx     # Floating social links
├── hooks/
│   ├── useLenis.js         # Smooth scroll setup
│   ├── useTheme.js         # Dark/light toggle (persisted)
│   └── useReveal.js        # IntersectionObserver scroll reveals
├── pages/
│   ├── home/               # Hero, services
│   ├── about/              # Bio, timeline, skill bars
│   ├── portfolio/          # Project cards grid
│   └── contact/            # Contact form + info
└── styles/
    ├── global.css          # Variables, reset, base, page transitions
    ├── navbar.css          # Navigation styles
    ├── home.css            # Hero & home-specific styles
    └── pages.css           # About, Portfolio, Contact styles
```

## Customization

All content lives in `src/content_option.js` — edit your name, bio, projects, skills, and contact details there.

To add EmailJS to the contact form, install `@emailjs/browser` and update `src/pages/contact/index.jsx`.
