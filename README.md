# Traders@MIT Website

The official website for **Traders@MIT**, MIT's undergraduate quantitative finance club. We host the annual intercollegiate trading competition and build a community around quantitative finance, trading, and technology.

**Live site:** [traders.mit.edu](https://traders.mit.edu)

## Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) with [Svelte 5](https://svelte.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [bits-ui](https://bits-ui.com/)
- **Build:** [Vite](https://vitejs.dev/) with static adapter
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- npm

### Installation

```sh
git clone https://github.com/traders/traders.github.io.git
cd traders.github.io
npm install
```

### Development

Start the local dev server:

```sh
npm run dev
```

The site will be available at `http://localhost:5173`. Changes are reflected instantly via HMR.

### Type Checking

```sh
npm run check
```

### Build

Generate a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Project Structure

```
src/
├── routes/              # SvelteKit pages
│   ├── +layout.svelte   # Root layout (nav, footer)
│   ├── +page.svelte     # Homepage
│   ├── about/           # Team & mission
│   ├── competition/     # Annual trading competition
│   ├── sponsors/        # Sponsor tiers & logos
│   └── join/            # Recruitment info
├── lib/
│   ├── assets/          # Images (logos, headshots, sponsors)
│   ├── data/            # Members, sponsors, competition data
├── app.css              # Global styles & Tailwind theme
└── app.html             # HTML shell
static/                  # Static files (CNAME, robots.txt)
scripts/                 # Headshot processing utilities
.github/workflows/       # CI/CD pipeline
```

## Deployment

Deployment is fully automated. Pushing to `main` triggers the GitHub Actions workflow which builds the site and deploys it to GitHub Pages at [traders.mit.edu](https://traders.mit.edu).

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run check` to ensure there are no type errors
4. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).
