const crypto = require("crypto")

console.log("🔐 JWT Secret Generator\n")

// Generate different types of secrets
const secret32 = crypto.randomBytes(32).toString("hex")
const secret64 = crypto.randomBytes(64).toString("hex")
const secretBase64 = crypto.randomBytes(32).toString("base64")

console.log("32-byte (256-bit) Hex Secret:")
console.log(secret32)
console.log("\n64-byte (512-bit) Hex Secret (RECOMMENDED):")
console.log(secret64)
console.log("\nBase64 Secret:")
console.log(secretBase64)

console.log("\n🎯 RECOMMENDED FOR PRODUCTION:")
console.log(`JWT_SECRET="${secret64}"`)

console.log("\n📋 Copy one of these secrets to your environment variables!")
console.log("\nFor local development, add to your .env file:")
console.log(`JWT_SECRET="${secret64}"`)

console.log("\nFor Railway deployment:")
console.log(`railway variables set JWT_SECRET="${secret64}"`)

console.log("\nFor Render deployment:")
console.log("Add this as an environment variable in your Render dashboard:")
console.log(`Key: JWT_SECRET`)
console.log(`Value: ${secret64}`)

console.log("\nFor Vercel deployment:")
console.log(`vercel env add JWT_SECRET`)
console.log(`Then paste: ${secret64}`)
