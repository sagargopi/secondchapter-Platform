"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const airconServiceFields = [
  {
    id: "serviceType",
    label: "Type of Service",
    type: "select" as const,
    required: true,
    options: [
      "AC Installation",
      "AC Cleaning",
      "AC Repair",
      "AC Maintenance",
      "Gas Refill"
    ],
  },
  {
    id: "acType",
    label: "AC Type",
    type: "select" as const,
    required: true,
    options: [
      "Split AC",
      "Window AC",
      "Cassette AC",
      "Ducted AC",
      "Portable AC"
    ],
  },
  {
    id: "tonnage",
    label: "AC Capacity (Tonnage)",
    type: "select" as const,
    required: true,
    options: [
      "1 Ton",
      "1.5 Ton",
      "2 Ton",
      "2.5 Ton",
      "3 Ton",
      "Not Sure"
    ],
  },
  {
    id: "problemDescription",
    label: "Describe the Issue",
    type: "select" as const,
    required: true,
    options: [
      "Not cooling properly",
      "Not turning on",
      "Water leakage",
      "Strange noises",
      "Bad odor",
      "Other issue"
    ],
  },
  {
    id: "ageOfUnit",
    label: "Age of AC Unit",
    type: "select" as const,
    required: true,
    options: [
      "Less than 1 year",
      "1-3 years",
      "3-5 years",
      "5-10 years",
      "More than 10 years",
      "Don't know"
    ],
  },
  {
    id: "lastService",
    label: "Last Service Date",
    type: "select" as const,
    required: true,
    options: [
      "Within last 3 months",
      "3-6 months ago",
      "6-12 months ago",
      "More than a year ago",
      "Never serviced"
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
    placeholder: "Any specific issues or additional information..."
  }
]

export default function AirconServicePage() {
  return (
    <ServiceRequestForm 
      serviceType="aircon-service" 
      title="Air Conditioner Service Request" 
      fields={airconServiceFields} 
    />
  )
}
