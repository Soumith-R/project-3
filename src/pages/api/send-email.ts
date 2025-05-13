import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { firstName, lastName, email, phone, subject, message } = req.body

  // Compose email content
  const mailSubject = subject || "New Contact Form Submission"
  const mailText = `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone || "N/A"}
    Subject: ${subject || "N/A"}
    Message: ${message}
  `

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // Set this env variable to your receiving email
      subject: mailSubject,
      text: mailText,
    })

    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" })
  }
}
