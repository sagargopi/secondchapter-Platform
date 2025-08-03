"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { MyPageLayout } from "@/components/profile/my-page-layout"

export default function ProfilePage() {
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

  return <MyPageLayout />
}
