import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { InfoIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PredictionCardProps {
  title: string
  confidence: number
  peakTime: string
  chartData: Array<{ x: number; y: number }>
  className?: string
}

export function PredictionCard({ title, confidence, peakTime, chartData, className }: PredictionCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20",
        className,
      )}
    >
      <CardHeader className="p-4 pb-2">
        <CardTitle className="line-clamp-1 text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span>Confidence</span>
              <span className="font-medium">{confidence}%</span>
            </div>
            <Progress value={confidence} className="h-2" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span>Expected peak</span>
            <span className="font-medium">{peakTime}</span>
          </div>

          <div className="h-16 w-full">
            <svg viewBox="0 0 100 40" className="h-full w-full">
              <path
                d={`M 0,40 ${chartData.map((point) => `L ${point.x},${40 - point.y}`).join(" ")}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
              />
              <circle
                cx={chartData[chartData.length - 1].x}
                cy={40 - chartData[chartData.length - 1].y}
                r="2"
                fill="hsl(var(--primary))"
              />
            </svg>
          </div>

          <Button variant="outline" size="sm" className="w-full gap-1">
            <InfoIcon className="h-3.5 w-3.5" />
            <span>AI Explanation</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
