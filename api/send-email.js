import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Generate HTML email template based on source
const generateEmailTemplate = (data, source) => {
  const { firstName, lastName, email, phone, subject, message } = data;
  
  const sourceConfig = {
    about: {
      title: "New Contact from About Us Page",
      color: "#3b82f6",
      bgColor: "#eff6ff",
      borderColor: "#3b82f6"
    },
    contact: {
      title: "New Contact Form Submission", 
      color: "#059669",
      bgColor: "#ecfdf5",
      borderColor: "#059669"
    },
    "get-involved": {
      title: "New Get Involved Submission",
      color: "#dc2626", 
      bgColor: "#fef2f2",
      borderColor: "#dc2626"
    }
  };

  const config = sourceConfig[source] || sourceConfig.contact;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${config.title}</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="background: linear-gradient(135deg, ${config.color} 0%, ${config.color}dd 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🎯 ${config.title}</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Someone wants to connect with your organization!</p>
        </div>
        
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: ${config.color}; margin-bottom: 20px; border-bottom: 2px solid ${config.color}; padding-bottom: 10px;">Contact Information</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 0 0 10px 0;"><strong style="color: #333;">👤 Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #333;">✉️ Email:</strong> <a href="mailto:${email}" style="color: ${config.color};">${email}</a></p>
            ${phone ? `<p style="margin: 0 0 10px 0;"><strong style="color: #333;">📞 Phone:</strong> <a href="tel:${phone}" style="color: ${config.color};">${phone}</a></p>` : ''}
            ${subject ? `<p style="margin: 0;"><strong style="color: #333;">📋 Subject:</strong> ${subject}</p>` : ''}
          </div>

          <h3 style="color: ${config.color}; margin-bottom: 15px;">💬 Their Message:</h3>
          <div style="background-color: white; padding: 20px; border-left: 4px solid ${config.color}; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: ${config.bgColor}; border-radius: 8px; border: 1px solid ${config.borderColor};">
            <h4 style="margin: 0 0 10px 0; color: ${config.color};">🎯 Next Steps:</h4>
            <ul style="margin: 0; padding-left: 20px; color: #555;">
              <li>Reply to this person within 24 hours</li>
              <li>Add their details to your contact database</li>
              <li>Follow up based on their inquiry type</li>
            </ul>
          </div>
        </div>

        <div style="background-color: #333; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">This email was sent from your organization's website contact form.</p>
          <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.7;">Form Source: ${source.charAt(0).toUpperCase() + source.slice(1)} Page</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, subject, message, source = 'contact' } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Generate subject based on source
    const subjectMap = {
      about: "New Contact from About Us Page",
      contact: "New Contact Form Submission",
      "get-involved": "New Get Involved Submission"
    };

    const emailSubject = subjectMap[source] || subjectMap.contact;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ORGANIZATION_EMAIL || process.env.EMAIL_USER,
      subject: emailSubject,
      html: generateEmailTemplate(req.body, source),
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not provided'}
Message: ${message}
Source: ${source}
      `.trim()
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully for ${source} form submission from ${firstName} ${lastName}`);
    res.json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
}
