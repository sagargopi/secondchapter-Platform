"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface AnnouncementDetail {
  id: string
  title: string
  date: string
  content: string
}

const announcementDetails: Record<string, AnnouncementDetail> = {
  "1": {
    id: "1",
    title: "Service Maintenance Notice (03/15 02:00 ~ 04:00)",
    date: "2025.03.14",
    content: `Hello, this is everyone's manager.

We are conducting a system check to provide better service.

■ Inspection date and time
Saturday, March 15, 2025, 2:00 AM - 4:00 AM (approximately 2 hours)

■ Inspection contents
- Improved server stability
- New feature updates
- Strengthened security

■ Scope of influence
Service access may be temporarily restricted during maintenance.

We apologize for any inconvenience. We will come back with better service.

thank you`,
  },
  "2": {
    id: "2",
    title: "Notice of Changes to Personal Information Processing Policy",
    date: "2025.03.10",
    content: `Hello, this is everyone's manager.

We would like to inform you about changes to our Personal Information Processing Policy.

■ Effective Date
March 15, 2025

■ Main Changes
- Enhanced data protection measures
- Updated consent procedures
- Improved user rights management

■ What You Need to Do
Please review the updated policy in your account settings.

For any questions, please contact our customer service team.

thank you`,
  },
  "3": {
    id: "3",
    title: "New service open! 'Everyone's Hideout'",
    date: "2025.03.01",
    content: `Hello, this is everyone's manager.

We are excited to announce the launch of our new service 'Everyone's Hideout'!

■ Service Overview
A premium storage and organization service for your home and office.

■ Key Features
- Professional organization consultation
- Custom storage solutions
- Regular maintenance service

■ Launch Special
50% discount for the first month for early subscribers.

Visit our website to learn more and sign up today!

thank you`,
  },
  "4": {
    id: "4",
    title: "Information on customer center operation during Lunar New Year holidays",
    date: "2025.02.05",
    content: `Hello, this is everyone's manager.

We would like to inform you about our customer center operation during the Lunar New Year holidays.

■ Holiday Period
February 9-12, 2025 (4 days)

■ Service Status
- Customer center: Closed
- Online services: Available 24/7
- Emergency support: Available via email

■ Response Time
Inquiries received during the holiday will be processed starting February 13.

We appreciate your understanding and wish you a happy Lunar New Year!

thank you`,
  },
  "5": {
    id: "5",
    title: "Welcome! This is everyone's management.",
    date: "2025.01.01",
    content: `Hello, this is everyone's manager.

Welcome to Everyone's Management platform!

■ Our Mission
To connect customers with the best service providers in their area.

■ What We Offer
- Home maintenance services
- Professional consultations
- Quality guaranteed work
- 24/7 customer support

■ Getting Started
1. Browse our service categories
2. Request quotes from providers
3. Compare and choose the best option
4. Enjoy professional service

Thank you for choosing Everyone's Management!

thank you`,
  },
}

export default function AnnouncementDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const announcement = announcementDetails[params.id]

  if (!announcement) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Announcement not found</p>
          <button onClick={() => router.back()} className="text-blue-500 mt-2">
            Go back
          </button>
        </div>
      </div>
    )
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

      {/* Content */}
      <div className="p-4">
        {/* Title and Date */}
        <div className="mb-6">
          <h1 className="text-lg font-medium text-gray-900 mb-2">{announcement.title}</h1>
          <p className="text-sm text-gray-500">{announcement.date}</p>
        </div>

        {/* Announcement Content */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{announcement.content}</div>
        </div>
      </div>
    </div>
  )
}
