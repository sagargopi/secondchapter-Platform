"use client"

import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { BottomNavigation } from "@/components/layout/bottom-navigation"
import { User, Settings, Bell, HelpCircle, FileText, MessageSquare, ChevronRight } from "lucide-react"

const menuItems = [
  {
    id: "profile-settings",
    title: "Profile Settings",
    subtitle: "Manage your personal information and profile",
    icon: Settings,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    path: "/profile/settings",
  },
  {
    id: "announcement",
    title: "announcement",
    subtitle: "Service Announcements and Updates",
    icon: Bell,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
    path: "/profile/announcements",
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    subtitle: "FAQs about using the service",
    icon: HelpCircle,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-50",
    path: "/profile/faq",
  },
  {
    id: "terms",
    title: "Terms of Use",
    subtitle: "Terms of Service and Privacy Policy",
    icon: FileText,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
    path: "/profile/terms",
  },
  {
    id: "inquiry",
    title: "1:1 Inquiry",
    subtitle: "Individual inquiries and customer support",
    icon: MessageSquare,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
    path: "/profile/inquiry",
  },
]

export function MyPageLayout() {
  const { user } = useAuthStore()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-20">
        <div className="px-4 py-6">
          <h1 className="text-xl font-semibold text-blue-500 mb-8">My Page</h1>

          {/* User Profile Section */}
          <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Kim Customer</h3>
                <p className="text-sm text-gray-500">customer@email.com</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          {/* Menu Items */}
          <div className="space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(item.path)}
                  className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${item.iconBg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              )
            })}
          </div>
        </div>
      </main>
      <BottomNavigation currentPage="profile" />
    </div>
  )
}
