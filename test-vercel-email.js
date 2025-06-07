// Test data for different form types on Vercel deployment
const testForms = [
  {
    name: "About Us Form",
    data: {
      firstName: "John",
      lastName: "Doe", 
      email: "john.doe@example.com",
      phone: "123-456-7890",
      message: "Test message from About Us form - Vercel deployment",
      source: "about"
    }
  },
  {
    name: "Contact Form",
    data: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com", 
      phone: "098-765-4321",
      subject: "Test Contact Inquiry",
      message: "Test message from Contact form - Vercel deployment",
      source: "contact"
    }
  },
  {
    name: "Get Involved Form",
    data: {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      phone: "555-123-4567", 
      subject: "I want to volunteer",
      message: "Test message from Get Involved form - Vercel deployment",
      source: "get-involved"
    }
  }
];

async function testVercelEmailAPI(baseUrl) {
  console.log(`🚀 Testing Vercel Email API at: ${baseUrl}\n`);
  
  // First test health check
  try {
    const healthResponse = await fetch(`${baseUrl}/api/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health Check:', healthData);
  } catch (error) {
    console.log('❌ Health Check Failed:', error.message);
    console.log('Check if your Vercel deployment is live and environment variables are set\n');
    return;
  }

  // Test each form type
  for (const testForm of testForms) {
    console.log(`\n📧 Testing ${testForm.name}...`);
    
    try {
      const response = await fetch(`${baseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testForm.data)
      });

      if (response.ok) {
        const result = await response.json();
        console.log(`✅ ${testForm.name} - Success:`, result.message);
      } else {
        const error = await response.json();
        console.log(`❌ ${testForm.name} - Failed:`, error.error);
        if (error.details) {
          console.log(`   📝 Details:`, error.details);
        }
        console.log(`   🔍 HTTP Status:`, response.status);
      }
    } catch (error) {
      console.log(`❌ ${testForm.name} - Error:`, error.message);
    }
  }

  console.log('\n🏁 Testing completed!');
  console.log('\nIf tests failed, check:');
  console.log('1. Vercel environment variables are set correctly');
  console.log('2. Gmail App Password is working');
  console.log('3. API functions are deployed properly');
}

// Get URL from command line argument or prompt user
const args = process.argv.slice(2);
if (args.length > 0) {
  const baseUrl = args[0].replace(/\/$/, ''); // Remove trailing slash
  testVercelEmailAPI(baseUrl);
} else {
  console.log('❌ Please provide your Vercel deployment URL:');
  console.log('Usage: node test-vercel-email.js https://your-site.vercel.app');
  console.log('\nExample:');
  console.log('node test-vercel-email.js https://figma-website-abc123.vercel.app');
}
