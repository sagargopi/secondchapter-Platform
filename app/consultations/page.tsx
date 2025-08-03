"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { ConsultationHistory } from "@/components/consultations/consultation-history"
import { BottomNavigation } from "@/components/layout/bottom-navigation"

export default function ConsultationsPage() {
  const { isAuthenticated, checkAuth } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, router, checkAuth])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ConsultationHistory />
      <BottomNavigation currentPage="consultations" />
    </div>
  )
}
