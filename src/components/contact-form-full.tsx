import type React from "react"
import { useState } from "react"
import { Button } from "../components/ui/button"

export function ContactFormFull() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="FIRST NAME*"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white text-white placeholder-gray-400"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="LAST NAME*"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="email"
            name="email"
            placeholder="EMAIL ID*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white text-white placeholder-gray-400"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUMBER*"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder="SUBJECT*"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white text-white placeholder-gray-400"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="MESSAGE"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white text-white placeholder-gray-400 resize-none"
        ></textarea>
      </div>

      <div className="text-center">
        <Button type="submit" className="bg-red-600 hover:bg-red-700 px-12">
          SUBMIT
        </Button>
      </div>
    </form>
  )
}
