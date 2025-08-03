"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { BottomNavigation } from "@/components/layout/bottom-navigation"
import { QuotationsList } from "@/components/quotations/quotations-list"

export default function QuotationsPage() {
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
      <Header />
      <main className="pb-20">
        <div className="px-4 py-6">
          <h1 className="text-xl font-semibold mb-6">받은 견적</h1>
          <QuotationsList />
        </div>
      </main>
      <BottomNavigation currentPage="quotations" />
    </div>
  )
}
