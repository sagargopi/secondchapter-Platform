const { PrismaClient } = require("@prisma/client")

async function verifyConnection() {
  const prisma = new PrismaClient()

  try {
    console.log("🔍 Testing database connection...")

    // Test connection
    await prisma.$connect()
    console.log("✅ Database connection successful!")

    // Test query
    const userCount = await prisma.user.count()
    console.log(`📊 Found ${userCount} users in database`)

    // Show database info
    const result = await prisma.$queryRaw`SELECT version()`
    console.log("🗄️  Database version:", result[0].version)

    console.log("\n🎯 Connection Details:")
    console.log("- Host: maglev.proxy.rlwy.net")
    console.log("- Port: 50610")
    console.log("- Database: railway")
    console.log("- Status: Connected ✅")
  } catch (error) {
    console.error("❌ Database connection failed:")
    console.error("Error:", error.message)

    console.log("\n🔧 Troubleshooting steps:")
    console.log("1. Check if DATABASE_URL is correct in .env")
    console.log("2. Verify Railway database is running")
    console.log("3. Check network connectivity")
    console.log("4. Ensure Prisma client is generated")
  } finally {
    await prisma.$disconnect()
  }
}

verifyConnection()
