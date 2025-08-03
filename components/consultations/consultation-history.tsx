"use client"

import { useRouter } from "next/navigation"
import { Menu, User } from "lucide-react"

interface Consultation {
  id: string
  companyName: string
  lastMessage: string
  messageCount: number
  timestamp: string
  isRead: boolean
}

const mockConsultations: Consultation[] = [
  {
    id: "1",
    companyName: "Air conditioner cleaning company A",
    lastMessage: "Yes, I have confirmed the quote. I can come tomorrow...",
    messageCount: 3,
    timestamp: "",
    isRead: false,
  },
  {
    id: "2",
    companyName: "Package Handling B",
    lastMessage: "I won",
    messageCount: 0,
    timestamp: "",
    isRead: true,
  },
  {
    id: "3",
    companyName: "Painting Company C",
    lastMessage: "I won",
    messageCount: 0,
    timestamp: "yesterday",
    isRead: true,
  },
]

export function ConsultationHistory() {
  const router = useRouter()

  const handleConsultationClick = (consultationId: string, companyName: string) => {
    router.push(`/consultations/${consultationId}?company=${encodeURIComponent(companyName)}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-lg font-semibold text-blue-500">Consultation history</h1>
        <Menu className="w-6 h-6 text-gray-400" />
      </div>

      {/* Consultations List */}
      <div className="divide-y divide-gray-100">
        {mockConsultations.map((consultation) => (
          <button
            key={consultation.id}
            onClick={() => handleConsultationClick(consultation.id, consultation.companyName)}
            className="w-full p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors text-left"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-900 truncate">{consultation.companyName}</h3>
                <div className="flex items-center space-x-2">
                  {consultation.messageCount > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {consultation.messageCount}
                    </span>
                  )}
                  {consultation.timestamp && <span className="text-xs text-gray-500">{consultation.timestamp}</span>}
                </div>
              </div>
              <p className="text-sm text-gray-600 truncate">{consultation.lastMessage}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
