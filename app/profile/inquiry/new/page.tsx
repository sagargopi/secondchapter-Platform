"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, FileText } from "lucide-react"

export default function NewInquiryPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  const handleSubmit = () => {
    if (!formData.title || !formData.description) {
      alert("Please fill in both title and detail fields")
      return
    }

    // TODO: Submit inquiry to API
    console.log("New inquiry submitted:", formData)

    // Show success message and navigate back
    alert("Your inquiry has been submitted successfully!")
    router.push("/profile/inquiry")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.push("/profile/inquiry")}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">New 1:1 Inquiry</span>
      </div>

      {/* Guide Section */}
      <div className="p-4 bg-blue-50 border-b">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">1:1 Inquiry Guide</h3>
            <p className="text-sm text-blue-700">
              Please provide detailed information about your inquiry. Our customer support team will respond within 24
              hours.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6">
        {/* Inquiry Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            title <span className="text-red-500">*</span>
          </label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Please enter the title of your inquiry"
            className="w-full"
          />
        </div>

        {/* Inquiry Detail */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            detail <span className="text-red-500">*</span>
          </label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Please enter the details of your inquiry"
            rows={8}
            className="w-full"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button onClick={handleSubmit} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
          Submit Inquiry
        </Button>
      </div>
    </div>
  )
}
