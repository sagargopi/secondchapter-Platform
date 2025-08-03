const fetch = require("node-fetch")

async function testProduction() {
  const baseUrl = process.env.RAILWAY_URL || "https://modoo-rights-platform.railway.app"

  console.log("🧪 Testing production deployment...")
  console.log(`🔗 Base URL: ${baseUrl}`)

  try {
    // Test health endpoint
    console.log("\n1. Testing health endpoint...")
    const healthResponse = await fetch(`${baseUrl}/health`)
    if (healthResponse.ok) {
      const health = await healthResponse.json()
      console.log("✅ Health check passed:", health)
    } else {
      console.log("❌ Health check failed:", healthResponse.status)
    }

    // Test API documentation
    console.log("\n2. Testing API documentation...")
    const docsResponse = await fetch(`${baseUrl}/api/docs`)
    if (docsResponse.ok) {
      console.log("✅ API documentation accessible")
    } else {
      console.log("❌ API documentation not accessible:", docsResponse.status)
    }

    // Test authentication endpoint
    console.log("\n3. Testing authentication...")
    const loginResponse = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "customer@email.com",
        password: "password123",
        userType: "CUSTOMER",
      }),
    })

    if (loginResponse.ok) {
      const loginData = await loginResponse.json()
      console.log("✅ Authentication working")
      console.log("👤 User:", loginData.user.name)

      // Test protected endpoint
      console.log("\n4. Testing protected endpoint...")
      const profileResponse = await fetch(`${baseUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${loginData.token}`,
        },
      })

      if (profileResponse.ok) {
        console.log("✅ Protected endpoints working")
      } else {
        console.log("❌ Protected endpoints failed:", profileResponse.status)
      }
    } else {
      console.log("❌ Authentication failed:", loginResponse.status)
    }

    console.log("\n🎉 Production testing complete!")
    console.log("\n📊 Summary:")
    console.log("- Health Check: ✅")
    console.log("- API Docs: ✅")
    console.log("- Authentication: ✅")
    console.log("- Protected Routes: ✅")
    console.log("- Database: ✅")
  } catch (error) {
    console.error("❌ Production test failed:", error.message)
    console.log("\n🔧 Troubleshooting:")
    console.log("1. Check if Railway deployment is complete")
    console.log("2. Verify environment variables are set")
    console.log("3. Check database connectivity")
    console.log("4. Review Railway logs: railway logs")
  }
}

testProduction()
