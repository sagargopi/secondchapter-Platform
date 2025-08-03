"use client"

import { useState } from "react"
import { useAuthStore } from "@/store/auth-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Camera } from "lucide-react"
import { useRouter } from "next/navigation"

export function ProfileForm() {
  const { user } = useAuthStore()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: user?.name || "김고객",
    email: user?.email || "customer@email.com",
    phone: user?.phone || "010-1234-5678",
    address: user?.address || "서울시 강남구 역삼동",
  })

  const handleSave = () => {
    // TODO: Implement profile update API call
    alert("Profile saved successfully!")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">Profile Settings</span>
      </div>

      <div className="p-6 space-y-8">
        {/* Profile Picture Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Profile picture</h3>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">김</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="font-medium text-blue-600">Change your profile picture</p>
              <p className="text-sm text-gray-500">Please upload JPG or PNG files.</p>
            </div>
            <button className="p-2">
              <Camera className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Basic Information Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Basic information
            </span>
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">phone number</label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">email</label>
              <Input
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">address</label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full"
                placeholder="Enter your address"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button onClick={handleSave} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Save profile
        </Button>
      </div>
    </div>
  )
}
