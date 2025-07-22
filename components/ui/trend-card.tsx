import type React from "react"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TrendCardProps {
  title: string
  source: string
  sourceIcon: React.ReactNode
  buzzScore: number
  growth: number
  className?: string
}

export function TrendCard({ title, source, sourceIcon, buzzScore, growth, className }: TrendCardProps) {
  const isPositive = growth > 0

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20",
        className,
      )}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1 text-base font-medium">{title}</CardTitle>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            {sourceIcon}
            <span>{source}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{buzzScore}</span>
            <span className="text-xs text-muted-foreground">Buzz Score</span>
          </div>
          <Badge variant={isPositive ? "success" : "destructive"} className="flex items-center gap-1">
            {isPositive ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />}
            {Math.abs(growth)}%
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
