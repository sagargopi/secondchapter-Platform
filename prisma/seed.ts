import { PrismaClient } from "@prisma/client"
import * as bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  // Create test users
  const hashedPassword = await bcrypt.hash("password123", 10)

  const customer = await prisma.user.upsert({
    where: { email: "customer@email.com" },
    update: {},
    create: {
      email: "customer@email.com",
      password: hashedPassword,
      name: "김고객",
      phone: "010-1234-5678",
      address: "서울시 강남구 역삼동",
      userType: "CUSTOMER",
    },
  })

  const business = await prisma.user.upsert({
    where: { email: "business@example.com" },
    update: {},
    create: {
      email: "business@example.com",
      password: hashedPassword,
      name: "Business User",
      phone: "010-9876-5432",
      address: "서울시 서초구 서초동",
      userType: "BUSINESS",
    },
  })

  // Create sample quotations
  await prisma.quotation.createMany({
    data: [
      {
        serviceName: "Air Conditioner Cleaning",
        companyName: "Clean Air Co.",
        price: 150000,
        status: "PENDING",
        userId: customer.id,
      },
      {
        serviceName: "Painting Service",
        companyName: "Perfect Paint Ltd.",
        price: 800000,
        status: "ACCEPTED",
        userId: customer.id,
      },
      {
        serviceName: "Pest Control",
        companyName: "Bug Busters Inc.",
        price: 200000,
        status: "PENDING",
        userId: customer.id,
      },
    ],
  })

  // Create sample consultations
  const consultation = await prisma.consultation.create({
    data: {
      title: "Air conditioner cleaning inquiry",
      status: "completed",
      userId: customer.id,
    },
  })

  // Create sample messages
  await prisma.message.createMany({
    data: [
      {
        text: "Hello, I need help with air conditioner cleaning",
        sender: "user",
        consultationId: consultation.id,
      },
      {
        text: "We can help you with that. When would you like to schedule?",
        sender: "company",
        consultationId: consultation.id,
      },
    ],
  })

  console.log("✅ Database seeded successfully")
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
