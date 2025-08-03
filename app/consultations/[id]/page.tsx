"use client"

import type React from "react"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Send, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  sender: "user" | "company"
  timestamp: string
  isRead?: boolean
}

const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      text: "Contract Request",
      sender: "user",
      timestamp: "14:06",
    },
    {
      id: "2",
      text: "Is it possible to make 400,000 won today?",
      sender: "user",
      timestamp: "14:06",
    },
    {
      id: "3",
      text: "Yes, that's right!",
      sender: "company",
      timestamp: "14:08",
    },
    {
      id: "4",
      text: "I'll proceed",
      sender: "user",
      timestamp: "15:16",
    },
    {
      id: "5",
      text: "Please check the notice received on Naver and if you agree, we will send you an application form!",
      sender: "company",
      timestamp: "15:21",
    },
    {
      id: "6",
      text: "yes",
      sender: "user",
      timestamp: "15:41",
    },
    {
      id: "7",
      text: "Please send us an application form to join!",
      sender: "company",
      timestamp: "15:43",
    },
    {
      id: "8",
      text: "I won",
      sender: "company",
      timestamp: "15:44",
    },
  ],
  "2": [
    {
      id: "1",
      text: "Contract Request",
      sender: "user",
      timestamp: "14:06",
    },
    {
      id: "2",
      text: "Is it possible to make 400,000 won today?",
      sender: "user",
      timestamp: "14:06",
    },
    {
      id: "3",
      text: "Yes, that's right!",
      sender: "company",
      timestamp: "14:08",
    },
    {
      id: "4",
      text: "I'll proceed",
      sender: "user",
      timestamp: "15:16",
    },
    {
      id: "5",
      text: "Please check the notice received on Naver and if you agree, we will send you an application form!",
      sender: "company",
      timestamp: "15:21",
    },
    {
      id: "6",
      text: "yes",
      sender: "user",
      timestamp: "15:41",
    },
    {
      id: "7",
      text: "Please send us an application form to join!",
      sender: "company",
      timestamp: "15:43",
    },
    {
      id: "8",
      text: "I won",
      sender: "company",
      timestamp: "15:44",
    },
  ],
  "3": [
    {
      id: "1",
      text: "Contract Request",
      sender: "user",
      timestamp: "14:06",
    },
    {
      id: "2",
      text: "Is it possible to make 400,000 won today?",
      sender: "user",
      timestamp: "14:06",
    },
    {
      id: "3",
      text: "Yes, that's right!",
      sender: "company",
      timestamp: "14:08",
    },
    {
      id: "4",
      text: "I'll proceed",
      sender: "user",
      timestamp: "15:16",
    },
    {
      id: "5",
      text: "Please check the notice received on Naver and if you agree, we will send you an application form!",
      sender: "company",
      timestamp: "15:21",
    },
    {
      id: "6",
      text: "yes",
      sender: "user",
      timestamp: "15:41",
    },
    {
      id: "7",
      text: "Please send us an application form to join!",
      sender: "company",
      timestamp: "15:43",
    },
    {
      id: "8",
      text: "I won",
      sender: "company",
      timestamp: "15:44",
    },
  ],
}

export default function ChatPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const companyName = searchParams.get("company") || "Company"
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const messages = mockMessages[params.id] || []

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // TODO: Add message to conversation
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleContractRequest = () => {
    router.push(`/consultations/${params.id}/contract-request?company=${encodeURIComponent(companyName)}`)
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center space-x-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="font-medium text-gray-900">{companyName}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleContractRequest}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
          >
            Contract Request
          </button>
          <button className="p-2">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className="flex items-start space-x-2 max-w-[80%]">
              {message.sender === "company" && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0 mt-1"></div>
              )}
              <div>
                {message.sender === "company" && <p className="text-xs text-gray-500 mb-1">company</p>}
                <div
                  className={`px-3 py-2 rounded-lg ${
                    message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t bg-white p-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Paperclip className="w-5 h-5" />
          </button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Please enter your message"
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
