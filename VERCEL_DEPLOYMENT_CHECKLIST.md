# Vercel Deployment Checklist

## ✅ Completed Steps:
- [x] Created Vercel-compatible API routes (`/api/send-email.js`, `/api/health.js`)
- [x] Fixed localhost URLs in form components
- [x] Updated `vercel.json` configuration
- [x] Pushed changes to GitHub repository
- [x] Created Vercel testing script (`test-vercel-email.js`)

## 🔄 Manual Steps Required:

### 1. Configure Environment Variables in Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Find and click on your project
3. Navigate to **Settings → Environment Variables**
4. Add these variables:
   ```
   EMAIL_USER = backupsoumith@gmail.com
   EMAIL_PASS = your-gmail-app-password
   ORGANIZATION_EMAIL = soumithreddy51155@gmail.com
   NODE_ENV = production
   ```
5. Click **Save** after adding each variable

### 2. Wait for Deployment
- Check your Vercel dashboard for deployment status
- Should auto-deploy when you push to GitHub
- Look for green checkmark indicating successful deployment

### 3. Test Your Deployment
Once deployed, run:
```bash
node test-vercel-email.js https://your-site-name.vercel.app
```

Replace `your-site-name.vercel.app` with your actual Vercel URL.

## 🚨 Troubleshooting

### If Email Sending Fails:
1. **Check Environment Variables**: Make sure they're set correctly in Vercel
2. **Verify Gmail App Password**: Test it manually or regenerate
3. **Check Function Logs**: Go to Vercel Dashboard → Functions → View Logs
4. **Test Locally First**: Run `npm run server` and `node test-email.js` to ensure it works locally

### If API Routes Don't Work:
1. **Check Vercel Function Logs**: Dashboard → Your Project → Functions Tab
2. **Verify API Routes**: Make sure `/api/send-email.js` and `/api/health.js` are in the repo
3. **Check Import Syntax**: Ensure ES6 imports are used (not CommonJS)

## 🎯 Success Indicators:
- [ ] Health check returns 200 status
- [ ] All three form types send emails successfully
- [ ] Emails received with correct styling and context
- [ ] No console errors in browser

## 📝 Next Steps After Success:
1. Test all three contact forms on your live site
2. Verify emails are received with proper formatting
3. Update any documentation or README files
4. Consider adding email notifications for form submissions
