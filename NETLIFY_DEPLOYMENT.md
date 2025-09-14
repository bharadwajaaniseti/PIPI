# Netlify Deployment Guide

## 🚀 Deploying to Netlify

Your Next.js application is already configured for static export, making it perfect for Netlify deployment.

### Step 1: Build Configuration

In your Netlify dashboard:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `out`
3. **Node Version**: `18` (or latest LTS)

### Step 2: Environment Variables

Add these environment variables in Netlify:

```
NEXT_PUBLIC_SITE_URL=https://your-netlify-site.netlify.app
```

### Step 3: Forms Setup

Your contact and quote forms are already configured for Netlify Forms. After deployment:

1. Go to **Site Settings** → **Forms**
2. Enable form detection
3. Configure notifications to receive form submissions via email

### Step 4: Custom Domain (Optional)

- Go to **Site Settings** → **Domain Management**
- Add your custom domain
- Configure DNS settings as instructed

### Step 5: Build & Deploy

1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy your site
4. Your site will be live at `https://your-site-name.netlify.app`

## 📧 Form Submissions

- Contact form submissions will be sent to your configured email
- Quote form submissions include all project details
- Check Netlify dashboard for form responses

## 🔧 Troubleshooting

### Build Issues
- Ensure `output: 'export'` is set in `next.config.js`
- Check that all dependencies are installed
- Verify Node.js version compatibility

### Form Issues
- Forms won't work in local development
- Test forms after deployment
- Check Netlify Forms settings

### Performance
- Enable Netlify's CDN for faster loading
- Consider using Netlify's image optimization

## 📝 Notes

- API routes (`/api/*`) don't work with static exports
- Server-side features are converted to static generation
- All dynamic content is pre-rendered at build time

## 🎯 Next Steps

After deployment, consider:
- Setting up Netlify Analytics
- Configuring redirects and rewrites
- Adding Netlify Functions for dynamic features (if needed)
- Setting up automated deployments from your main branch