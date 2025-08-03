"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar } from "lucide-react"

interface ServiceRequestFormProps {
  serviceType: string
  title: string
  fields: Array<{
    id: string
    label: string
    type: "select" | "date" | "address" | "textarea"
    options?: string[]
    required?: boolean
  }>
}

export function ServiceRequestForm({ serviceType, title, fields }: ServiceRequestFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleSubmit = () => {
    // TODO: Submit form data to API
    console.log("Form submitted:", formData)
    router.push("/quotations")
  }

  const renderField = (field: any) => {
    switch (field.type) {
      case "select":
        return (
          <div key={field.id} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {field.options?.map((option: string) => (
                <button
                  key={option}
                  onClick={() => setFormData({ ...formData, [field.id]: option })}
                  className={`p-3 border rounded-lg text-sm text-center ${
                    formData[field.id] === option
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )

      case "date":
        return (
          <div key={field.id} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
              <Input
                type="date"
                value={formData[field.id] || ""}
                onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                className="w-full"
                placeholder="dd-mm-yyyy"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )

      case "address":
        return (
          <div key={field.id} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="flex space-x-2">
              <Input
                value={formData[field.id] || ""}
                onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                placeholder="Search for an address"
                className="flex-1"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4">Address Search</Button>
            </div>
          </div>
        )

      case "textarea":
        return (
          <div key={field.id} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <Textarea
              value={formData[field.id] || ""}
              onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
              placeholder="Please enter your details."
              rows={4}
              className="w-full"
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">{title}</span>
      </div>

      {/* Form */}
      <div className="p-6">{fields.map(renderField)}</div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button onClick={handleSubmit} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
          Send a request for quotation
        </Button>
      </div>
    </div>
  )
}
