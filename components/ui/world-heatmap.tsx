"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface WorldHeatmapProps {
  className?: string
}

const categories = [
  "All Categories",
  "Technology",
  "Politics",
  "Entertainment",
  "Sports",
  "Business",
  "Science",
  "Health",
]

// Sample data for different time periods
const regionData = {
  "1h": [
    { id: "na", name: "North America", value: 78 },
    { id: "sa", name: "South America", value: 45 },
    { id: "eu", name: "Europe", value: 82 },
    { id: "af", name: "Africa", value: 30 },
    { id: "as", name: "Asia", value: 65 },
    { id: "oc", name: "Oceania", value: 52 },
  ],
  "6h": [
    { id: "na", name: "North America", value: 85 },
    { id: "sa", name: "South America", value: 50 },
    { id: "eu", name: "Europe", value: 75 },
    { id: "af", name: "Africa", value: 35 },
    { id: "as", name: "Asia", value: 70 },
    { id: "oc", name: "Oceania", value: 60 },
  ],
  "24h": [
    { id: "na", name: "North America", value: 90 },
    { id: "sa", name: "South America", value: 60 },
    { id: "eu", name: "Europe", value: 88 },
    { id: "af", name: "Africa", value: 42 },
    { id: "as", name: "Asia", value: 78 },
    { id: "oc", name: "Oceania", value: 65 },
  ],
}

export function WorldHeatmap({ className }: WorldHeatmapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  // Get color based on value
  const getHeatColor = (value: number) => {
    if (value < 30) return "fill-blue-500/40"
    if (value < 50) return "fill-blue-500/60"
    if (value < 70) return "fill-green-500/70"
    if (value < 85) return "fill-yellow-500/80"
    return "fill-red-500/80"
  }

  return (
    <Card className={cn("overflow-hidden border border-pink-900/30 shadow-lg shadow-pink-900/20", className)}>
      <CardHeader className="pb-2">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <CardTitle>Global Buzz Intensity</CardTitle>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="24h">
          <div className="mb-4 flex justify-end">
            <TabsList>
              <TabsTrigger value="1h">Last 1h</TabsTrigger>
              <TabsTrigger value="6h">Last 6h</TabsTrigger>
              <TabsTrigger value="24h">Last 24h</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(regionData).map(([timeframe, data]) => (
            <TabsContent key={timeframe} value={timeframe} className="mt-0">
              <div className="relative h-[300px] w-full overflow-hidden rounded-none bg-black">
                {/* World map SVG - More detailed and accurate */}
                <svg viewBox="0 0 1000 500" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
                  {/* Background */}
                  <rect width="1000" height="500" fill="#000" />

                  {/* Grid lines */}
                  <g stroke="#333" strokeWidth="0.5">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} />
                    ))}
                    {Array.from({ length: 20 }).map((_, i) => (
                      <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" />
                    ))}
                  </g>

                  {/* Continents - Simplified but recognizable shapes */}
                  {/* North America */}
                  <path
                    id="na"
                    d="M150,80 L200,60 L280,70 L300,100 L320,120 L310,150 L290,180 L270,200 L240,220 L210,230 L180,220 L160,200 L140,180 L130,150 L140,120 L150,80"
                    className={cn(
                      "cursor-pointer transition-colors duration-300",
                      getHeatColor(data.find((r) => r.id === "na")?.value || 0),
                      hoveredRegion === "na" && "stroke-white stroke-2",
                    )}
                    onMouseEnter={() => setHoveredRegion("na")}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* South America */}
                  <path
                    id="sa"
                    d="M250,250 L270,280 L280,320 L270,360 L250,390 L230,410 L210,400 L200,370 L210,330 L220,290 L240,260 L250,250"
                    className={cn(
                      "cursor-pointer transition-colors duration-300",
                      getHeatColor(data.find((r) => r.id === "sa")?.value || 0),
                      hoveredRegion === "sa" && "stroke-white stroke-2",
                    )}
                    onMouseEnter={() => setHoveredRegion("sa")}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* Europe */}
                  <path
                    id="eu"
                    d="M480,80 L520,70 L560,80 L580,100 L570,130 L550,150 L520,160 L490,150 L470,130 L460,110 L470,90 L480,80"
                    className={cn(
                      "cursor-pointer transition-colors duration-300",
                      getHeatColor(data.find((r) => r.id === "eu")?.value || 0),
                      hoveredRegion === "eu" && "stroke-white stroke-2",
                    )}
                    onMouseEnter={() => setHoveredRegion("eu")}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* Africa */}
                  <path
                    id="af"
                    d="M480,170 L520,160 L550,170 L570,190 L580,220 L570,260 L550,290 L520,310 L490,300 L470,280 L460,250 L470,210 L480,170"
                    className={cn(
                      "cursor-pointer transition-colors duration-300",
                      getHeatColor(data.find((r) => r.id === "af")?.value || 0),
                      hoveredRegion === "af" && "stroke-white stroke-2",
                    )}
                    onMouseEnter={() => setHoveredRegion("af")}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* Asia */}
                  <path
                    id="as"
                    d="M600,80 L650,60 L700,70 L750,90 L780,120 L770,160 L740,190 L700,210 L650,200 L620,180 L600,150 L590,120 L600,80"
                    className={cn(
                      "cursor-pointer transition-colors duration-300",
                      getHeatColor(data.find((r) => r.id === "as")?.value || 0),
                      hoveredRegion === "as" && "stroke-white stroke-2",
                    )}
                    onMouseEnter={() => setHoveredRegion("as")}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* Oceania */}
                  <path
                    id="oc"
                    d="M780,320 L810,310 L840,320 L850,340 L840,360 L810,370 L790,360 L780,340 L780,320"
                    className={cn(
                      "cursor-pointer transition-colors duration-300",
                      getHeatColor(data.find((r) => r.id === "oc")?.value || 0),
                      hoveredRegion === "oc" && "stroke-white stroke-2",
                    )}
                    onMouseEnter={() => setHoveredRegion("oc")}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* Country borders - subtle lines */}
                  <g stroke="#333" strokeWidth="0.3" fill="none">
                    <path d="M200,60 L220,100 L240,130" />
                    <path d="M520,70 L540,90 L550,120" />
                    <path d="M650,60 L670,90 L690,120" />
                    <path d="M480,170 L500,190 L520,210" />
                  </g>
                </svg>

                {/* Tooltip */}
                {hoveredRegion && (
                  <div
                    className="absolute z-10 border border-green-500/30 bg-black p-2 text-sm shadow-lg shadow-green-500/20"
                    style={{
                      top: "10px",
                      right: "10px",
                    }}
                  >
                    <div className="font-medium">{data.find((r) => r.id === hoveredRegion)?.name}</div>
                    <div className="flex items-center gap-1">
                      <span>Buzz Index:</span>
                      <span className="font-bold">{data.find((r) => r.id === hoveredRegion)?.value}</span>
                    </div>
                  </div>
                )}

                {/* Legend */}
                <div className="absolute bottom-2 right-2 flex items-center gap-2 border border-green-900/30 bg-black/80 p-2 text-xs backdrop-blur-sm">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-blue-500/40"></div>
                    <span>Low</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-blue-500/60"></div>
                    <span>Medium</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-green-500/70"></div>
                    <span>High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-yellow-500/80"></div>
                    <span>Very High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-red-500/80"></div>
                    <span>Critical</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
