"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const announcements = [
  {
    id: "1",
    title: "Service Maintenance Notice (03/15 02:00 ~ 04:00)",
    date: "2025.03.14",
  },
  {
    id: "2",
    title: "Notice of Changes to Personal Information Processing Policy",
    date: "2025.03.10",
  },
  {
    id: "3",
    title: "New service open! 'Everyone's Hideout'",
    date: "2025.03.01",
  },
  {
    id: "4",
    title: "Information on customer center operation during Lunar New Year holidays",
    date: "2025.02.05",
  },
  {
    id: "5",
    title: "Welcome! This is everyone's management.",
    date: "2025.01.01",
  },
]

export default function AnnouncementsPage() {
  const router = useRouter()

  const handleAnnouncementClick = (announcementId: string) => {
    router.push(`/profile/announcements/${announcementId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">announcement</span>
      </div>

      {/* Announcements List */}
      <div className="p-4">
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <button
              key={announcement.id}
              onClick={() => handleAnnouncementClick(announcement.id)}
              className="w-full py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors text-left"
            >
              <h3 className="font-medium text-gray-900 mb-1">{announcement.title}</h3>
              <p className="text-sm text-gray-500">{announcement.date}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
