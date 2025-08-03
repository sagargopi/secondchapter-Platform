"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const strollerWashingFields = [
  {
    id: "laundryType",
    label: "Laundry Type",
    type: "select" as const,
    required: true,
    options: ["stroller", "car seat", "Wagon"],
  },
  {
    id: "quantity",
    label: "Quantity of laundry",
    type: "select" as const,
    required: true,
    options: ["1st", "2nd generation", "3rd generation", "4 or more"],
  },
  {
    id: "date",
    label: "Preferred Date",
    type: "date" as const,
    required: true,
  },
  {
    id: "address",
    label: "Service Address",
    type: "address" as const,
    required: true,
  },
  {
    id: "request",
    label: "Additional Request",
    type: "textarea" as const,
    required: false,
  },
]

export default function StrollerWashingPage() {
  return (
    <ServiceRequestForm
      serviceType="stroller-washing"
      title="Request for stroller washing"
      fields={strollerWashingFields}
    />
  )
}
