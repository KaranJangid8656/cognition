"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Twitter, RssIcon as Reddit, Facebook, Instagram, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrendWarsProps {
  className?: string
  autoRotate?: boolean
}

// Sample data
const trendTopics = [
  {
    id: 1,
    title: "AI-Generated Art Controversy",
    source: "Twitter",
    sourceIcon: <Twitter className="h-3.5 w-3.5" />,
    buzzScore: 87,
    mentions: 24563,
    growth: 24,
    data: [40, 45, 50, 58, 65, 72, 80, 87],
  },
  {
    id: 2,
    title: "New Quantum Computing Breakthrough",
    source: "Reddit",
    sourceIcon: <Reddit className="h-3.5 w-3.5" />,
    buzzScore: 76,
    mentions: 18921,
    growth: 18,
    data: [30, 35, 45, 55, 60, 68, 72, 76],
  },
  {
    id: 3,
    title: "Global Climate Summit Results",
    source: "Facebook",
    sourceIcon: <Facebook className="h-3.5 w-3.5" />,
    buzzScore: 92,
    mentions: 32145,
    growth: -5,
    data: [95, 94, 92, 90, 88, 85, 83, 80],
  },
  {
    id: 4,
    title: "Cryptocurrency Market Crash",
    source: "Twitter",
    sourceIcon: <Twitter className="h-3.5 w-3.5" />,
    buzzScore: 95,
    mentions: 41278,
    growth: 32,
    data: [50, 55, 65, 72, 80, 85, 90, 95],
  },
  {
    id: 5,
    title: "New Space Telescope Discoveries",
    source: "Reddit",
    sourceIcon: <Reddit className="h-3.5 w-3.5" />,
    buzzScore: 81,
    mentions: 15632,
    growth: 12,
    data: [60, 65, 68, 72, 75, 78, 80, 81],
  },
  {
    id: 6,
    title: "Viral TikTok Dance Challenge",
    source: "Instagram",
    sourceIcon: <Instagram className="h-3.5 w-3.5" />,
    buzzScore: 89,
    mentions: 28943,
    growth: 28,
    data: [45, 52, 60, 68, 75, 80, 85, 89],
  },
  {
    id: 7,
    title: "New Streaming Platform Launch",
    source: "Youtube",
    sourceIcon: <Youtube className="h-3.5 w-3.5" />,
    buzzScore: 72,
    mentions: 19872,
    growth: 8,
    data: [60, 62, 65, 67, 69, 70, 71, 72],
  },
]

