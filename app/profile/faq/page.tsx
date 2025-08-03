"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const faqs = [
  {
    id: "1",
    question: "How do I request a quote?",
    date: "2025.03.10",
  },
  {
    id: "2",
    question: "What if I can't contact the company?",
    date: "2025.03.05",
  },
  {
    id: "3",
    question: "How do I use the quote request right?",
    date: "2025.02.28",
  },
  {
    id: "4",
    question: "A problem occurred while using the service.",
    date: "2025.02.20",
  },
  {
    id: "5",
    question: "How do I delete my account?",
    date: "2025.02.15",
  },
]

export default function FAQPage() {
  const router = useRouter()

  const handleFAQClick = (faqId: string) => {
    router.push(`/profile/faq/${faqId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">Frequently Asked Questions</span>
      </div>

      {/* FAQ List */}
      <div className="p-4">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <button
              key={faq.id}
              onClick={() => handleFAQClick(faq.id)}
              className="w-full py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors text-left"
            >
              <h3 className="font-medium text-gray-900 mb-1">{faq.question}</h3>
              <p className="text-sm text-gray-500">{faq.date}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
