"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/auth-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [stayLoggedIn, setStayLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { login } = useAuthStore()
  const router = useRouter()

  const handleLogin = async (userType: "customer" | "business") => {
    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    setIsLoading(true)
    setError("")

    const success = await login(email, password, userType)

    if (success) {
      router.push("/home")
    } else {
      setError("Invalid credentials. Please try again.")
    }

    setIsLoading(false)
  }

  const handleTestLogin = () => {
    setEmail("customer@email.com")
    setPassword("password123")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center p-4">
        <ArrowLeft className="w-6 h-6 text-blue-500" />
        <span className="ml-2 text-blue-500">log in</span>
      </div>

      <div className="px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-blue-500 mb-2">Management of all</h1>
          <p className="text-gray-600">Log in to your account</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="stay-logged-in" checked={stayLoggedIn} onCheckedChange={setStayLoggedIn} />
              <label htmlFor="stay-logged-in" className="text-sm text-gray-600">
                Stay logged in
              </label>
            </div>
            <button className="text-sm text-blue-500">find password</button>
          </div>

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <Button
            onClick={() => handleLogin("customer")}
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
          >
            {isLoading ? "Logging in..." : "log in"}
          </Button>

          <div className="text-center">
            <button onClick={handleTestLogin} className="text-sm text-gray-500 underline">
              Demo Login (customer@email.com)
            </button>
          </div>

          <div className="text-center text-gray-500">or</div>

          <div className="space-y-3">
            <Button
              onClick={() => handleLogin("customer")}
              disabled={isLoading}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg"
            >
              Log in as a customer
            </Button>

            <Button
              onClick={() => handleLogin("business")}
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
            >
              Log in as a business
            </Button>

            <Button
              disabled={isLoading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg"
            >
              Log in with Kakao
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
