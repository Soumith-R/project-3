import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('🔍 Testing Gmail Configuration...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '[PROVIDED]' : '[MISSING]');
console.log('ORGANIZATION_EMAIL:', process.env.ORGANIZATION_EMAIL);

const testEmailConfiguration = async () => {
  try {
    console.log('\n📧 Creating transporter...');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('✅ Transporter created successfully');

    console.log('\n🔌 Verifying connection...');
    await transporter.verify();
    console.log('✅ Connection verified successfully');

    console.log('\n📤 Sending test email...');
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ORGANIZATION_EMAIL || process.env.EMAIL_USER,
      subject: 'Test Email - IHRCDPO Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Email Configuration Test</h2>
          <p>This is a test email to verify that the email configuration is working correctly.</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p><strong>From:</strong> ${process.env.EMAIL_USER}</p>
          <p><strong>To:</strong> ${process.env.ORGANIZATION_EMAIL || process.env.EMAIL_USER}</p>
          <hr>
          <p style="color: #059669;">✅ If you receive this email, the configuration is working!</p>
        </div>
      `,
      text: `
Test Email - IHRCDPO Website

This is a test email to verify that the email configuration is working correctly.

Timestamp: ${new Date().toISOString()}
From: ${process.env.EMAIL_USER}
To: ${process.env.ORGANIZATION_EMAIL || process.env.EMAIL_USER}

✅ If you receive this email, the configuration is working!
      `.trim()
    };

    const result = await transporter.sendMail(testMailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);

  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error type:', error.name);
    console.error('Error message:', error.message);
    
    if (error.code) {
      console.error('Error code:', error.code);
    }
    
    if (error.responseCode) {
      console.error('Response code:', error.responseCode);
    }

    // Specific Gmail error handling
    if (error.message.includes('Invalid login')) {
      console.log('\n💡 Troubleshooting steps for Gmail:');
      console.log('1. Make sure 2-Step Verification is enabled on your Google account');
      console.log('2. Generate an App Password specifically for this application');
      console.log('3. Use the App Password (16 characters) instead of your regular password');
      console.log('4. Check that the email address is correct');
    }
    
    if (error.message.includes('EAUTH') || error.message.includes('authentication')) {
      console.log('\n💡 Authentication failed. Please check:');
      console.log('- EMAIL_USER is your complete Gmail address');
      console.log('- EMAIL_PASS is your App Password (not regular password)');
      console.log('- App Password is exactly 16 characters without spaces');
    }
  }
};

testEmailConfiguration();
