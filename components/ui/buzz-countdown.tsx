"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface BuzzCountdownProps {
  className?: string
}

// Sample data
const upcomingTrends = [
  {
    id: 1,
    title: "AI-Generated Art Controversy",
    timeToExplode: 120, // minutes
    confidence: 87,
    category: "Technology",
    data: [40, 45, 50, 58, 65, 72, 80, 87],
  },
  {
    id: 2,
    title: "New Quantum Computing Breakthrough",
    timeToExplode: 180, // minutes
    confidence: 76,
    category: "Science",
    data: [30, 35, 45, 55, 60, 68, 72, 76],
  },
  {
    id: 3,
    title: "Global Climate Summit Results",
    timeToExplode: 60, // minutes
    confidence: 92,
    category: "Politics",
    data: [50, 55, 60, 65, 70, 75, 80, 85],
  },
]

export function BuzzCountdown({ className }: BuzzCountdownProps) {
  const [countdown, setCountdown] = useState<{ [key: number]: string }>({})

  // Format time remaining
  const formatTimeRemaining = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  // Update countdown every minute
  useEffect(() => {
    const updateCountdown = () => {
      const newCountdown: { [key: number]: string } = {}
      upcomingTrends.forEach((trend) => {
        newCountdown[trend.id] = formatTimeRemaining(trend.timeToExplode)
      })
      setCountdown(newCountdown)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle>Buzz Countdown: Trends About to Explode</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-6">
          {upcomingTrends.map((trend) => (
            <div key={trend.id} className="rounded-lg border p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{trend.title}</h3>
                <Badge variant="outline">{trend.category}</Badge>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Expected to peak</div>
                  <div className="text-lg font-medium">In {formatTimeRemaining(trend.timeToExplode)}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Countdown</div>
                  <div className="flex items-center gap-1 text-lg font-medium">
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                    {countdown[trend.id] || formatTimeRemaining(trend.timeToExplode)}
                  </div>
                </div>
              </div>

              <div className="mb-4 space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Prediction confidence</span>
                  <span>{trend.confidence}%</span>
                </div>
                <Progress value={trend.confidence} className="h-2" />
              </div>

              {/* Mini trend chart */}
              <div className="h-12 w-full">
                <svg viewBox="0 0 100 40" className="h-full w-full">
                  <path
                    d={`M 0,${40 - (trend.data[0] / 100) * 40} ${trend.data
                      .map((value, i) => `L ${(i * 100) / (trend.data.length - 1)},${40 - (value / 100) * 40}`)
                      .join(" ")}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                  />
                  <circle
                    cx={100}
                    cy={40 - (trend.data[trend.data.length - 1] / 100) * 40}
                    r="3"
                    fill="hsl(var(--primary))"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
