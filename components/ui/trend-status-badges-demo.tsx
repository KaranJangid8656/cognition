"use client"

import { Card } from "@/components/ui/card"
import { TrendStatusBadge } from "@/components/ui/trend-status-badge"
import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export function TrendStatusBadgesDemo() {
  const [buzzScores, setBuzzScores] = useState({
    exploding: 92,
    rising: 76,
    stable: 50,
    cooling: 28,
  })

  const handleScoreChange = (status: keyof typeof buzzScores, value: number[]) => {
    setBuzzScores((prev) => ({
      ...prev,
      [status]: value[0],
    }))
  }

  return (
    <Card className="border-0 bg-black p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
      <h3 className="mb-6 text-center text-xl font-bold text-white">Trend Status Indicators</h3>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center gap-4">
          <TrendStatusBadge status="exploding" size="lg" buzzScore={buzzScores.exploding} />
          <div className="w-full space-y-2">
            <div className="flex justify-between">
              <span className="text-xs font-medium text-pink-400">Exploding</span>
              <span className="text-xs font-medium text-white">{buzzScores.exploding}%</span>
            </div>
            <Slider
              defaultValue={[buzzScores.exploding]}
              max={100}
              step={1}
              onValueChange={(value) => handleScoreChange("exploding", value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <TrendStatusBadge status="rising" size="lg" buzzScore={buzzScores.rising} />
          <div className="w-full space-y-2">
            <div className="flex justify-between">
              <span className="text-xs font-medium text-orange-400">Rising</span>
              <span className="text-xs font-medium text-white">{buzzScores.rising}%</span>
            </div>
            <Slider
              defaultValue={[buzzScores.rising]}
              max={100}
              step={1}
              onValueChange={(value) => handleScoreChange("rising", value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <TrendStatusBadge status="stable" size="lg" buzzScore={buzzScores.stable} />
          <div className="w-full space-y-2">
            <div className="flex justify-between">
              <span className="text-xs font-medium text-gray-400">Stable</span>
              <span className="text-xs font-medium text-white">{buzzScores.stable}%</span>
            </div>
            <Slider
              defaultValue={[buzzScores.stable]}
              max={100}
              step={1}
              onValueChange={(value) => handleScoreChange("stable", value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <TrendStatusBadge status="cooling" size="lg" buzzScore={buzzScores.cooling} />
          <div className="w-full space-y-2">
            <div className="flex justify-between">
              <span className="text-xs font-medium text-cyan-400">Cooling</span>
              <span className="text-xs font-medium text-white">{buzzScores.cooling}%</span>
            </div>
            <Slider
              defaultValue={[buzzScores.cooling]}
              max={100}
              step={1}
              onValueChange={(value) => handleScoreChange("cooling", value)}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <TrendStatusBadge status="exploding" size="sm" showTooltip={false} />
            <span className="text-xs text-white">Exploding</span>
          </div>
          <div className="h-16 w-full rounded-none bg-gradient-to-b from-black to-gray-900 p-2">
            <div className="flex h-full items-center justify-center">
              <div className="h-0.5 w-full bg-gray-800">
                <div className="h-full w-3/4 animate-pulse bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <TrendStatusBadge status="rising" size="sm" showTooltip={false} />
            <span className="text-xs text-white">Rising</span>
          </div>
          <div className="h-16 w-full rounded-none bg-gradient-to-b from-black to-gray-900 p-2">
            <div className="flex h-full items-center justify-center">
              <div className="h-0.5 w-full bg-gray-800">
                <div className="h-full w-1/2 animate-pulse bg-gradient-to-r from-orange-500 to-green-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <TrendStatusBadge status="stable" size="sm" showTooltip={false} />
            <span className="text-xs text-white">Stable</span>
          </div>
          <div className="h-16 w-full rounded-none bg-gradient-to-b from-black to-gray-900 p-2">
            <div className="flex h-full items-center justify-center">
              <div className="h-0.5 w-full bg-gray-800">
                <div className="h-full w-1/3 animate-pulse bg-gradient-to-r from-gray-400 to-gray-500"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <TrendStatusBadge status="cooling" size="sm" showTooltip={false} />
            <span className="text-xs text-white">Cooling</span>
          </div>
          <div className="h-16 w-full rounded-none bg-gradient-to-b from-black to-gray-900 p-2">
            <div className="flex h-full items-center justify-center">
              <div className="h-0.5 w-full bg-gray-800">
                <div className="h-full w-1/4 animate-pulse bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
