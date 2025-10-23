# HistoryMind Deployment Guide

## Automated Deployment Setup

Your HistoryMind website now has automated deployment configured! Here's how it works:

### 🚀 How It Works

1. **Push to main branch** → Automatically triggers deployment
2. **GitHub Actions** → Builds and optimizes your site
3. **GitHub Pages** → Deploys to `historymind.ai`

### ⏱️ Rebuild Timeline

- **Trigger**: Every push to the `main` branch
- **Build time**: ~2-3 minutes
- **Deployment time**: ~1-2 minutes
- **Total time**: ~3-5 minutes from push to live site

### 🔧 What Happens During Deployment

1. **Build Process**:
   - Copies all HTML, CSS, JS files
   - Copies data and sampled-pdfs directories
   - Adds cache-busting timestamps
   - Optimizes for production

2. **Deployment**:
   - Pushes to GitHub Pages
   - Updates your custom domain (historymind.ai)
   - Invalidates CDN cache

### 📝 Manual Deployment

You can also deploy manually:

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### 🔍 Monitoring Deployments

- Check deployment status: GitHub Actions tab in your repository
- View logs: Click on the latest workflow run
- Test site: Visit `https://historymind.ai` after deployment

### 🛠️ Configuration Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `build.js` - Build script for optimization
- `package.json` - Added build and deploy scripts

### 🚨 Troubleshooting

If deployment fails:
1. Check GitHub Actions logs
2. Ensure all files are committed
3. Verify GitHub Pages is enabled in repository settings
4. Check that your custom domain is properly configured

### 📊 Deployment History

You can view all deployments in:
- GitHub Actions → Deploy to GitHub Pages
- GitHub Pages settings in your repository
