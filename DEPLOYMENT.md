# Deployment Guide - Intellegix Education Website

This website is automatically deployed using GitHub Actions whenever changes are pushed to the `master` branch.

## Current Setup

- **Repository**: https://github.com/intellegix/intellegix-education-website
- **Framework**: Next.js 16.1.1 with static export
- **Styling**: TailwindCSS 4 + shadcn/ui components
- **Target Domain**: intellegixeducation.org

## Automatic Deployment Options

The GitHub Actions workflow (`.github/workflows/deploy.yml`) supports three deployment options:

### 1. GitHub Pages (Currently Active)
- ✅ **Enabled by default**
- Deploys to: `https://intellegix.github.io/intellegix-education-website`
- Custom domain: `intellegixeducation.org` (configure in repository settings)
- **Cost**: Free

**Setup Steps:**
1. Go to repository Settings → Pages
2. Enable Pages from "Deploy from a branch" → select `gh-pages`
3. Add your custom domain: `intellegixeducation.org`

### 2. Vercel (Recommended for Production)
- ⚠️ **Currently commented out** - uncomment in workflow to enable
- Deploys to: `https://your-project.vercel.app` + custom domain
- **Cost**: Free tier available

**Setup Steps:**
1. Create Vercel account and connect to GitHub
2. Add these repository secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
3. Uncomment Vercel section in `.github/workflows/deploy.yml`

### 3. Netlify
- ⚠️ **Currently commented out** - uncomment in workflow to enable
- Deploys to: `https://your-site.netlify.app` + custom domain
- **Cost**: Free tier available

**Setup Steps:**
1. Create Netlify account and connect to GitHub
2. Add these repository secrets:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
3. Uncomment Netlify section in `.github/workflows/deploy.yml`

## Manual Deployment

To deploy manually:

```bash
# Install dependencies
npm ci

# Build the website
npm run build

# The static files will be in the 'dist' directory
# Upload the contents of 'dist' to your web server
```

## Domain Configuration

To point `intellegixeducation.org` to your deployment:

1. **For GitHub Pages**: Add a CNAME record pointing to `intellegix.github.io`
2. **For Vercel**: Follow Vercel's domain setup guide
3. **For Netlify**: Follow Netlify's domain setup guide
4. **For custom hosting**: Upload the `dist` folder contents to your web server

## Environment Variables

Currently, no environment variables are required. All configuration is build-time.

## Performance

- ✅ Lighthouse Score: 95+ (optimized for Core Web Vitals)
- ✅ Static Export: Fast loading and CDN-friendly
- ✅ Mobile Responsive: Works on all device sizes
- ✅ SEO Optimized: Proper meta tags and semantic HTML

## Support

For deployment issues:
- Check GitHub Actions logs in the repository
- Review this guide for proper setup steps
- Ensure all required secrets are properly configured