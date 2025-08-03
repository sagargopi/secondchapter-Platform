"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, FileText, User, MapPin } from "lucide-react"

export default function GeneralContractRequestPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    phone: "010-1234-5678",
    email: "example@email.com",
    address: "",
    detailedAddress: "",
  })

  const handleSubmit = () => {
    // TODO: Submit contract request
    console.log("Contract request submitted:", formData)
    router.push("/quotations")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <div className="ml-2">
          <h1 className="text-blue-500 font-medium">Contract Request Form</h1>
          <p className="text-sm text-gray-500">Service Provider · General Service Request</p>
        </div>
      </div>

      {/* Guide Section */}
      <div className="p-4 bg-blue-50 border-b">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Guide to Contract Request Form</h3>
            <p className="text-sm text-blue-700">
              Please enter detailed information to provide accurate service. The information you enter will only be
              passed on to the business when the contract is processed.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-8">
        {/* Customer Information */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <User className="w-5 h-5 text-gray-600" />
            <h2 className="font-medium text-gray-900">Customer Information</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                name <span className="text-red-500">*</span>
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Please enter your real name"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                phone number <span className="text-red-500">*</span>
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">email</label>
              <Input
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Service Address */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-5 h-5 text-gray-600" />
            <h2 className="font-medium text-gray-900">Service Address</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                address <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Search for an address"
                  className="flex-1"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">Address Search</Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Detailed address</label>
              <Input
                value={formData.detailedAddress}
                onChange={(e) => setFormData({ ...formData, detailedAddress: e.target.value })}
                placeholder="Please enter detailed address"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button onClick={handleSubmit} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
          Submit Contract Request
        </Button>
      </div>
    </div>
  )
}
