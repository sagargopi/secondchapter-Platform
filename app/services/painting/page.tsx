"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const paintingFields = [
  {
    id: "paintingType",
    label: "Type of Painting",
    type: "select" as const,
    required: true,
    options: [
      "Interior Painting",
      "Exterior Painting",
      "Both Interior & Exterior"
    ],
  },
  {
    id: "propertyType",
    label: "Property Type",
    type: "select" as const,
    required: true,
    options: [
      "Apartment/Condo",
      "House",
      "Office",
      "Commercial Space",
      "Other"
    ],
  },
  {
    id: "propertySize",
    label: "Property Size (sq ft)",
    type: "select" as const,
    required: true,
    options: [
      "Under 500",
      "500-1000",
      "1000-2000",
      "2000-3000",
      "3000+"
    ],
  },
  {
    id: "rooms",
    label: "Number of Rooms",
    type: "select" as const,
    required: true,
    options: [
      "1",
      "2",
      "3",
      "4",
      "5+"
    ],
  },
  {
    id: "ceilingIncluded",
    label: "Include Ceiling",
    type: "select" as const,
    required: true,
    options: [
      "Yes",
      "No"
    ],
  },
  {
    id: "prepWorkNeeded",
    label: "Preparation Work Needed",
    type: "select" as const,
    required: true,
    options: [
      "None (just painting)",
      "Wall repairs needed",
      "Wallpaper removal",
      "Extensive prep work"
    ],
  },
  {
    id: "paintSupply",
    label: "Paint Supply",
    type: "select" as const,
    required: true,
    options: [
      "I'll provide the paint",
      "Please provide paint (cost included)",
      "Need paint consultation"
    ],
  },
  {
    id: "timeline",
    label: "Preferred Timeline",
    type: "select" as const,
    required: true,
    options: [
      "ASAP",
      "Within 2 weeks",
      "Within a month",
      "1-3 months",
      "Flexible"
    ],
  },
  {
    id: "specialRequirements",
    label: "Special Requirements",
    type: "textarea" as const,
    required: false,
    placeholder: "Any specific colors, finishes, or other requirements..."
  }
]

export default function PaintingPage() {
  return (
    <ServiceRequestForm 
      serviceType="painting" 
      title="Painting Service Request" 
      fields={paintingFields} 
    />
  )
}
