"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus } from "lucide-react"

interface Inquiry {
  id: string
  title: string
  status: "completed" | "waiting"
  createdAt: string
}

const mockInquiries: Inquiry[] = [
  {
    id: "1",
    title: "I haven't heard back from you after requesting a quote",
    status: "completed",
    createdAt: "2025.03.12",
  },
  {
    id: "2",
    title: "I have a question about payment.",
    status: "completed",
    createdAt: "2025.03.08",
  },
  {
    id: "3",
    title: "An error occurred while using the service.",
    status: "waiting",
    createdAt: "2025.03.05",
  },
  {
    id: "4",
    title: "Request to change company information",
    status: "completed",
    createdAt: "2025.02.28",
  },
]

export default function InquiryPage() {
  const router = useRouter()

  const getStatusBadge = (status: string) => {
    if (status === "completed") {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Answer completed</Badge>
    } else if (status === "waiting") {
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Waiting for reply</Badge>
    }
    return null
  }

  const handleNewInquiry = () => {
    router.push("/profile/inquiry/new")
  }

  const handleInquiryClick = (inquiryId: string) => {
    router.push(`/profile/inquiry/${inquiryId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">1:1 Inquiry</span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* New Inquiry Button */}
        <Button
          onClick={handleNewInquiry}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg mb-6"
        >
          <Plus className="w-4 h-4 mr-2" />
          1:1 Inquiry
        </Button>

        {/* Inquiries List */}
        <div className="space-y-4">
          {mockInquiries.map((inquiry) => (
            <button
              key={inquiry.id}
              onClick={() => handleInquiryClick(inquiry.id)}
              className="w-full py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4 text-left">
                  <h3 className="font-medium text-gray-900 mb-2">{inquiry.title}</h3>
                  <p className="text-sm text-gray-500">{inquiry.createdAt}</p>
                </div>
                <div className="flex-shrink-0">{getStatusBadge(inquiry.status)}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
