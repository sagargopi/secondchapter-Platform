const { execSync } = require("child_process")

console.log("🗄️  Setting up database...")

try {
  // Generate Prisma client
  console.log("📦 Generating Prisma client...")
  execSync("npx prisma generate", { stdio: "inherit" })

  // Run database migrations
  console.log("🔄 Running database migrations...")
  execSync("npx prisma migrate dev --name init", { stdio: "inherit" })

  // Seed the database
  console.log("🌱 Seeding database with sample data...")
  execSync("npx prisma db seed", { stdio: "inherit" })

  console.log("✅ Database setup complete!")
  console.log("\n🎉 Your database is ready with:")
  console.log("- User tables")
  console.log("- Quotation tables")
  console.log("- Consultation tables")
  console.log("- Message tables")
  console.log("- Sample data for testing")

  console.log("\n🔍 Next steps:")
  console.log("1. Run: npm run start:dev")
  console.log("2. Visit: http://localhost:3001/api/docs")
  console.log("3. Test login with: customer@email.com / password123")
} catch (error) {
  console.error("❌ Database setup failed:", error.message)
  console.log("\n🔧 Troubleshooting:")
  console.log("1. Check your DATABASE_URL is correct")
  console.log("2. Ensure PostgreSQL is accessible")
  console.log("3. Verify network connectivity to Railway")
}
