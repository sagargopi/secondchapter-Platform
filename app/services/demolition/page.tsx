"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const demolitionFields = [
  {
    id: "demolitionType",
    label: "Type of Demolition",
    type: "select" as const,
    required: true,
    options: [
      "Interior demolition (walls, floors, ceilings)",
      "Full building demolition",
      "Partial demolition",
      "Concrete removal"
    ],
  },
  {
    id: "propertyType",
    label: "Property Type",
    type: "select" as const,
    required: true,
    options: ["Residential", "Commercial", "Industrial", "Other"],
  },
  {
    id: "propertySize",
    label: "Property Size (sq ft)",
    type: "select" as const,
    required: true,
    options: ["Under 500", "500-1000", "1000-2000", "2000-5000", "5000+"],
  },
  {
    id: "floors",
    label: "Number of Floors",
    type: "select" as const,
    required: true,
    options: ["1", "2", "3", "4", "5+"],
  },
  {
    id: "hazardousMaterials",
    label: "Hazardous Materials Present",
    type: "select" as const,
    required: true,
    options: ["Yes (asbestos, lead, etc.)", "No", "Unsure"],
  },
  {
    id: "disposalNeeded",
    label: "Debris Disposal Needed",
    type: "select" as const,
    required: true,
    options: ["Yes, include disposal", "No, I'll handle disposal"],
  },
  {
    id: "timeline",
    label: "Preferred Timeline",
    type: "select" as const,
    required: true,
    options: ["ASAP", "Within 2 weeks", "Within a month", "1-3 months", "Flexible"],
  },
]

export default function DemolitionPage() {
  return (
    <ServiceRequestForm 
      serviceType="demolition" 
      title="Demolition Service Request" 
      fields={demolitionFields} 
    />
  )
}
