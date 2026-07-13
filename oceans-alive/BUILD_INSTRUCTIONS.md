# Oceans Alive Website - Build Instructions

## Development & Deployment Modes

### 1. Local Development (Go Live)
**Use this for local testing with "Go Live" or development server**

```bash
npm run dev
```
- Opens at `http://localhost:3000`
- No base path
- Hot reload enabled
- Perfect for local development and testing

### 2. Local Static Build (Testing production build locally)
**Use this to test the production build locally before deploying**

```bash
npm run build:local
```
- Builds to `/out` folder
- No base path (same as dev)
- Can serve with: `npx serve out`
- Opens at `http://localhost:3000` (or serve's port)

### 3. GitHub Pages Build
**Use this for deploying to GitHub Pages**

```bash
npm run build:github
```
- Builds to `/out` folder
- Includes `/OA_website` base path
- Automatically triggered by GitHub Actions when pushing to main
- Deployed to: https://chriskadede-arch.github.io/OA_website/

## Why Different Builds?

- **Local (dev & build:local)**: No base path needed because you're serving from the root
- **GitHub Pages (build:github)**: Needs `/OA_website` base path because the site is hosted at a subdirectory

## Quick Commands

| Command | Purpose | Where It Runs |
|---------|---------|---------------|
| `npm run dev` | Development server | Local only |
| `npm run build:local` | Production build for local testing | Local only |
| `npm run build:github` | Production build for GitHub Pages | GitHub Actions |
| `npm run start` | Start production server (after `npm run build`) | Local only |

## Deployment

When you push to the `main` branch:
1. GitHub Actions automatically runs `build:github`
2. Deploys the `/out` folder to GitHub Pages
3. Site updates at https://chriskadede-arch.github.io/OA_website/

No manual deployment needed!
