"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type TrendStatus = "exploding" | "rising" | "stable" | "cooling"

interface TrendStatusBadgeProps {
  status: TrendStatus
  size?: "sm" | "md" | "lg"
  showTooltip?: boolean
  buzzScore?: number
  className?: string
}

export function TrendStatusBadge({
  status,
  size = "md",
  showTooltip = true,
  buzzScore,
  className,
}: TrendStatusBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Size mappings
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  }

  // Status-specific content and styles
  const statusConfig = {
    exploding: {
      label: "Exploding",
      tooltip: "Trendquake – This topic is skyrocketing right now!",
      baseColor: "from-pink-600 to-fuchsia-600",
      glowColor: "rgba(236, 72, 153, 0.8)",
      ringColor: "rgba(236, 72, 153, 1)",
      progressColor: "bg-gradient-to-r from-pink-500 to-fuchsia-500",
      animation: "animate-exploding",
    },
    rising: {
      label: "Rising",
      tooltip: "Gaining Altitude – Momentum is building fast.",
      baseColor: "from-orange-500 to-green-400",
      glowColor: "rgba(249, 115, 22, 0.6)",
      ringColor: "rgba(249, 115, 22, 0.8)",
      progressColor: "bg-gradient-to-r from-orange-500 to-green-400",
      animation: "animate-rising",
    },
    stable: {
      label: "Stable",
      tooltip: "Cruising Mode – Holding steady, no major shifts.",
      baseColor: "from-gray-500 to-gray-600",
      glowColor: "rgba(156, 163, 175, 0.4)",
      ringColor: "rgba(156, 163, 175, 0.6)",
      progressColor: "bg-gradient-to-r from-gray-400 to-gray-500",
      animation: "animate-stable",
    },
    cooling: {
      label: "Cooling",
      tooltip: "Losing Steam – Popularity is dropping.",
      baseColor: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.5)",
      ringColor: "rgba(6, 182, 212, 0.7)",
      progressColor: "bg-gradient-to-r from-cyan-500 to-blue-600",
      animation: "animate-cooling",
    },
  }

  const config = statusConfig[status]

  // Calculate progress percentage for the ring
  const progress = buzzScore || (status === "exploding" ? 90 : status === "rising" ? 70 : status === "stable" ? 50 : 30)
  const circumference = 2 * Math.PI * 18 // For sm size
  const offset = circumference - (progress / 100) * circumference

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base square badge with sharp corners */}
      <div
        className={cn(
          "relative flex items-center justify-center bg-black shadow-lg",
          sizeClasses[size],
          config.animation,
          // Add 3D effect with box-shadow
          "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.7),0_4px_6px_-4px_rgba(0,0,0,0.7)]",
          // Add glow effect based on status
          `before:absolute before:inset-0 before:bg-gradient-to-br before:${config.baseColor} before:opacity-20 before:blur-sm`,
          // Add border
          "border border-gray-800",
        )}
        style={{
          boxShadow: `0 10px 20px -5px ${config.glowColor}, 0 0 15px -3px ${config.glowColor}`,
        }}
      >
        {/* SVG Icon based on status */}
        <div className="relative z-10">
          {status === "exploding" && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L15 9H21L16 14L18 21L12 17L6 21L8 14L3 9H9L12 2Z"
                stroke="url(#exploding-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="exploding-gradient" x1="3" y1="2" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ec4899" />
                  <stop offset="1" stopColor="#d946ef" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {status === "rising" && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L20 15H4L12 3Z"
                stroke="url(#rising-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 21V15"
                stroke="url(#rising-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="rising-gradient" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f97316" />
                  <stop offset="1" stopColor="#4ade80" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {status === "stable" && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}

          {status === "cooling" && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L4 15H20L12 3Z"
                stroke="url(#cooling-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(180 12 12)"
              />
              <path
                d="M12 21V15"
                stroke="url(#cooling-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="cooling-gradient" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>

        {/* Progress ring */}
        {buzzScore && (
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#1f2937" strokeWidth="2" />
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke={`url(#progress-${status})`}
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="butt"
            />
            <defs>
              <linearGradient id={`progress-${status}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={
                    status === "exploding"
                      ? "#ec4899"
                      : status === "rising"
                        ? "#f97316"
                        : status === "stable"
                          ? "#9ca3af"
                          : "#06b6d4"
                  }
                />
                <stop
                  offset="100%"
                  stopColor={
                    status === "exploding"
                      ? "#d946ef"
                      : status === "rising"
                        ? "#4ade80"
                        : status === "stable"
                          ? "#6b7280"
                          : "#2563eb"
                  }
                />
              </linearGradient>
            </defs>
          </svg>
        )}

        {/* Buzz score overlay */}
        {buzzScore && (
          <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-none bg-black text-xs font-bold text-white shadow-md">
            {buzzScore}
          </div>
        )}

        {/* Shockwave ripple effect for exploding */}
        {status === "exploding" && (
          <div className="absolute inset-0 border border-pink-500 opacity-0 animate-exploding-shockwave"></div>
        )}
      </div>

      {/* Tooltip */}
      {showTooltip && isHovered && (
        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform">
          <div className="whitespace-nowrap bg-black px-3 py-1.5 text-sm text-white shadow-lg shadow-black/50">
            <p className="font-medium">{config.tooltip}</p>
            <div className="absolute left-1/2 top-full -ml-1 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-black"></div>
          </div>
        </div>
      )}
    </div>
  )
}
