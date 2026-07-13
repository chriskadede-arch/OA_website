# Oceans Alive Website - Build Instructions

## ⚡ Quick Start for Local Development

### For "Go Live" / Local Testing:

**Option 1: Development Server (RECOMMENDED)**
```bash
cd oceans-alive
npm run dev
```
- Opens at `http://localhost:3000`
- No base path issues
- Hot reload enabled
- **Use this for daily development!**

**Option 2: VS Code Live Server**
If you want to use VS Code's "Go Live" button:
1. First build the local version:
   ```bash
   npm run build:local
   ```
2. Open `oceans-alive/out/index.html` in VS Code
3. Right-click and select "Open with Live Server"
4. The `.vscode/settings.json` is already configured to serve from `/out` folder

---

## 📦 Build Commands

### 1. Local Development Server
```bash
npm run dev
```
- No build needed
- Hot reload
- Opens at `http://localhost:3000`

### 2. Local Static Build
```bash
npm run build:local
```
- Builds to `/out` folder
- **No base path** (works with Live Server)
- Test production build locally
- Serve with: `npx serve out` or VS Code Live Server

### 3. GitHub Pages Build
```bash
npm run build:github
```
- Builds to `/out` folder
- **Includes `/OA_website` base path**
- Automatically triggered by GitHub Actions
- Deployed to: https://chriskadede-arch.github.io/OA_website/

---

## 🎯 Which Command to Use?

| Scenario | Command | Notes |
|----------|---------|-------|
| Daily development | `npm run dev` | ⭐ Best option |
| Test before pushing | `npm run dev` | See changes instantly |
| Test with Live Server | `npm run build:local` then open `out/index.html` | Only if needed |
| Deploy to GitHub | Push to `main` branch | Auto-deploys |

---

## 🚀 Deployment to GitHub Pages

**Automatic deployment on every push to `main`:**

1. You edit files locally
2. You commit and push to `main` branch
3. GitHub Actions automatically:
   - Runs `npm run build:github`
   - Deploys `/out` folder to GitHub Pages
4. Site updates at https://chriskadede-arch.github.io/OA_website/

**No manual deployment needed!**

---

## 🔧 Why Different Builds?

- **Local (`npm run dev` & `build:local`)**: No base path needed because you're serving from root
- **GitHub Pages (`build:github`)**: Needs `/OA_website` base path because the site is hosted in a subdirectory

Both show the **same website**, just with different URL structures!

---

## 🐛 Troubleshooting

### "Cannot GET /oceans-alive/out/index.html" error
- **Solution**: Use `npm run dev` instead of Live Server
- Or: Make sure you built with `npm run build:local` first

### Images not showing on GitHub Pages
- This is automatically handled by `build:github`
- Images work differently locally vs GitHub Pages

### Live Server not working
- **Best solution**: Use `npm run dev` instead
- Alternative: Run `npm run build:local` first, then open `out/index.html` with Live Server