export function TrendWars({ className, autoRotate = true }: TrendWarsProps) {
  const [leftTrend, setLeftTrend] = useState(trendTopics[0])
  const [rightTrend, setRightTrend] = useState(trendTopics[1])

  // Auto-rotate battles every 10 seconds if enabled
  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      const leftIndex = Math.floor(Math.random() * trendTopics.length)
      let rightIndex
      do {
        rightIndex = Math.floor(Math.random() * trendTopics.length)
      } while (rightIndex === leftIndex)

      setLeftTrend(trendTopics[leftIndex])
      setRightTrend(trendTopics[rightIndex])
    }, 10000)

    return () => clearInterval(interval)
  }, [autoRotate])

  // Determine winner
  const leftScore = leftTrend.buzzScore + (leftTrend.growth > 0 ? leftTrend.growth : 0)
  const rightScore = rightTrend.buzzScore + (rightTrend.growth > 0 ? rightTrend.growth : 0)
  const winner = leftScore > rightScore ? "left" : rightScore > leftScore ? "right" : "tie"

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <CardTitle>Trend Wars: Battle of the Buzz</CardTitle>
          <div className="flex gap-2">
            <Select
              value={leftTrend.id.toString()}
              onValueChange={(value) => setLeftTrend(trendTopics.find((t) => t.id.toString() === value)!)}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue placeholder="Select trend" />
              </SelectTrigger>
              <SelectContent>
                {trendTopics.map((trend) => (
                  <SelectItem key={`left-${trend.id}`} value={trend.id.toString()}>
                    {trend.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={rightTrend.id.toString()}
              onValueChange={(value) => setRightTrend(trendTopics.find((t) => t.id.toString() === value)!)}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue placeholder="Select trend" />
              </SelectTrigger>
              <SelectContent>
                {trendTopics.map((trend) => (
                  <SelectItem key={`right-${trend.id}`} value={trend.id.toString()}>
                    {trend.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col items-stretch gap-4 md:flex-row">
          {/* Left Trend */}
          <div
            className={cn(
              "flex-1 rounded-lg border p-4 transition-all duration-300",
              winner === "left" && "border-primary/50 bg-primary/5 shadow-lg shadow-primary/20",
            )}
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{leftTrend.title}</h3>
              {winner === "left" && (
                <Badge variant="outline" className="border-primary bg-primary/10 text-primary">
                  Winner
                </Badge>
              )}
            </div>

            <div className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
              {leftTrend.sourceIcon}
              <span>{leftTrend.source}</span>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Buzz Score</div>
                <div className="text-2xl font-bold">{leftTrend.buzzScore}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Mentions (24h)</div>
                <div className="text-2xl font-bold">{leftTrend.mentions.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Growth Rate</div>
                <div className={cn("text-2xl font-bold", leftTrend.growth > 0 ? "text-green-500" : "text-red-500")}>
                  {leftTrend.growth > 0 ? "+" : ""}
                  {leftTrend.growth}%
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Score</div>
                <div className="text-2xl font-bold">{leftScore}</div>
              </div>
            </div>

            {/* Mini trend chart */}
            <div className="h-16 w-full">
              <svg viewBox="0 0 100 40" className="h-full w-full">
                <path
                  d={`M 0,${40 - (leftTrend.data[0] / 100) * 40} ${leftTrend.data
                    .map((value, i) => `L ${(i * 100) / (leftTrend.data.length - 1)},${40 - (value / 100) * 40}`)
                    .join(" ")}`}
                  fill="none"
                  stroke={leftTrend.growth > 0 ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
                  strokeWidth="2"
                />
                <circle
                  cx={100}
                  cy={40 - (leftTrend.data[leftTrend.data.length - 1] / 100) * 40}
                  r="3"
                  fill={leftTrend.growth > 0 ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
                />
              </svg>
            </div>
          </div>

          {/* VS Badge */}
          <div className="flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-lg font-bold">VS</div>
          </div>

          {/* Right Trend */}
          <div
            className={cn(
              "flex-1 rounded-lg border p-4 transition-all duration-300",
              winner === "right" && "border-primary/50 bg-primary/5 shadow-lg shadow-primary/20",
            )}
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{rightTrend.title}</h3>
              {winner === "right" && (
                <Badge variant="outline" className="border-primary bg-primary/10 text-primary">
                  Winner
                </Badge>
              )}
            </div>

            <div className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
              {rightTrend.sourceIcon}
              <span>{rightTrend.source}</span>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Buzz Score</div>
                <div className="text-2xl font-bold">{rightTrend.buzzScore}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Mentions (24h)</div>
                <div className="text-2xl font-bold">{rightTrend.mentions.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Growth Rate</div>
                <div className={cn("text-2xl font-bold", rightTrend.growth > 0 ? "text-green-500" : "text-red-500")}>
                  {rightTrend.growth > 0 ? "+" : ""}
                  {rightTrend.growth}%
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Score</div>
                <div className="text-2xl font-bold">{rightScore}</div>
              </div>
            </div>

            {/* Mini trend chart */}
            <div className="h-16 w-full">
              <svg viewBox="0 0 100 40" className="h-full w-full">
                <path
                  d={`M 0,${40 - (rightTrend.data[0] / 100) * 40} ${rightTrend.data
                    .map((value, i) => `L ${(i * 100) / (rightTrend.data.length - 1)},${40 - (value / 100) * 40}`)
                    .join(" ")}`}
                  fill="none"
                  stroke={rightTrend.growth > 0 ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
                  strokeWidth="2"
                />
                <circle
                  cx={100}
                  cy={40 - (rightTrend.data[rightTrend.data.length - 1] / 100) * 40}
                  r="3"
                  fill={rightTrend.growth > 0 ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
                />
              </svg>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
