import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, ClockIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AlertCardProps {
  time: string
  topic: string
  spikePercentage: number
  source: string
  category: string
  className?: string
}

export function AlertCard({ time, topic, spikePercentage, source, category, className }: AlertCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20",
        className,
      )}
    >
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ClockIcon className="h-3.5 w-3.5" />
            <span>{time}</span>
          </div>

          <h3 className="font-medium">{topic}</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Badge variant="outline" className="text-xs">
                {source}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            </div>

            <Badge variant="success" className="flex items-center gap-1">
              <ArrowUpIcon className="h-3 w-3" />
              {spikePercentage}%
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
