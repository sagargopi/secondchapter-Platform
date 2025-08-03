"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface FAQDetail {
  id: string
  question: string
  date: string
  answer: string
}

const faqDetails: Record<string, FAQDetail> = {
  "1": {
    id: "1",
    question: "How do I request a quote?",
    date: "2025.03.10",
    answer: `You can request a quote as follows:

1. Select the desired service from the HOME screen.

2. Please enter the service details.
   - Address to receive service
   - Desired date and time
   - Detailed requirements

3. Once you submit a request for quotation, the companies will send you a quotation.

4. You can check the quotes you received in the 'Received Quotes' tab.

5. Chat with the company you like and proceed with the contract.

If you have any further questions, please use 1:1 inquiry.`,
  },
  "2": {
    id: "2",
    question: "What if I can't contact the company?",
    date: "2025.03.05",
    answer: `If you're having trouble contacting a company, please try the following:

1. Check your internet connection and try again.

2. Use the chat function within the app to send messages.

3. If the company doesn't respond within 24 hours, you can:
   - Request quotes from other companies
   - Contact our customer service team

4. Our customer service will help connect you with alternative service providers.

5. You can also report unresponsive companies through 1:1 inquiry.

We're here to ensure you get the service you need.`,
  },
  "3": {
    id: "3",
    question: "How do I use the quote request right?",
    date: "2025.02.28",
    answer: `Here's how to properly use your quote request rights:

1. You can request quotes from multiple companies for comparison.

2. All quote requests are free of charge.

3. You have the right to:
   - Receive detailed quotes within 48 hours
   - Ask questions about the service
   - Negotiate prices and terms
   - Cancel requests before accepting

4. Companies must provide:
   - Clear pricing breakdown
   - Service timeline
   - Terms and conditions

5. You're not obligated to accept any quote.

Choose the option that best fits your needs and budget.`,
  },
  "4": {
    id: "4",
    question: "A problem occurred while using the service.",
    date: "2025.02.20",
    answer: `If you encounter problems while using our service:

1. Technical Issues:
   - Close and restart the app
   - Check your internet connection
   - Update to the latest app version

2. Service Provider Issues:
   - Contact the provider directly through chat
   - Document the problem with photos if applicable
   - Contact our customer service if unresolved

3. Payment Issues:
   - Check your payment method
   - Contact your bank if needed
   - Reach out to our billing support

4. For urgent issues, use 1:1 inquiry for immediate assistance.

We're committed to resolving all issues quickly and fairly.`,
  },
  "5": {
    id: "5",
    question: "How do I delete my account?",
    date: "2025.02.15",
    answer: `To delete your account, please follow these steps:

1. Go to Profile Settings in the app.

2. Scroll down to find "Account Management" section.

3. Select "Delete Account" option.

4. You'll need to:
   - Confirm your identity
   - Complete any pending transactions
   - Cancel active service requests

5. Account deletion is permanent and cannot be undone.

6. All your data will be removed within 30 days.

Before deleting, consider:
- Downloading your transaction history
- Completing ongoing services
- Using account suspension instead

For assistance, contact us through 1:1 inquiry.`,
  },
}

export default function FAQDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const faq = faqDetails[params.id]

  if (!faq) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">FAQ not found</p>
          <button onClick={() => router.back()} className="text-blue-500 mt-2">
            Go back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <span className="ml-2 text-blue-500">Frequently Asked Questions</span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Question and Date */}
        <div className="mb-6">
          <h1 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h1>
          <p className="text-sm text-gray-500">{faq.date}</p>
        </div>

        {/* Answer Content */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</div>
        </div>
      </div>
    </div>
  )
}
