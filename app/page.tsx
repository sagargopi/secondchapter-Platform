"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/auth-store"
import { LoginForm } from "@/components/auth/login-form"

export default function HomePage() {
  const router = useRouter()
  const { isAuthenticated, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
    if (isAuthenticated) {
      router.push("/home")
    }
  }, [isAuthenticated, router, checkAuth])

  if (isAuthenticated) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LoginForm />
    </div>
  )
}
