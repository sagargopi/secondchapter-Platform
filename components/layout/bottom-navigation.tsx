"use client"

import { useRouter } from "next/navigation"
import { Home, FileText, MessageCircle, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomNavigationProps {
  currentPage: "home" | "quotations" | "consultations" | "profile"
}

export function BottomNavigation({ currentPage }: BottomNavigationProps) {
  const router = useRouter()

  const navItems = [
    {
      id: "home",
      label: "HOME",
      icon: Home,
      path: "/home",
    },
    {
      id: "quotations",
      label: "Received quote",
      icon: FileText,
      path: "/quotations",
    },
    {
      id: "consultations",
      label: "Consultation history",
      icon: MessageCircle,
      path: "/consultations",
    },
    {
      id: "profile",
      label: "My Page",
      icon: User,
      path: "/profile",
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id

          return (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className={cn(
                "flex-1 flex flex-col items-center py-2 px-1",
                isActive ? "text-blue-500" : "text-gray-400",
              )}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
