"use client"

import { Trash2, Hammer, Paintbrush, Truck, Bug, Snowflake, Archive, Wrench, Baby } from "lucide-react"
import { useRouter } from "next/navigation"

const services = [
  {
    id: "waste",
    name: "Waste",
    icon: Trash2,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "demolition",
    name: "Demolition",
    icon: Hammer,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    id: "painting",
    name: "Painting/Painting",
    icon: Paintbrush,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: "moving",
    name: "Moving/Move-in Cleaning",
    icon: Truck,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    icon: Bug,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "air-conditioning",
    name: "Air conditioner installation and cleaning",
    icon: Snowflake,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "organizing",
    name: "Organizing storage",
    icon: Archive,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: "drain",
    name: "Drain blockage",
    icon: Wrench,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "stroller",
    name: "stroller washing",
    icon: Baby,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
]

export function ServiceGrid() {
  const router = useRouter()

  const handleServiceClick = (serviceId: string) => {
    const serviceRoutes: Record<string, string> = {
      "stroller": "/services/stroller-washing",
      "waste": "/services/waste-disposal",
      "demolition": "/services/demolition",
      "painting": "/services/painting",
      "moving": "/services/moving-cleaning",
      "pest-control": "/services/pest-control",
      "air-conditioning": "/services/aircon-service",
      "organizing": "/services/organizing",
      "drain": "/services/drain-blockage"
    }

    const route = serviceRoutes[serviceId] || "/quotations"
    router.push(route)
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {services.map((service) => {
        const Icon = service.icon
        return (
          <button
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            className={`${service.bgColor} p-6 rounded-lg flex flex-col items-center space-y-3 hover:opacity-80 transition-opacity`}
          >
            <Icon className={`w-8 h-8 ${service.color}`} />
            <span className="text-sm font-medium text-center text-gray-700">{service.name}</span>
          </button>
        )
      })}
    </div>
  )
}
