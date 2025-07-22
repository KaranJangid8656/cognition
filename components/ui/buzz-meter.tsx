"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface BuzzMeterProps {
  value: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function BuzzMeter({ value, size = "md", className }: BuzzMeterProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value)
    }, 500)

    return () => clearTimeout(timer)
  }, [value])

  const radius = size === "sm" ? 40 : size === "md" ? 60 : 80
  const strokeWidth = size === "sm" ? 8 : size === "md" ? 10 : 12
  const circumference = 2 * Math.PI * radius
  const progress = (displayValue / 100) * circumference
  const fontSize = size === "sm" ? "text-xl" : size === "md" ? "text-3xl" : "text-5xl"
  const labelSize = size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"

  const getColor = (value: number) => {
    if (value < 30) return "from-purple-500 to-violet-400"
    if (value < 70) return "from-fuchsia-500 to-pink-400"
    return "from-pink-500 to-rose-400"
  }

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg className="transform -rotate-90" width={radius * 2 + strokeWidth * 2} height={radius * 2 + strokeWidth * 2}>
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted-foreground/20"
        />
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill="transparent"
          stroke={`url(#gradient-${size})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-in-out"
        />
        <defs>
          <linearGradient id={`gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className={`stop-color-start ${getColor(displayValue)}`} />
            <stop offset="100%" className={`stop-color-end ${getColor(displayValue)}`} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className={cn("font-bold", fontSize)}>{displayValue}</span>
        <span className={cn("text-muted-foreground", labelSize)}>Buzz Score</span>
      </div>
    </div>
  )
}
