"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const terms = [
  {
    id: "1",
    title: "Terms of Service",
    date: "2025.03.01",
  },
  {
    id: "2",
    title: "Personal information collection and use terms and conditions",
    date: "2025.03.01",
  },
  {
    id: "3",
    title: "privacy policy",
    date: "2025.03.01",
  },
  {
    id: "4",
    title: "Terms of Use for Location-Based Services",
    date: "2025.02.15",
  },
  {
    id: "5",
    title: "Electronic Financial Transaction Terms and Conditions",
    date: "2025.02.01",
  },
]

export default function TermsPage() {
  const router = useRouter()

  const handleTermsClick = (termsId: string) => {
    router.push(`/profile/terms/${termsId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">Terms and Conditions</span>
      </div>

      {/* Terms List */}
      <div className="p-4">
        <div className="space-y-4">
          {terms.map((term) => (
            <button
              key={term.id}
              onClick={() => handleTermsClick(term.id)}
              className="w-full py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors text-left"
            >
              <h3 className="font-medium text-gray-900 mb-1">{term.title}</h3>
              <p className="text-sm text-gray-500">{term.date}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
