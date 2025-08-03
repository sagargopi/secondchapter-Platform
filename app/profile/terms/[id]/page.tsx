"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface TermsDetail {
  id: string
  title: string
  date: string
  content: string
}

const termsDetails: Record<string, TermsDetail> = {
  "1": {
    id: "1",
    title: "Terms of Service",
    date: "Effective Date: March 1, 2025",
    content: `Article 1 (Purpose)
These Terms and Conditions are intended to regulate the rights, obligations, and responsibilities of the Company and users in relation to the use of services provided by All Management (hereinafter referred to as the "Company").

Article 2 (Definition)
1. "Service" means all services provided by the Company.
2. "User" refers to members and non-members who access the Company's services and receive services provided by the Company in accordance with these Terms and Conditions.
3. "Member" refers to a person who has registered as a member by providing personal information to the company, continuously receives information from the company, and can continuously use the services provided by the company.

Article 3 (Effectiveness and Change of Terms and Conditions)
1. These Terms and Conditions apply to all users who wish to use the Service.
2. The Company may change these Terms and Conditions if reasonable grounds arise. When changing the Terms and Conditions, the Company will specify the effective date and the reason for the change and post the change on the service home screen along with the current Terms and Conditions from 7 days prior to the effective date until the day before the effective date.

Article 4 (Provision and Change of Services)
1. The company performs the following tasks:
   A. Provision of information on living service providers
   B. Request for quotation and matching service
   Other tasks determined by the company

Article 5 (Service Interruption)
1. The Company may temporarily suspend the provision of services in the event of maintenance, inspection, replacement, or malfunction of information and communication equipment such as computers, or disruption of communication.
2. The Company shall not compensate for any damages suffered by users or third parties due to temporary suspension of service provision for the reasons specified in Paragraph 1.`,
  },
  "2": {
    id: "2",
    title: "Personal Information Collection and Use Terms and Conditions",
    date: "Effective Date: March 1, 2025",
    content: `Article 1 (Collection and Use of Personal Information)
The company processes personal information for the following purposes. The personal information being processed will not be used for any other purposes. If the purpose of use changes, the company will take necessary measures, including obtaining separate consent in accordance with Article 18 of the Personal Information Protection Act.

1. Membership registration and management
   - Confirmation of intent to register as a member, identification and authentication for provision of membership services, and maintenance and management of membership qualifications.

2. Service Provision
   - Processing quotation requests, matching vendors, and providing customer consultation services

3. Use in marketing and advertising
   - Providing customized services, event and promotional information, and opportunities for participation.

Article 2 (Items of personal information processed)
1. Required fields: name, mobile phone number, email address
2. Optional: Address, service usage history

Article 3 (Processing and Retention Period of Personal Information)
1. The company processes and retains personal information within the retention and use period stipulated by law or within the retention and use period agreed upon by the data subject at the time of collection of personal information.
2. The processing and retention periods for each personal information are as follows:
   - Membership registration and management: Immediately deleted after membership withdrawal
   - Service provision: 3 years after service termination`,
  },
  "3": {
    id: "3",
    title: "privacy policy",
    date: "Effective Date: March 1, 2025",
    content: `privacy policy

All Management (hereinafter referred to as the "Company") has established the following processing policy in accordance with the Personal Information Protection Act to protect users' personal information and rights and to smoothly handle users' complaints regarding personal information.

Article 1 Purpose of processing personal information
The company processes personal information for the following purposes.
1. Membership registration and management
   - Confirmation of intent to register as a member, identification and authentication for provision of membership services
   - Maintain and manage membership and prevent misuse of services

2. Service Provision
   - Providing quotation request and vendor matching services
   - Customer consultation and complaint handling, notice delivery

3. Marketing and Advertising Utilization
   - Providing customized services, event information, and participation opportunities
   - Statistical analysis for service improvement

Article 2 Processing and retention period of personal information
1. The company processes and retains personal information within the retention and use period stipulated by law or within the retention and use period agreed upon by the data subject at the time of collection of personal information.

2. The processing and retention periods for each personal information are as follows.
   A. Membership registration and management: Until membership withdrawal
   B. Service provision related: 3 years after completion of service provision
   Records under the Electronic Commerce Act: 5 years

Article 3 Provision of Personal Information to Third Parties
The Company processes the personal information of the data subject only within the scope specified in Article 1 (Purpose of Processing Personal Information), and provides personal information to third parties only in cases falling under Articles 17 and 18 of the Personal Information Protection Act, such as with the consent of the data subject or special provisions of the law.

Article 4 Entrustment of personal information processing
To ensure smooth processing of personal information, the company entrusts the processing of personal information as follows.
1. Trustee: AWS (Amazon Web Services)
2. Contents of the entrusted work: Cloud services and data storage

Article 5 Rights, obligations, and exercise methods of data subjects
1. The data subject may exercise the following personal information protection rights against the company at any time.
   A. Request for notification of personal information processing status
   B. Request to view personal information
   Request for correction or deletion of personal information
   Request to suspend personal information processing

Article 6 Destruction of personal information
The company destroys personal information without delay when the personal information becomes unnecessary, such as when the retention period for personal information expires or the processing purpose is achieved.

Article 7 Personal Information Protection Manager
1. The company is responsible for overall management of personal information processing and has designated a personal information protection officer as follows to handle complaints and provide remedies to data subjects related to personal information processing.

Personal Information Protection Manager
Name: Hong Gil-dong
Position: Personal Information Protection Team Leader
Email: privacy@example.com
Phone number: 02-1234-5678

Article 8 Changes to the Personal Information Processing Policy
This Privacy Policy applies from March 1, 2025.`,
  },
  "4": {
    id: "4",
    title: "Terms of Use for Location-Based Services",
    date: "Effective Date: February 15, 2025",
    content: `Article 1 (Purpose)
These Terms and Conditions are intended to regulate the rights, obligations, responsibilities, and other necessary matters between the Company and individual location information subjects regarding the location-based services provided by All Management (hereinafter referred to as the "Company").

Article 2 (Effectiveness and Change of Terms and Conditions)
1. These terms and conditions come into effect when the individual location information subject agrees to them.
2. The Company may revise these Terms and Conditions to the extent that it does not violate relevant laws, including the Act on Regulation of Terms and Conditions, the Act on the Protection and Use of Location Information, and the Act on Promotion of Information and Communications Network Utilization and Information Protection.

Article 3 (Service Contents and Fees)
1. The company receives location information from location information service providers and provides the following location-based services.
   A. Search and recommend local service providers
   b. Providing location-based personalized information

Article 4 (Rights of Personal Location Information Subjects)
1. The personal location information subject may withdraw consent to the collection, use, and provision of personal location information at any time.
2. The personal location information subject may request a temporary suspension of the collection, use, or provision of personal location information at any time.

Article 5 (Use and provision of personal location information)
1. If the company wishes to provide a service using personal location information, it must specify this in advance in the terms and conditions or notify the person providing the personal location information and obtain the consent of the person providing the information.
2. The location information of the individual location information subject will not be provided to a third party without the consent of the individual location information subject.`,
  },
  "5": {
    id: "5",
    title: "Electronic Financial Transaction Terms and Conditions",
    date: "Effective Date: February 1, 2025",
    content: `Article 1 (Purpose)
These Terms and Conditions are intended to establish the basic matters regarding electronic financial transactions between the Company and users when using the electronic financial transaction services provided by All Management (hereinafter referred to as the "Company").

Article 2 (Definition of Terms)
The terms used in these Terms and Conditions are defined as follows:
1. "Electronic financial transaction" refers to a transaction in which a company provides financial products and services through electronic devices, and users use them in an automated manner without directly meeting or communicating with company employees.

Article 3 (Specification and Change of Terms and Conditions)
1. The Company posts these Terms and Conditions before users use electronic financial transaction services and ensures that users can check the important contents of these Terms and Conditions.

Article 4 (Types of Electronic Financial Transaction Services)
The electronic financial transaction services provided by the company are as follows:
1. Service fee payment service
2. Other electronic financial transaction services determined by the company

Article 5 (Usage Time)
1. Electronic financial transactions are, in principle, available 24 hours a day, 365 days a year.
2. However, this does not apply to days or times set by the company for regular inspections, etc.

Article 6 (Withdrawal of transaction instructions)
1. Users may withdraw transaction instructions for electronic financial transactions, except in any of the following cases:
   A. If the notification reaches the counterparty immediately after the user issues a transaction instruction.
   B. Other reasons specified in the Electronic Financial Transactions Act`,
  },
}

export default function TermsDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const terms = termsDetails[params.id]

  if (!terms) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Terms not found</p>
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
        <span className="ml-2 text-blue-500">Terms and Conditions</span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Date */}
        <div className="mb-6">
          <h1 className="text-lg font-medium text-gray-900 mb-2">{terms.title}</h1>
          <p className="text-sm text-gray-500">{terms.date}</p>
        </div>

        {/* Terms Content */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">{terms.content}</div>
        </div>
      </div>
    </div>
  )
}
