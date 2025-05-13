import type React from "react"
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed to send email")
      setSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (err: any) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          name="firstName"
          placeholder="FIRST NAME"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="bg-white text-gray-800"
        />
        <Input
          type="text"
          name="lastName"
          placeholder="LAST NAME"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="bg-white text-gray-800"
        />
      </div>
      <Input
        type="email"
        name="email"
        placeholder="EMAIL"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-white text-gray-800"
      />
      <Input
        type="tel"
        name="phone"
        placeholder="PHONE NUMBER"
        value={formData.phone}
        onChange={handleChange}
        className="bg-white text-gray-800"
      />
      <Textarea
        name="message"
        placeholder="MESSAGE"
        value={formData.message}
        onChange={handleChange}
        required
        className="bg-white text-gray-800 min-h-[120px]"
      />
      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </Button>
      {success && <div className="text-green-500 text-center">Form submitted successfully!</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}
    </form>
  )
}
