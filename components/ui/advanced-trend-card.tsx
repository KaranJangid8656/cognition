"use client"

import { useState } from "react"
import { Bell, Share, Bookmark, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendStatusBadge } from "@/components/ui/trend-status-badge"
import { cn } from "@/lib/utils"

interface TrendTopic {
  id: number
  title: string
  buzzScore: number
  growth: number
  aiTagline: string
  status: "Exploding" | "Rising" | "Stable" | "Cooling"
  region: string
  category: string
  velocity: number
  peakTime: string
  sparklineData: number[]
}

interface AdvancedTrendCardProps {
  topic: TrendTopic
  className?: string
}

export function AdvancedTrendCard({ topic, className }: AdvancedTrendCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Map status string to status type
  const getStatusType = (status: string): "exploding" | "rising" | "stable" | "cooling" => {
    return status.toLowerCase() as "exploding" | "rising" | "stable" | "cooling"
  }

  // Determine status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Exploding":
        return "text-rose-500 bg-rose-500/10 border-rose-500/20"
      case "Rising":
        return "text-purple-500 bg-purple-500/10 border-purple-500/20"
      case "Stable":
        return "text-blue-500 bg-blue-500/10 border-blue-500/20"
      case "Cooling":
        return "text-teal-500 bg-teal-500/10 border-teal-500/20"
      default:
        return "text-gray-500 bg-gray-500/10 border-gray-500/20"
    }
  }

  // Determine buzz score color
  const getBuzzScoreColor = (score: number) => {
    if (score >= 90) return "#ef4444" // Red
    if (score >= 75) return "#8b5cf6" // Purple
    if (score >= 60) return "#3b82f6" // Blue
    if (score >= 40) return "#10b981" // Green
    return "#6b7280" // Gray
  }

  // Calculate circumference for circular progress
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const progressOffset = circumference - (topic.buzzScore / 100) * circumference

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-0 bg-black p-5 transition-all duration-300",
        "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-purple-500/10 before:via-blue-500/10 before:to-teal-500/10",
        "after:absolute after:inset-0 after:-z-20 after:bg-gradient-to-br after:from-purple-900/20 after:via-blue-900/20 after:to-teal-900/20",
        isHovered && "scale-[1.02] shadow-[0_0_20px_rgba(139,92,246,0.3)]",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 15px -3px rgba(0, 0, 0, 0.6)",
      }}
    >
      {/* Category chip */}
      <Badge
        variant="outline"
        className="absolute right-4 top-4 rounded-none border-blue-500/30 bg-blue-500/10 text-blue-400"
      >
        {topic.category}
      </Badge>

      {/* Title */}
      <h3 className="mb-3 pr-20 text-xl font-bold leading-tight text-white">{topic.title}</h3>

      {/* Region badge */}
      <div className="mb-4 flex items-center gap-2">
        <Badge variant="outline" className="rounded-none border-purple-500/30 bg-purple-500/10 text-purple-400">
          {topic.region}
        </Badge>

        {/* Status badge */}
        <TrendStatusBadge
          status={getStatusType(topic.status)}
          size="sm"
          showTooltip={true}
          buzzScore={topic.buzzScore}
        />
      </div>

      {/* AI Tagline */}
      <p className="mb-4 text-sm text-gray-400">{topic.aiTagline}</p>

      <div className="mb-4 flex items-center justify-between">
        {/* Buzz Score with circular gauge */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <svg className="absolute h-full w-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="4"
              className="text-gray-800"
            />
            <circle
              cx="40"
              cy="40"
              r={radius}
              fill="transparent"
              stroke={getBuzzScoreColor(topic.buzzScore)}
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              strokeLinecap="butt"
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-white">{topic.buzzScore}</span>
            <span className="text-xs text-gray-400">Buzz Score</span>
          </div>
        </div>

        {/* Mini sparkline chart */}
        <div className="h-20 w-32">
          <svg viewBox="0 0 100 50" className="h-full w-full">
            <defs>
              <linearGradient id={`gradient-${topic.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={getBuzzScoreColor(topic.buzzScore)} stopOpacity="0.5" />
                <stop offset="100%" stopColor={getBuzzScoreColor(topic.buzzScore)} stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Area fill */}
            <path
              d={`M 0,${50 - (topic.sparklineData[0] / 100) * 50} ${topic.sparklineData
                .map((value, i) => `L ${(i * 100) / (topic.sparklineData.length - 1)},${50 - (value / 100) * 50}`)
                .join(" ")} L 100,50 L 0,50 Z`}
              fill={`url(#gradient-${topic.id})`}
            />

            {/* Line */}
            <path
              d={`M 0,${50 - (topic.sparklineData[0] / 100) * 50} ${topic.sparklineData
                .map((value, i) => `L ${(i * 100) / (topic.sparklineData.length - 1)},${50 - (value / 100) * 50}`)
                .join(" ")}`}
              fill="none"
              stroke={getBuzzScoreColor(topic.buzzScore)}
              strokeWidth="2"
              strokeLinejoin="miter"
            />

            {/* End point */}
            <circle
              cx="100"
              cy={50 - (topic.sparklineData[topic.sparklineData.length - 1] / 100) * 50}
              r="3"
              fill={getBuzzScoreColor(topic.buzzScore)}
            />
          </svg>
        </div>
      </div>

      {/* Buzz Velocity */}
      <div className="mb-4 space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Buzz Velocity</span>
          <span className="font-medium text-white">{topic.velocity}%</span>
        </div>
        <Progress
          value={topic.velocity}
          className="h-1.5 rounded-none bg-gray-800"
          indicatorClassName={cn(
            "transition-all duration-500 rounded-none",
            topic.velocity > 80
              ? "bg-gradient-to-r from-pink-500 to-fuchsia-500"
              : topic.velocity > 60
                ? "bg-gradient-to-r from-orange-500 to-green-400"
                : topic.velocity > 40
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600",
          )}
        />
      </div>

      {/* Countdown */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <div className="flex h-6 w-6 items-center justify-center bg-purple-500/20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#a855f7" strokeWidth="2" />
            <path d="M12 6V12L16 14" stroke="#a855f7" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </div>
        <span className="text-gray-300">{topic.peakTime}</span>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-none bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300"
        >
          <Bell className="h-4 w-4" />
          <span className="sr-only">Set Alert</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-none bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300"
        >
          <Bookmark className="h-4 w-4" />
          <span className="sr-only">Save</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-none bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 hover:text-teal-300"
        >
          <Share className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-none bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="sr-only">View Details</span>
        </Button>
      </div>

      {/* Glowing border effect on hover */}
      <div
        className={cn(
          "absolute inset-0 border border-transparent transition-all duration-500",
          isHovered && "border-purple-500/30 shadow-[inset_0_0_20px_rgba(139,92,246,0.2)]",
        )}
      />
    </Card>
  )
}
