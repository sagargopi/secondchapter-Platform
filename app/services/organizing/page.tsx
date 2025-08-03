"use client"

import { ServiceRequestForm } from "@/components/forms/service-request-form"

const organizingFields = [
  {
    id: "organizingType",
    label: "Type of Organizing",
    type: "select" as const,
    required: true,
    options: [
      "Closet Organization",
      "Kitchen Organization",
      "Garage Organization",
      "Home Office Setup",
      "Whole Home Organization",
      "Other"
    ],
  },
  {
    id: "spaceSize",
    label: "Size of Space",
    type: "select" as const,
    required: true,
    options: [
      "Small (Closet/Pantry)",
      "Medium (Room/Office)",
      "Large (Garage/Whole Home)"
    ],
  },
  {
    id: "timeline",
    label: "Preferred Timeline",
    type: "select" as const,
    required: true,
    options: [
      "ASAP (Next available)",
      "Within a week",
      "Within 2 weeks",
      "Within a month",
      "Flexible"
    ],
  },
  {
    id: "serviceFrequency",
    label: "Service Frequency",
    type: "select" as const,
    required: true,
    options: [
      "One-time service",
      "Weekly",
      "Bi-weekly",
      "Monthly",
      "To be determined"
    ],
  },
  {
    id: "itemsToOrganize",
    label: "Main Items to Organize (Select all that apply)",
    type: "select" as const,
    required: false,
    options: [
      "Clothing/Shoes/Accessories",
      "Kitchenware/Utensils",
      "Documents/Files",
      "Toys/Games",
      "Books/Media",
      "Collectibles",
      "Other"
    ],
  },
  {
    id: "purchaseNeeds",
    label: "Organization Supplies Needed (Select all that apply)",
    type: "select" as const,
    required: false,
    options: [
      "Storage Bins/Boxes",
      "Shelving Units",
      "Closet Organizers",
      "Drawer Dividers",
      "Labels/Tags",
      "Other"
    ],
  },
  {
    id: "specialRequirements",
    label: "Special Requirements/Notes",
    type: "textarea" as const,
    required: false,
    placeholder: "Any specific requirements, allergies, or special considerations..."
  }
]

export default function OrganizingPage() {
  return (
    <ServiceRequestForm 
      serviceType="organizing" 
      title="Professional Organizing Service" 
      fields={organizingFields} 
    />
  )
}
