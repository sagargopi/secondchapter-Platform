"use client"

import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Clock } from "lucide-react"

interface InquiryDetail {
  id: string
  title: string
  status: "completed" | "waiting"
  createdAt: string
  description: string
  response?: string
  responseDate?: string
}

const mockInquiryDetails: Record<string, InquiryDetail> = {
  "1": {
    id: "1",
    title: "I haven't heard back from you after requesting a quote.",
    status: "completed",
    createdAt: "2025.03.12",
    description:
      "Hello. I requested an air conditioner cleaning quote on March 10th, but I haven't heard back from the company yet. When will I hear from you? I'm contacting you because I need it urgently. Please confirm.",
    response:
      "Hello. This is Everyone's Management Customer Center. We have checked your request for a quotation and found that the companies in the area you requested are currently busy with reservations, which is causing a delay in responding. We have additionally matched you with a vendor, and you will receive a quote by this afternoon. We apologize for any inconvenience. thank you",
    responseDate: "2025.03.12",
  },
  "2": {
    id: "2",
    title: "I have a question about payment.",
    status: "completed",
    createdAt: "2025.03.08",
    description: "What payment methods are accepted for services? Can I pay after the service is completed?",
    response:
      "Hello. This is Everyone's Management Customer Center. You can pay using credit cards, bank transfers, or cash. Payment is typically made after service completion, but some providers may require a deposit. The payment method will be discussed with your chosen service provider. Thank you.",
    responseDate: "2025.03.09",
  },
  "3": {
    id: "3",
    title: "An error occurred while using the service.",
    status: "waiting",
    createdAt: "2025.03.05",
    description:
      "I'm getting an error message when trying to upload photos for my service request. The page keeps refreshing and my information is not being saved.",
  },
  "4": {
    id: "4",
    title: "Request to change company information",
    status: "completed",
    createdAt: "2025.02.28",
    description: "I need to update my company's contact information and service area. How can I make these changes?",
    response:
      "Hello. This is Everyone's Management Customer Center. You can update your company information by going to your business profile settings. If you need assistance, please contact our business support team at business@modoorights.com. Thank you.",
    responseDate: "2025.03.01",
  },
}

export default function InquiryDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const inquiry = mockInquiryDetails[params.id]

  if (!inquiry) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Inquiry not found</p>
          <button onClick={() => router.back()} className="text-blue-500 mt-2">
            Go back
          </button>
        </div>
      </div>
    )
  }

  const getStatusBadge = (status: string) => {
    if (status === "completed") {
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Answer completed
        </Badge>
      )
    } else if (status === "waiting") {
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          <Clock className="w-3 h-3 mr-1" />
          Waiting for reply
        </Badge>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">1:1 inquiry</span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Status */}
        <div className="mb-6">
          <h1 className="text-lg font-medium text-gray-900 mb-3">{inquiry.title}</h1>
          <div className="flex items-center justify-between mb-4">
            {getStatusBadge(inquiry.status)}
            <span className="text-sm text-gray-500">{inquiry.createdAt}</span>
          </div>
        </div>

        {/* Inquiry Details Section */}
        <div className="mb-6">
          <h2 className="text-base font-medium text-gray-900 mb-3">Inquiry details</h2>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">{inquiry.description}</p>
          </div>
        </div>

        {/* Answer Section */}
        {inquiry.response && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-medium text-gray-900">answer</h2>
              <span className="text-sm text-gray-500">{inquiry.responseDate}</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">{inquiry.response}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
