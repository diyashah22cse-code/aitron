# GitHub Pages Deployment Guide

This project is now configured to deploy to GitHub Pages using Next.js static export.

## Prerequisites

- GitHub repository
- Node.js 20+ installed locally
- Git configured

## Local Setup

1. **Install dependencies** (if not done):

   ```bash
   npm install
   ```

2. **Build the project locally**:

   ```bash
   npm run build
   ```

   This generates a static `out/` directory ready for deployment.

3. **Test locally** (optional):
   ```bash
   npx http-server out -p 8080
   ```
   Then visit `http://localhost:8080`

## Deployment Options

### Option A: Automatic Deployment (Recommended)

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically deploys on every push to `main`:

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

2. **GitHub setup**:

   - Go to your repository → **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: `Deploy from a branch`
     - Branch: `gh-pages` (will be auto-created by the workflow)
     - Folder: `/ (root)`

3. **Check deployment**:
   - GitHub Actions will automatically run the workflow
   - Once complete, your site is live at: `https://diyashah22cse-code.github.io/aitron`

### Option B: Manual Deployment

If you prefer to deploy manually:

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   (This requires `gh` CLI or `gh-pages` package configured)

## Configuration

- **Base Path**: The site is configured to deploy to `/aitron` subdirectory (repo name). If you change the repo name or deploy to a custom domain, update `NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy.yml`.

- **Custom Domain** (optional):
  - Add a `CNAME` file to the `public/` folder with your domain name
  - Update GitHub Pages settings to use your custom domain

## Troubleshooting

- **Build fails**: Check that all dependencies are installed (`npm install`)
- **Pages not updating**: Clear GitHub Pages cache by disabling and re-enabling in repository settings
- **Assets not loading**: Verify the base path is correctly set in `next.config.js`

## Environment Variables

If you need environment variables in your build, add them as GitHub Secrets:

1. Go to repository → **Settings** → **Secrets and variables** → **Actions**
2. Create secrets (e.g., `NEXT_PUBLIC_API_KEY`)
3. Reference in `.github/workflows/deploy.yml` as `${{ secrets.YOUR_SECRET_NAME }}`

## Live Site

Once deployed, your site will be accessible at:

- **Repository Pages**: `https://diyashah22cse-code.github.io/aitron`
- **Custom Domain** (if configured): `https://your-domain.com`
