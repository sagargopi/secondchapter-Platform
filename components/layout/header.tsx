"use client"

import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Header() {
  const { user, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-blue-500">Management of all</h1>
        <div className="flex items-center space-x-4">
          {user && <span className="text-sm text-gray-600">Welcome, {user.name || user.email}</span>}
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="text-blue-500 border-blue-500 bg-transparent"
          >
            log out
          </Button>
        </div>
      </div>
    </header>
  )
}
