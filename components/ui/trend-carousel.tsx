"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdvancedTrendCard } from "@/components/ui/advanced-trend-card"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Sample data for trending topics
const trendingTopics = [
  {
    id: 1,
    title: "AI-Generated Art Controversy",
    buzzScore: 87,
    growth: 24,
    aiTagline: "Sudden surge in creative community discussions",
    status: "Exploding",
    region: "🌐 Global",
    category: "Tech",
    velocity: 78,
    peakTime: "1h 24m",
    sparklineData: [40, 42, 45, 50, 58, 70, 82, 87],
  },
  {
    id: 2,
    title: "Quantum Computing Breakthrough",
    buzzScore: 76,
    growth: 18,
    aiTagline: "Scientific community abuzz with new research",
    status: "Rising",
    region: "🇺🇸 USA",
    category: "Science",
    velocity: 65,
    peakTime: "3h 45m",
    sparklineData: [30, 35, 45, 55, 60, 68, 72, 76],
  },
  {
    id: 3,
    title: "Global Climate Summit Results",
    buzzScore: 92,
    growth: -5,
    aiTagline: "Policy discussions cooling after initial spike",
    status: "Cooling",
    region: "🇪🇺 Europe",
    category: "Politics",
    velocity: 45,
    peakTime: "Peaked 2h ago",
    sparklineData: [95, 94, 92, 90, 88, 85, 83, 80],
  },
  {
    id: 4,
    title: "Cryptocurrency Market Crash",
    buzzScore: 95,
    growth: 32,
    aiTagline: "Financial markets in turmoil as prices plummet",
    status: "Exploding",
    region: "🌐 Global",
    category: "Finance",
    velocity: 92,
    peakTime: "45m",
    sparklineData: [50, 55, 65, 72, 80, 85, 90, 95],
  },
  {
    id: 5,
    title: "New Space Telescope Discoveries",
    buzzScore: 81,
    growth: 12,
    aiTagline: "Astronomical community excited by new findings",
    status: "Rising",
    region: "🌐 Global",
    category: "Science",
    velocity: 58,
    peakTime: "2h 15m",
    sparklineData: [60, 65, 68, 72, 75, 78, 80, 81],
  },
  {
    id: 6,
    title: "Viral TikTok Dance Challenge",
    buzzScore: 89,
    growth: 28,
    aiTagline: "Gen Z driving massive engagement spike",
    status: "Exploding",
    region: "🇰🇷 Korea",
    category: "Entertainment",
    velocity: 85,
    peakTime: "30m",
    sparklineData: [45, 52, 60, 68, 75, 80, 85, 89],
  },
  {
    id: 7,
    title: "Healthcare Reform Debate",
    buzzScore: 84,
    growth: -3,
    aiTagline: "Political discourse stabilizing after heated debate",
    status: "Stable",
    region: "🇺🇸 USA",
    category: "Politics",
    velocity: 40,
    peakTime: "Stable",
    sparklineData: [85, 86, 87, 85, 84, 83, 84, 84],
  },
  {
    id: 8,
    title: "New Electric Vehicle Announcement",
    buzzScore: 78,
    growth: 15,
    aiTagline: "Tech enthusiasts excited about new features",
    status: "Rising",
    region: "🇩🇪 Germany",
    category: "Tech",
    velocity: 62,
    peakTime: "4h 10m",
    sparklineData: [55, 58, 62, 65, 70, 73, 76, 78],
  },
]

type FilterOption = "Most Buzz" | "Fastest Rising" | "Global" | "By Category"

interface TrendCarouselProps {
  className?: string
}

export function TrendCarousel({ className }: TrendCarouselProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("Most Buzz")
  const carouselRef = useRef<HTMLDivElement>(null)

  // Filter the topics based on the active filter
  const filteredTopics = (() => {
    switch (activeFilter) {
      case "Most Buzz":
        return [...trendingTopics].sort((a, b) => b.buzzScore - a.buzzScore)
      case "Fastest Rising":
        return [...trendingTopics].sort((a, b) => b.velocity - a.velocity)
      case "Global":
        return trendingTopics.filter((topic) => topic.region.includes("Global"))
      case "By Category":
        // Group by category and then flatten
        const categories = [...new Set(trendingTopics.map((topic) => topic.category))]
        return categories.flatMap((category) => trendingTopics.filter((topic) => topic.category === category))
      default:
        return trendingTopics
    }
  })()

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const scrollAmount =
      direction === "left" ? -carouselRef.current.clientWidth * 0.8 : carouselRef.current.clientWidth * 0.8

    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Header with filters and view all button */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Top Trending Topics</h2>

        <div className="flex items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {(["Most Buzz", "Fastest Rising", "Global", "By Category"] as FilterOption[]).map((filter) => (
              <Badge
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  activeFilter === filter
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "hover:border-purple-500 hover:text-purple-400",
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "By Category" && <Filter className="mr-1 h-3 w-3" />}
                {filter}
              </Badge>
            ))}
          </div>

          <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/trends">View All Trends</Link>
          </Button>
        </div>
      </div>

      {/* Carousel navigation buttons */}
      <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>

      <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex w-full gap-6 overflow-x-auto pb-6 pt-2 scrollbar-hide"
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "1rem",
          scrollPaddingRight: "1rem",
        }}
      >
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            className="min-w-[320px] max-w-[320px] flex-shrink-0 scroll-snap-align-start"
            style={{ scrollSnapAlign: "start" }}
          >
            <AdvancedTrendCard topic={topic} />
          </div>
        ))}
      </div>
    </div>
  )
}
