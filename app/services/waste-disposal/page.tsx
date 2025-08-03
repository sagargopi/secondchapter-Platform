"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const wasteDisposalFields = [
  {
    id: "wasteType",
    label: "Waste Type",
    type: "select" as const,
    required: true,
    options: [
      "Household waste (waste appliances, waste furniture)",
      "Construction waste (interior, construction waste)",
      "Business waste (waste paper, waste wood)",
    ],
  },
  {
    id: "amount",
    label: "Amount of waste",
    type: "select" as const,
    required: true,
    options: ["handful", "1 ton", "2.5 tons", "5 tons"],
  },
  {
    id: "floors",
    label: "Number of floors",
    type: "select" as const,
    required: true,
    options: ["bed", "1st floor", "2nd floor or higher"],
  },
  {
    id: "elevator",
    label: "Elevator",
    type: "select" as const,
    required: true,
    options: ["There is", "doesn't exist"],
  },
  {
    id: "parking",
    label: "Parking",
    type: "select" as const,
    required: true,
    options: ["possible", "impossibility"],
  },
]

export default function WasteDisposalPage() {
  return (
    <ServiceRequestForm serviceType="waste-disposal" title="Request for waste disposal" fields={wasteDisposalFields} />
  )
}
