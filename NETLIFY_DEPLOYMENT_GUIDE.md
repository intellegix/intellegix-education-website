# Netlify Deployment Setup Guide

## Overview
This guide will help you deploy the Intellegix Education website from GitHub to Netlify with automatic deployments and custom domain configuration for intellegixeducation.org.

## Prerequisites
- GitHub repository: `intellegix/intellegix-education-website`
- Domain: `intellegixeducation.org` (you'll need to update nameservers)

## Step 1: Create Netlify Account and Connect GitHub

### 1.1 Sign Up for Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" and choose "GitHub" for seamless integration
3. Authorize Netlify to access your GitHub repositories

### 1.2 Import GitHub Repository
1. From Netlify dashboard, click "Import from Git"
2. Choose "GitHub" as your Git provider
3. Find and select `intellegix/intellegix-education-website`
4. Netlify will automatically detect the build settings from `netlify.toml`

### 1.3 Verify Build Settings
Netlify should automatically configure:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node.js version**: 20

If not auto-detected, manually set these values.

## Step 2: Configure GitHub Secrets

### 2.1 Get Netlify Tokens
1. In Netlify dashboard, go to **User settings** → **Applications** → **Personal access tokens**
2. Click "New access token" and create a token with full access
3. Copy the token (you'll need this for GitHub)

### 2.2 Get Netlify Site ID
1. In your Netlify site dashboard, go to **Site settings** → **General**
2. Copy the "Site ID" (looks like: `abc123def-4567-8901-2345-6789abcdef01`)

### 2.3 Add Secrets to GitHub Repository
1. Go to your GitHub repository: `github.com/intellegix/intellegix-education-website`
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these repository secrets:
   - **Name**: `NETLIFY_AUTH_TOKEN` **Value**: [your Netlify access token]
   - **Name**: `NETLIFY_SITE_ID` **Value**: [your site ID from step 2.2]

## Step 3: Configure Custom Domain

### 3.1 Add Domain to Netlify
1. In Netlify site dashboard, go to **Domain settings**
2. Click "Add custom domain"
3. Enter: `intellegixeducation.org`
4. Click "Verify" and then "Add domain"

### 3.2 Update Domain Nameservers
Netlify will provide you with nameservers like:
```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

**Update your domain registrar:**
1. Log into your domain registrar (where you purchased intellegixeducation.org)
2. Find "DNS Management" or "Nameservers" section
3. Replace existing nameservers with Netlify's nameservers
4. Save changes (DNS propagation takes 24-48 hours)

### 3.3 Enable HTTPS
1. In Netlify **Domain settings**, scroll to "HTTPS"
2. Netlify automatically provides free SSL certificates
3. Enable "Force HTTPS" to redirect all HTTP traffic to HTTPS

## Step 4: Test Deployment

### 4.1 Trigger First Deployment
1. Make a small change to your GitHub repository (edit README.md)
2. Commit and push to the `master` branch
3. GitHub Actions will automatically trigger
4. Monitor deployment in Netlify dashboard

### 4.2 Verify Content
Once deployed, check:
- ✅ `https://intellegixeducation.org` shows new learner-focused content
- ✅ Homepage displays: "Open Source Educational Technology for Lifelong Learners"
- ✅ All pages load correctly
- ✅ HTTPS is working
- ✅ Mobile responsiveness

## Step 5: Monitor and Maintain

### 5.1 Automatic Deployments
- Every push to `master` branch automatically deploys
- Deployment typically completes in 2-3 minutes
- Failed deployments show in Netlify dashboard with error logs

### 5.2 Rollback if Needed
1. In Netlify dashboard, go to **Deploys**
2. Find the last working deployment
3. Click "Publish deploy" to rollback instantly

## Expected Results

### ✅ Success Criteria
- **Automatic deployment**: Push to GitHub → Live site updates
- **Fast performance**: Lighthouse scores 90+
- **Global CDN**: Fast loading worldwide
- **Custom domain**: intellegixeducation.org works with HTTPS
- **Content transformation**: All learner-focused messaging live

### 🎯 Final Verification
Visit `https://intellegixeducation.org` and confirm:
1. Homepage shows learner-focused hero message
2. Navigation shows "Start Learning" instead of "For Educators"
3. All program pages display transformed content
4. Fast loading times and mobile responsiveness
5. Secure HTTPS connection

## Troubleshooting

### Build Failures
- Check GitHub Actions logs for error details
- Verify all dependencies in `package.json`
- Ensure Node.js version compatibility

### DNS Issues
- DNS propagation can take up to 48 hours
- Use [DNS Checker](https://dnschecker.org) to verify propagation
- Check nameservers are correctly set at registrar

### Performance Issues
- Netlify includes automatic CDN and optimization
- Monitor Core Web Vitals in Netlify dashboard
- Use browser dev tools to identify bottlenecks

## Support
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Actions Logs**: Check repository Actions tab for deployment details
- **DNS Propagation**: [whatsmydns.net](https://www.whatsmydns.net)

---

**Result**: Your intellegixeducation.org website will automatically pull and deploy the latest changes from GitHub whenever you push to the master branch, displaying the new learner-focused content worldwide with enterprise-grade performance and security.