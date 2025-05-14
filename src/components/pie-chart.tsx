"use client"

import { useEffect, useRef } from "react"

export function PieChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Data for pie chart
    const data = [
      { value: 40, color: "#c1f1bd" },   // Organizing Events - light green
      { value: 35, color: "#bfaefb" },   // Skills Training - lavender
      { value: 10, color: "#fff0cc" },   // Helping people - cream
      { value: 10, color: "#ffd76a" },   // Human safety - yellow
      { value: 5, color: "#fb90c7" },    // Feeding the poor - pink
    ];


    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw pie chart
    let startAngle = 0

    data.forEach((item) => {
      // Calculate slice angle
      const sliceAngle = (2 * Math.PI * item.value) / total

      // Draw slice
      ctx.beginPath()
      ctx.moveTo(150, 150)
      ctx.arc(150, 150, 120, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      // Fill slice
      ctx.fillStyle = item.color
      ctx.fill()

      // Update start angle for next slice
      startAngle += sliceAngle
    })

    // Draw center circle (donut chart)
    ctx.beginPath()
    ctx.arc(150, 150, 70, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()
  }, [])

  return <canvas ref={canvasRef} width={300} height={300} className="max-w-full h-auto" />
}
