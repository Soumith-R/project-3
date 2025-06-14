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
    canvas.height = 300    // Data for pie chart - Harmonious colors that complement the site theme
    const data = [
      { value: 50, color: "#1e3a8a" },   // Feeding Poor - Navy blue
      { value: 20, color: "#bdf2bf" },   // Organizing Events - Light mint green  
      { value: 10, color: "#fff0c9" },   // Skills Training - Light cream
      { value: 10, color: "#facf64" },   // Helping people - Golden yellow
      { value: 10, color: "#f28fbf" },   // Human safety - Soft pink
    ];


    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)    // Draw pie chart
    let startAngle = 0

    data.forEach((item) => {
      // Calculate slice angle
      const sliceAngle = (2 * Math.PI * item.value) / total

      // Draw slice with subtle shadow for professional look
      ctx.beginPath()
      ctx.moveTo(150, 150)
      ctx.arc(150, 150, 120, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      // Fill slice
      ctx.fillStyle = item.color
      ctx.fill()

      // Add subtle stroke for better definition
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Update start angle for next slice
      startAngle += sliceAngle
    })

    // Draw center circle (donut chart) with subtle shadow
    ctx.beginPath()
    ctx.arc(150, 150, 70, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()
    
    // Add subtle border to center circle
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
    ctx.lineWidth = 1
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} width={300} height={300} className="max-w-full h-auto" />
}
