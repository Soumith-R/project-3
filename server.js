import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your app password (for Gmail, use App Password)
    },
  });
};

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message, subject, source } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: firstName, lastName, email, and message are required' 
      });
    }

    const transporter = createTransporter();

    // Determine email content based on source page
    let emailSubject = '';
    let emailContent = '';
    
    if (source === 'get-involved') {
      emailSubject = `🤝 New Get Involved Form Submission - ${firstName} ${lastName}`;
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🤝 Get Involved Form Submission</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Someone wants to join our mission!</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #dc2626; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Contact Information</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 10px 0;"><strong style="color: #333;">👤 Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #333;">✉️ Email:</strong> <a href="mailto:${email}" style="color: #dc2626;">${email}</a></p>
              ${phone ? `<p style="margin: 0 0 10px 0;"><strong style="color: #333;">📞 Phone:</strong> <a href="tel:${phone}" style="color: #dc2626;">${phone}</a></p>` : ''}
              ${subject ? `<p style="margin: 0;"><strong style="color: #333;">📋 Subject:</strong> ${subject}</p>` : ''}
            </div>

            <h3 style="color: #dc2626; margin-bottom: 15px;">💬 Their Message:</h3>
            <div style="background-color: white; padding: 20px; border-left: 4px solid #dc2626; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background-color: #fef2f2; border-radius: 8px; border: 1px solid #fecaca;">
              <h4 style="margin: 0 0 10px 0; color: #dc2626;">🎯 Next Steps:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #555;">
                <li>Reply to this person within 24 hours</li>
                <li>Discuss volunteer opportunities that match their interests</li>
                <li>Send them information about upcoming events or projects</li>
                <li>Add their contact to your volunteer database</li>
              </ul>
            </div>
          </div>
          
          <div style="background-color: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; font-size: 14px;">📅 Received: ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">International Human Rights and Domestic Protection Organization</p>
          </div>
        </div>
      `;
    } else {
      // Contact Us form
      emailSubject = `📧 New Contact Form Submission - ${firstName} ${lastName}`;
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background-color: #0E0E30; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">📧 Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Someone reached out through your website</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #0E0E30; margin-bottom: 20px; border-bottom: 2px solid #0E0E30; padding-bottom: 10px;">Contact Information</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 10px 0;"><strong style="color: #333;">👤 Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #333;">✉️ Email:</strong> <a href="mailto:${email}" style="color: #0E0E30;">${email}</a></p>
              ${phone ? `<p style="margin: 0 0 10px 0;"><strong style="color: #333;">📞 Phone:</strong> <a href="tel:${phone}" style="color: #0E0E30;">${phone}</a></p>` : ''}
              ${subject ? `<p style="margin: 0;"><strong style="color: #333;">📋 Subject:</strong> ${subject}</p>` : ''}
            </div>

            <h3 style="color: #0E0E30; margin-bottom: 15px;">💬 Their Message:</h3>
            <div style="background-color: white; padding: 20px; border-left: 4px solid #0E0E30; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background-color: #f0f0ff; border-radius: 8px; border: 1px solid #c7c7ff;">
              <h4 style="margin: 0 0 10px 0; color: #0E0E30;">💡 Quick Actions:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #555;">
                <li>Click the email link above to reply directly</li>
                <li>Use the phone number to call them back</li>
                <li>Add this contact to your CRM system</li>
                <li>Set a follow-up reminder</li>
              </ul>
            </div>
          </div>
          
          <div style="background-color: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; font-size: 14px;">📅 Received: ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">International Human Rights and Domestic Protection Organization</p>
          </div>
        </div>
      `;
    }

    // Email options
    const mailOptions = {
      from: `"IHRDPO Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ORGANIZATION_EMAIL || process.env.EMAIL_USER, // Organization head's email
      subject: emailSubject,
      html: emailContent,
      replyTo: email, // Allow direct reply to the person who submitted the form
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log(`✅ Email sent successfully for ${source || 'contact'} form submission from ${firstName} ${lastName}`);
    res.json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Email server is running!', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);  console.log(`📧 Email service: ${process.env.EMAIL_USER ? 'Configured' : '⚠️  Not configured - check .env file'}`);
  console.log(`🎯 Organization email: ${process.env.ORGANIZATION_EMAIL || process.env.EMAIL_USER || '⚠️  Not set'}`);
});
