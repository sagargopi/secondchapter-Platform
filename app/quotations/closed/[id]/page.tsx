"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, MessageCircle } from "lucide-react"

interface Quote {
  id: string
  companyName: string
  isRecommended?: boolean
  rating: number
  reviewCount: number
  location: string
  price: number
  unit: string
  description: string
}

interface QuotationRequest {
  recruitmentDeadline: string
  totalQuotes: number
  productComposition: string
  existingCarrier: string
  hopeCarrier: string
  subscriptionType: string
  installationLocation: string
}

const quotationRequests: Record<string, QuotationRequest> = {
  "1": {
    recruitmentDeadline: "March 12, 2025",
    totalQuotes: 6,
    productComposition: "500M Internet + TV",
    existingCarrier: "Not used",
    hopeCarrier: "Received",
    subscriptionType: "Subscription (New, Change)",
    installationLocation: "Minrak-dong, Uijeongbu-si, Gyeonggi-do | Apartment",
  },
  "2": {
    recruitmentDeadline: "February 28, 2025",
    totalQuotes: 6,
    productComposition: "1G Internet",
    existingCarrier: "SKT",
    hopeCarrier: "Received",
    subscriptionType: "Subscription (New, Change)",
    installationLocation: "Minrak-dong, Uijeongbu-si, Gyeonggi-do | Apartment",
  },
}

const mockQuotes: Quote[] = [
  {
    id: "1",
    companyName: "Air conditioner specialist company A",
    isRecommended: true,
    rating: 4.8,
    reviewCount: 124,
    location: "Uijeongbu-si, Gyeonggi-do",
    price: 150000,
    unit: "one",
    description:
      "Our professional technicians, with 20 years of experience, will personally visit your home to provide thorough cleaning services. We promise safe and thorough cleaning using eco-friendly detergents.",
  },
  {
    id: "2",
    companyName: "Clean air conditioner cleaning",
    rating: 4.6,
    reviewCount: 89,
    location: "Uijeongbu-si, Gyeonggi-do",
    price: 140000,
    unit: "one",
    description:
      "98% customer satisfaction! We provide fast and accurate air conditioner cleaning services. We also take responsibility for after-sales service.",
  },
  {
    id: "3",
    companyName: "Premium Air Conditioner Care",
    isRecommended: true,
    rating: 4.9,
    reviewCount: 156,
    location: "Uijeongbu-si, Gyeonggi-do",
    price: 180000,
    unit: "one",
    description:
      "Extend the life of your air conditioner with our premium cleaning service, including a free inspection.",
  },
  {
    id: "4",
    companyName: "Reliable cleaning company",
    rating: 4.4,
    reviewCount: 67,
    location: "Uijeongbu-si, Gyeonggi-do",
    price: 130000,
    unit: "one",
    description:
      "We offer the best service at a reasonable price. Our services are provided directly by experienced professionals.",
  },
  {
    id: "5",
    companyName: "Smart Air Conditioning Service",
    rating: 4.7,
    reviewCount: 203,
    location: "Uijeongbu-si, Gyeonggi-do",
    price: 160000,
    unit: "one",
    description:
      "We provide complete air conditioner cleaning using the latest equipment and technology. Guaranteed after-sales service included.",
  },
  {
    id: "6",
    companyName: "Eco-friendly cleaning specialist",
    rating: 4.5,
    reviewCount: 91,
    location: "Uijeongbu-si, Gyeonggi-do",
    price: 145000,
    unit: "one",
    description:
      "We promise safe and clean cleaning using only 100% eco-friendly detergents. No need to worry about allergies!",
  },
]

export default function ClosedQuotationDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const quotationRequest = quotationRequests[params.id]

  if (!quotationRequest) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Quotation not found</p>
          <button onClick={() => router.back()} className="text-blue-500 mt-2">
            Go back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">Received quotes ( {quotationRequest.totalQuotes} )</span>
      </div>

      {/* Sort Options */}
      <div className="flex items-center space-x-4 p-4 border-b">
        <button className="text-sm font-medium text-blue-500">Recommended</button>
        <button className="text-sm text-gray-500">Sort by price</button>
        <button className="text-sm text-gray-500">Sort by rating</button>
      </div>

      {/* Quotes List */}
      <div className="p-4 space-y-4">
        {mockQuotes.map((quote) => (
          <div key={quote.id} className="bg-white border border-gray-200 rounded-lg p-4">
            {/* Company Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-900">{quote.companyName}</h3>
                {quote.isRecommended && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">suggestion</span>
                )}
              </div>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{quote.rating}</span>
              </div>
              <span className="text-sm text-gray-500">{quote.reviewCount} reviews</span>
            </div>

            {/* Location */}
            <p className="text-sm text-gray-600 mb-3">{quote.location}</p>

            {/* Price */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl font-bold text-gray-900">{quote.price.toLocaleString()}</span>
              <span className="text-sm text-gray-500">{quote.unit}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">{quote.description}</p>

            {/* Chat Button */}
            <Button
              onClick={() => router.push(`/consultations/1?company=${encodeURIComponent(quote.companyName)}`)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
