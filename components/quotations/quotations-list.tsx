"use client"

import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Package, Paintbrush, Truck, Bug, Snowflake, Archive, Wrench } from "lucide-react"
import { useRouter } from "next/navigation"

const serviceCategories = [
  { id: "package", name: "Package/Demolition", icon: Package },
  { id: "painting", name: "Painting/Painting", icon: Paintbrush },
  { id: "moving", name: "Moving/Move-in Cleaning", icon: Truck },
  { id: "pest", name: "Pest Control", icon: Bug },
  { id: "air", name: "air conditioning", icon: Snowflake },
  { id: "storage", name: "Organizing storage", icon: Archive },
  { id: "sewer", name: "sewer", icon: Wrench },
]

const closedQuotations = [
  {
    id: "1",
    recruitmentDeadline: "March 12, 2025",
    totalQuotes: 6,
    productComposition: "500M Internet + TV",
    existingCarrier: "Not used",
    hopeCarrier: "Received",
    subscriptionType: "Subscription (New, Change)",
    installationLocation: "Minrak-dong, Uijeongbu-si, Gyeonggi-do | Apartment",
  },
  {
    id: "2",
    recruitmentDeadline: "February 28, 2025",
    totalQuotes: 6,
    productComposition: "1G Internet",
    existingCarrier: "SKT",
    hopeCarrier: "Received",
    subscriptionType: "Subscription (New, Change)",
    installationLocation: "Minrak-dong, Uijeongbu-si, Gyeonggi-do | Apartment",
  },
]

export function QuotationsList() {
  const router = useRouter()
  const { data: quotations, isLoading } = useQuery({
    queryKey: ["quotations"],
    queryFn: async () => {
      const response = await fetch("/api/quotations")
      if (!response.ok) throw new Error("Failed to fetch quotations")
      return response.json()
    },
  })

  const handleClosedQuotationClick = (quotationId: string) => {
    router.push(`/quotations/closed/${quotationId}`)
  }

  if (isLoading) {
    return <div className="text-center py-8">Loading quotations...</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-lg font-semibold">Quote inbox</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">🔍</span>
          <span className="text-sm text-gray-500">👤</span>
        </div>
      </div>

      {/* Service Category Tabs */}
      <div className="flex overflow-x-auto p-4 space-x-4 border-b">
        {serviceCategories.map((category) => {
          const Icon = category.icon
          return (
            <button key={category.id} className="flex flex-col items-center min-w-[80px] p-2 text-center">
              <Icon className="w-6 h-6 text-blue-500 mb-1" />
              <span className="text-xs text-gray-600">{category.name}</span>
            </button>
          )
        })}
      </div>

      {/* Quote Status */}
      <div className="p-6 text-center">
        <div className="mb-4">
          <div className="text-4xl mb-2">💬 💬</div>
          <p className="text-lg font-medium">2 out of 2 left!</p>
        </div>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg mb-8">
          Request a quote →
        </Button>

        {/* Quote Request in Progress */}
        <div className="mb-8">
          <h3 className="text-left font-medium mb-4">Quote request in progress</h3>
          <div className="text-center py-8 text-gray-500">
            <p>There are no quotes available for your request!</p>
            <p className="mt-2">Find the product that's right for you on the HOME screen!</p>
            <Button
              onClick={() => router.push("/home")}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              🏠 Go to HOME
            </Button>
          </div>
        </div>

        {/* Closed Request for Quotation */}
        <div>
          <h3 className="text-left font-medium mb-4">Closed Request for Quotation</h3>
          <div className="space-y-4">
            {closedQuotations.map((quotation) => (
              <button
                key={quotation.id}
                onClick={() => handleClosedQuotationClick(quotation.id)}
                className="w-full bg-gray-50 rounded-lg p-4 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="mb-3">
                  <p className="text-sm text-gray-600">Recruitment deadline: {quotation.recruitmentDeadline}</p>
                  <p className="text-sm font-medium text-blue-600">A total of {quotation.totalQuotes} quotes</p>
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex">
                    <span className="w-32 text-gray-600">Product Composition:</span>
                    <span>{quotation.productComposition}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">Existing telecommunications company:</span>
                    <span>{quotation.existingCarrier}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">Hope Communications:</span>
                    <span>{quotation.hopeCarrier}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">Subscription Type:</span>
                    <span>{quotation.subscriptionType}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">Installation location:</span>
                    <span>{quotation.installationLocation}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
