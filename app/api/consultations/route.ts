import { NextResponse } from "next/server"

// Mock consultations data
const mockConsultations = [
  {
    id: "1",
    title: "I haven't heard back from you after requesting a quote",
    status: "completed",
    createdAt: "2025-03-12T00:00:00Z",
    lastMessage: "Thank you for your inquiry. We will contact you soon.",
  },
  {
    id: "2",
    title: "I have a question about payment.",
    status: "completed",
    createdAt: "2025-03-08T00:00:00Z",
    lastMessage: "Payment can be made via bank transfer or credit card.",
  },
  {
    id: "3",
    title: "An error occurred while using the service.",
    status: "waiting",
    createdAt: "2025-03-05T00:00:00Z",
    lastMessage: "We are investigating the issue. Please wait for our response.",
  },
  {
    id: "4",
    title: "Request to change company information",
    status: "completed",
    createdAt: "2025-02-28T00:00:00Z",
    lastMessage: "Your company information has been updated successfully.",
  },
]

export async function GET() {
  return NextResponse.json(mockConsultations)
}
