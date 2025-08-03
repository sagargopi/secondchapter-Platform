"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const pestControlFields = [
  {
    id: "pestType",
    label: "Type of Pest",
    type: "select" as const,
    required: true,
    options: [
      "Cockroaches",
      "Ants",
      "Rodents (Mice/Rats)",
      "Termites",
      "Bed Bugs",
      "Spiders",
      "Mosquitoes",
      "Other"
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
      "Restaurant",
      "Warehouse",
      "Other"
    ],
  },
  {
    id: "propertySize",
    label: "Property Size",
    type: "select" as const,
    required: true,
    options: [
      "Under 500 sq ft",
      "500-1000 sq ft",
      "1000-2000 sq ft",
      "2000-3000 sq ft",
      "3000+ sq ft"
    ],
  },
  {
    id: "problemStarted",
    label: "When did the problem start?",
    type: "select" as const,
    required: true,
    options: [
      "Less than a week ago",
      "1-4 weeks ago",
      "1-3 months ago",
      "More than 3 months ago"
    ],
  },
  {
    id: "pets",
    label: "Do you have any pets?",
    type: "select" as const,
    required: true,
    options: [
      "No pets",
      "Yes, cats",
      "Yes, dogs",
      "Yes, other pets",
      "Prefer not to say"
    ],
  },
  {
    id: "previousTreatments",
    label: "Previous Pest Control Treatments",
    type: "select" as const,
    required: true,
    options: [
      "None",
      "DIY treatments",
      "Professional treatment within last 3 months",
      "Professional treatment more than 3 months ago"
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
    label: "Additional Information",
    type: "textarea" as const,
    required: false,
    placeholder: "Any specific areas of concern or additional information..."
  }
]

export default function PestControlPage() {
  return (
    <ServiceRequestForm 
      serviceType="pest-control" 
      title="Pest Control Service Request" 
      fields={pestControlFields} 
    />
  )
}
