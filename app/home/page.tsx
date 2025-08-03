"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { ServiceGrid } from "@/components/home/service-grid"
import { Header } from "@/components/layout/header"
import { BottomNavigation } from "@/components/layout/bottom-navigation"

export default function HomePage() {
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
          <h1 className="text-xl font-semibold text-center mb-8">
            Please select the service you would like a quote for
          </h1>
          <ServiceGrid />
        </div>
      </main>
      <BottomNavigation currentPage="home" />
    </div>
  )
}
