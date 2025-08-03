"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const movingCleaningFields = [
  {
    id: "serviceType",
    label: "Type of Service",
    type: "select" as const,
    required: true,
    options: [
      "Move-in Cleaning",
      "Move-out Cleaning",
      "Deep Cleaning",
      "Standard Cleaning"
    ],
  },
  {
    id: "propertyType",
    label: "Property Type",
    type: "select" as const,
    required: true,
    options: [
      "Apartment (1-2 BR)",
      "House (1-3 BR)",
      "House (4+ BR)",
      "Office/Small Business",
      "Other"
    ],
  },
  {
    id: "propertySize",
    label: "Property Size",
    type: "select" as const,
    required: true,
    options: [
      "Studio",
      "1 Bedroom",
      "2 Bedrooms",
      "3 Bedrooms",
      "4+ Bedrooms"
    ],
  },
  {
    id: "bathrooms",
    label: "Number of Bathrooms",
    type: "select" as const,
    required: true,
    options: ["1", "1.5", "2", "2.5", "3", "3.5", "4+"],
  },
  {
    id: "cleaningType",
    label: "Cleaning Required",
    type: "select" as const,
    required: true,
    options: [
      "Basic Cleaning (Surface cleaning)",
      "Standard Cleaning (Including appliances)",
      "Deep Cleaning (Including inside cabinets, behind appliances)",
      "Move-out/Move-in Cleaning"
    ],
  },
  {
    id: "additionalServices",
    label: "Additional Services",
    type: "checkbox" as const,
    required: false,
    options: [
      "Carpet Cleaning",
      "Window Cleaning",
      "Oven Cleaning",
      "Fridge Cleaning",
      "Blinds Cleaning"
    ],
  },
  {
    id: "timeline",
    label: "Preferred Service Date & Time",
    type: "select" as const,
    required: true,
    options: [
      "ASAP (Next available slot)",
      "Morning (8AM-12PM)",
      "Afternoon (12PM-5PM)",
      "Evening (5PM-9PM)",
      "Weekend"
    ],
  },
  {
    id: "specialInstructions",
    label: "Special Instructions",
    type: "textarea" as const,
    required: false,
    placeholder: "Any specific areas of focus or special requirements..."
  }
]

export default function MovingCleaningPage() {
  return (
    <ServiceRequestForm 
      serviceType="moving-cleaning" 
      title="Moving & Cleaning Service Request" 
      fields={movingCleaningFields} 
    />
  )
}
