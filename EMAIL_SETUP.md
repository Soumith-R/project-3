# Email Functionality Setup Guide

## Overview
This project now includes email functionality for contact forms. When users submit forms from different pages, their details are automatically sent to the organization head's email with appropriate context differentiation.

## Quick Start

### 1. Install Dependencies
```powershell
npm install
```

### 2. Configure Email Settings
Update the `.env` file with your actual email credentials:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
ORGANIZATION_EMAIL=recipient@example.com
PORT=5000
NODE_ENV=development
```

### 3. Start the Application
```powershell
# Start both frontend and backend servers
npm run dev:full
```

### 4. Test Email Functionality
```powershell
# First, start the server in another terminal
npm run server

# Then run the email tests
npm run test:email
```

## Detailed Setup Instructions

### Gmail App Password Setup
1. **Enable 2-Step Verification** on your Gmail account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Turn on 2-Step Verification if not already enabled

2. **Create App Password**:
   - In Security settings, find "App passwords"
   - Select "Mail" as the app
   - Copy the 16-character password generated
   - Use this password in the `EMAIL_PASS` field (not your regular Gmail password)

### Environment Configuration
Create or update the `.env` file in the project root:

```env
# Email Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password
ORGANIZATION_EMAIL=organization-head@example.com

# Server Configuration
PORT=5000
NODE_ENV=development
```

**Important:** 
- Use Gmail App Passwords instead of your regular password
- To generate an App Password: Gmail Settings → Security → 2-Step Verification → App passwords

### 2. Install Dependencies
Make sure all required dependencies are installed:

```bash
npm install
```

### 3. Start the Application
Run both frontend and backend servers:

```bash
# Start both servers concurrently
npm run dev:full

# Or start individually:
# Frontend only
npm run dev

# Backend only  
npm run server
```

## Email Functionality Details

### Form Sources
The system differentiates between three types of form submissions:

1. **About Us Page** (`source: "about"`)
   - Uses `ContactForm` component
   - Fields: First Name, Last Name, Email, Phone, Message
   - Email subject: "New Contact Form Submission from About Us Page"

2. **Contact Page** (`source: "contact"`)
   - Uses `ContactFormFull` component  
   - Fields: First Name, Last Name, Email, Phone, Subject, Message
   - Email subject: "New Contact Form Submission"

3. **Get Involved Page** (`source: "get-involved"`)
   - Uses `ContactFormFull` component
   - Fields: First Name, Last Name, Email, Phone, Subject, Message
   - Email subject: "New Get Involved Form Submission"

### Email Templates
Each form type has a unique HTML email template with:
- Distinctive styling and branding
- Form source identification
- All submitted form data
- Responsive design

### API Endpoints
- **POST** `/api/send-email` - Send contact form email
- **GET** `/api/health` - Health check endpoint

## Testing

### 1. Health Check
Verify the server is running:
```bash
curl http://localhost:5000/api/health
```

### 2. Test Email Sending
1. Configure your email credentials in `.env`
2. Start both servers with `npm run dev:full`
3. Navigate to any page with a contact form
4. Fill out and submit the form
5. Check the organization email for the message

## Troubleshooting

### Common Issues

1. **"Failed to send email" error**
   - Verify email credentials in `.env`
   - Ensure Gmail App Password is used (not regular password)
   - Check if 2-Step Verification is enabled on Gmail

2. **Server connection refused**
   - Ensure backend server is running on port 5000
   - Check if port 5000 is available
   - Verify firewall settings

3. **Form submission errors**
   - Check browser console for JavaScript errors
   - Verify API endpoint URLs are correct
   - Ensure both servers are running

### Logs
Server logs will show email sending status and any errors. Check the terminal where you ran `npm run server` for detailed information.

## Security Notes
- Never commit actual email credentials to version control
- Use environment variables for all sensitive configuration
- Consider using OAuth2 for production Gmail integration
- Implement rate limiting for production use
