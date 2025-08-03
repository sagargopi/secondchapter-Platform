import { NextResponse } from "next/server"

// Mock quotations data
const mockQuotations = [
  {
    id: "1",
    serviceName: "Air Conditioner Cleaning",
    companyName: "Clean Air Co.",
    price: 150000,
    status: "pending",
    createdAt: "2025-01-01T10:00:00Z",
  },
  {
    id: "2",
    serviceName: "Painting Service",
    companyName: "Perfect Paint Ltd.",
    price: 800000,
    status: "accepted",
    createdAt: "2024-12-28T14:30:00Z",
  },
  {
    id: "3",
    serviceName: "Pest Control",
    companyName: "Bug Busters Inc.",
    price: 200000,
    status: "pending",
    createdAt: "2024-12-25T09:15:00Z",
  },
]

export async function GET() {
  return NextResponse.json(mockQuotations)
}
