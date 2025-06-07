// Test data for different form types
const testForms = [
  {
    name: "About Us Form",
    data: {
      firstName: "John",
      lastName: "Doe", 
      email: "john.doe@example.com",
      phone: "123-456-7890",
      message: "Test message from About Us form",
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
      message: "Test message from Contact form",
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
      message: "Test message from Get Involved form",
      source: "get-involved"
    }
  }
];

async function testEmailAPI() {
  console.log('🚀 Testing Email API...\n');
  
  // First test health check
  try {
    const healthResponse = await fetch('http://localhost:5000/api/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health Check:', healthData);
  } catch (error) {
    console.log('❌ Health Check Failed:', error.message);
    console.log('Make sure the server is running with: npm run server\n');
    return;
  }

  // Test each form type
  for (const testForm of testForms) {
    console.log(`\n📧 Testing ${testForm.name}...`);
    
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testForm.data)
      });      if (response.ok) {
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
  console.log('\nNOTE: To actually send emails, update your .env file with:');
  console.log('- EMAIL_USER: Your Gmail address');
  console.log('- EMAIL_PASS: Your Gmail App Password');
  console.log('- ORGANIZATION_EMAIL: Recipient email address');
}

// Run the tests
testEmailAPI();
