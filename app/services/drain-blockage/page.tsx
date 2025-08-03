"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const drainBlockageFields = [
  {
    id: "drainType",
    label: "Type of Drain",
    type: "select" as const,
    required: true,
    options: [
      "Kitchen Sink",
      "Bathroom Sink",
      "Shower/Bathtub",
      "Floor Drain",
      "Toilet",
      "Outdoor Drain",
      "Main Sewer Line"
    ],
  },
  {
    id: "blockageSeverity",
    label: "Severity of Blockage",
    type: "select" as const,
    required: true,
    options: [
      "Slow Drainage",
      "Partial Blockage",
      "Complete Blockage",
      "Overflowing"
    ],
  },
  {
    id: "problemDuration",
    label: "How long has this been an issue?",
    type: "select" as const,
    required: true,
    options: [
      "Just started (Today)",
      "A few days",
      "1-2 weeks",
      "More than 2 weeks"
    ],
  },
  {
    id: "propertyType",
    label: "Property Type",
    type: "select" as const,
    required: true,
    options: [
      "House",
      "Apartment/Condo",
      "Office",
      "Restaurant/Commercial",
      "Other"
    ],
  },
  {
    id: "accessibility",
    label: "Access to the Drain",
    type: "select" as const,
    required: true,
    options: [
      "Easily accessible",
      "Partially accessible",
      "Difficult to access",
      "Not sure"
    ],
  },
  {
    id: "timeline",
    label: "Preferred Service Date & Time",
    type: "select" as const,
    required: true,
    options: [
      "ASAP (Emergency)",
      "Today",
      "Tomorrow",
      "This week"
    ],
  },
  {
    id: "specialInstructions",
    label: "Additional Information",
    type: "textarea" as const,
    required: false,
    placeholder: "Any specific details about the blockage or special access instructions..."
  }
]

export default function DrainBlockagePage() {
  return (
    <ServiceRequestForm 
      serviceType="drain-blockage" 
      title="Drain Blockage Service Request" 
      fields={drainBlockageFields} 
    />
  )
}
