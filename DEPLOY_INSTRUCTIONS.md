# Deploy AITRON to GitHub Pages - Quick Start

Your project has been successfully configured for GitHub Pages deployment. Follow these steps to go live:

## Step 1: Push to GitHub

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

## Step 2: Configure GitHub Pages (One-time setup)

1. Go to your GitHub repository: https://github.com/diyashah22cse-code/aitron
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `gh-pages` (will auto-create after first workflow run)
   - **Folder**: Select `/ (root)`
4. Click **Save**

## Step 3: Wait for Deployment

- GitHub Actions will automatically run the workflow (visible in the **Actions** tab)
- Once complete (green checkmark), your site will be live at:

```
https://diyashah22cse-code.github.io/aitron
```

## What's Configured

✅ **Static Export**: Next.js is now set to generate static HTML files  
✅ **Automated Workflow**: GitHub Actions builds and deploys on every push to `main`  
✅ **Base Path**: Site is configured for `/aitron` subdirectory  
✅ **SEO Ready**: robots.txt and sitemap.xml are generated

## Files Changed

- `next.config.js` - Added `output: 'export'` for static generation
- `package.json` - Added export and deploy scripts
- `.github/workflows/deploy.yml` - Automated deployment workflow
- `src/app/robots.ts` - Added `dynamic = 'force-static'`
- `src/app/sitemap.ts` - Added `dynamic = 'force-static'`

## Manual Deployment (Alternative)

If you prefer to deploy locally:

```bash
npm run build
npm run deploy
```

Requires `gh-pages` package (already installed).

## Troubleshooting

**Build is failing?**

- Check that `npm install` completed successfully
- Verify Node.js 20+ is installed: `node --version`

**Site not updating after push?**

- Check GitHub Actions tab to see if workflow ran
- If stuck, go to Settings → Pages → Change source to "None" then back to branch

**Need a custom domain?**

- Create a file `public/CNAME` with your domain name
- Update GitHub Pages settings to your custom domain

---

**Live Site**: https://diyashah22cse-code.github.io/aitron
