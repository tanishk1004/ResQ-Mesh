# Deploy ResQ-Mesh to Vercel

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

That's it! Vercel will:
1. Detect the project as a Vite app
2. Run the build command
3. Deploy the static files
4. Give you a live URL

---

## Option 2: Deploy via Vercel Dashboard

### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - ResQ-Mesh"

# Create new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/resq-mesh.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Vite configuration
5. Click **"Deploy"**

---

## Configuration

Vercel will automatically use:
- **Framework Preset**: Vite
- **Build Command**: `npm run vercel-build` (or `vite build`)
- **Output Directory**: `dist`
- **Install Command**: `npm install`

No additional configuration needed!

---

## Important Notes

### Backend Limitation
⚠️ **The Express/WebSocket server (`server/index.ts`) will NOT deploy to Vercel's static hosting.**

Vercel's free tier is optimized for static sites and serverless functions. The WebSocket server won't work in this deployment.

### What Works Without Backend
✅ All frontend functionality
✅ Landing page
✅ SOS interface
✅ Command dashboard
✅ Map visualization
✅ Simulation controls
✅ Demo data
✅ State management (React context)

### What Won't Work
❌ WebSocket real-time sync between multiple clients
❌ Backend API endpoints (not used in current implementation)

**Good news**: The app is designed to work entirely client-side, so all core features will work!

---

## Full Stack Deployment Options

If you need the backend server, use these platforms instead:

### Option A: Railway.app
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### Option B: Render.com
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect your GitHub repo
4. Build command: `npm install && npm run build`
5. Start command: `npm run dev:server`

### Option C: Fly.io
```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Login and launch
flyctl launch
flyctl deploy
```

### Option D: Heroku
```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create resq-mesh

# Deploy
git push heroku main
```

---

## After Deployment

### Your Live URLs
After deploying to Vercel, you'll get:
- **Production**: `https://resq-mesh.vercel.app`
- **Preview**: Auto-deployed for each git push

### Test Your Deployment
1. Visit your Vercel URL
2. Click "RUN DISASTER SIMULATION"
3. Explore the command dashboard
4. Verify all features work

### Share Your Project
- Demo URL: `https://resq-mesh.vercel.app`
- GitHub: `https://github.com/YOUR_USERNAME/resq-mesh`

---

## Troubleshooting

### Build Fails
**Issue**: Vercel build fails

**Solution**:
```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

### Map Tiles Not Loading
**Issue**: Map shows blank

**Solution**:
- Map tiles load from OpenStreetMap (internet required)
- Wait a few seconds for tiles to load
- Check browser console for CORS errors

### Environment Variables
If you need environment variables:

1. Go to Vercel project settings
2. Click "Environment Variables"
3. Add variables:
   - `VITE_API_URL` (if using external API)
   - etc.

---

## Custom Domain

### Add Your Domain
1. Go to Vercel project settings
2. Click "Domains"
3. Add your domain (e.g., `resqmesh.com`)
4. Update DNS records as instructed
5. SSL certificate auto-configured

---

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin main

# Vercel auto-deploys!
```

Every branch gets a preview URL automatically.

---

## Performance Optimization

### Already Optimized
✅ Vite build optimization
✅ Code splitting
✅ Tree shaking
✅ Minification
✅ Asset optimization

### Vercel Provides
✅ Global CDN
✅ Edge caching
✅ Automatic HTTPS
✅ Compression (gzip/brotli)

---

## Quick Deploy Commands

```bash
# One-time setup
npm install -g vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

## Example Deployment Flow

```bash
# 1. Build locally to verify
npm run build

# 2. Deploy to Vercel
vercel --prod

# 3. Get your URL
✓ Production: https://resq-mesh-abc123.vercel.app

# 4. Test the deployment
# Open URL in browser
# Run disaster simulation
# Verify everything works

# 5. Share with judges!
```

---

## Vercel Project Settings

Recommended settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x or 20.x

---

## Cost

**Vercel Free Tier includes**:
- ✅ Unlimited static hosting
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Custom domains

Perfect for hackathon demos!

---

## Alternative: Netlify

If you prefer Netlify:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

Or use Netlify's GitHub integration (same as Vercel).

---

## Final Checklist

Before deploying:
- [ ] Test build locally: `npm run build`
- [ ] Commit all changes: `git add . && git commit -m "Ready for deploy"`
- [ ] Push to GitHub (if using Vercel dashboard)
- [ ] Run `vercel --prod` (if using CLI)
- [ ] Test deployed URL
- [ ] Share with team/judges

---

## Support

**Vercel Documentation**: https://vercel.com/docs

**Vercel Community**: https://github.com/vercel/vercel/discussions

---

**Ready to deploy!** 🚀

Choose your method:
1. **Fastest**: `vercel --prod` (CLI)
2. **Easiest**: Import from GitHub (Dashboard)
3. **Full-stack**: Use Railway/Render instead

Good luck with your deployment! 🎉
