import { Search, Twitter, RssIcon as Reddit, Facebook } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import AgentsNavbar from "@/components/agents-navbar"

// Sample data
const trends = [
  {
    id: 1,
    name: "AI-Generated Art Controversy",
    buzzScore: 87,
    mentions: 24563,
    changeRate: 24,
    source: "Twitter",
    category: "Tech",
    region: "Global",
  },
  {
    id: 2,
    name: "New Quantum Computing Breakthrough",
    buzzScore: 76,
    mentions: 18921,
    changeRate: 18,
    source: "Reddit",
    category: "Science",
    region: "North America",
  },
  {
    id: 3,
    name: "Global Climate Summit Results",
    buzzScore: 92,
    mentions: 32145,
    changeRate: -5,
    source: "Facebook",
    category: "Politics",
    region: "Europe",
  },
  {
    id: 4,
    name: "Cryptocurrency Market Crash",
    buzzScore: 95,
    mentions: 41278,
    changeRate: 32,
    source: "Twitter",
    category: "Business",
    region: "Global",
  },
  {
    id: 5,
    name: "New Space Telescope Discoveries",
    buzzScore: 81,
    mentions: 15632,
    changeRate: 12,
    source: "Reddit",
    category: "Science",
    region: "North America",
  },
  {
    id: 6,
    name: "Olympic Games Controversy",
    buzzScore: 89,
    mentions: 28943,
    changeRate: 15,
    source: "Twitter",
    category: "Sports",
    region: "Global",
  },
  {
    id: 7,
    name: "New Streaming Platform Launch",
    buzzScore: 72,
    mentions: 19872,
    changeRate: 8,
    source: "Facebook",
    category: "Entertainment",
    region: "North America",
  },
  {
    id: 8,
    name: "Healthcare Reform Debate",
    buzzScore: 84,
    mentions: 22156,
    changeRate: -3,
    source: "Twitter",
    category: "Politics",
    region: "North America",
  },
]

const timeframes = ["24h", "7d", "30d", "All time"]
const sources = ["All sources", "Twitter", "Reddit", "Facebook"]
const categories = ["All categories", "Tech", "Politics", "Sports", "Entertainment", "Science", "Business", "Health"]
const regions = ["Global", "North America", "Europe", "Asia", "South America", "Africa", "Oceania"]

import { redirect } from "next/navigation";

export default function TrendsPage() {
  redirect("/trends/learn");
  return (
    <>
      <AgentsNavbar />
      <div className="container py-8">
        <h1 className="mb-6 text-3xl font-bold">Trends</h1>
        <p className="mb-6 text-muted-foreground">AI-powered predictions for the next 24 hours</p>
        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search trends..." className="pl-8" />
              </div>

              <Select defaultValue={timeframes[0]}>
                <SelectTrigger>
                  <SelectValue placeholder="Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  {timeframes.map((timeframe) => (
                    <SelectItem key={timeframe} value={timeframe}>
                      {timeframe}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue={sources[0]}>
                <SelectTrigger>
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  {sources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue={categories[0]}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue={regions[0]}>
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Trends Table */}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Live Trending Topics</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trend</TableHead>
                  <TableHead className="text-right">Buzz Score</TableHead>
                  <TableHead className="text-right">Mentions</TableHead>
                  <TableHead className="text-right">Change Rate</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Region</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trends.map((trend) => (
                  <TableRow key={trend.id}>
                    <TableCell className="font-medium">{trend.name}</TableCell>
                    <TableCell className="text-right">{trend.buzzScore}</TableCell>
                    <TableCell className="text-right">{trend.mentions.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <span className={trend.changeRate > 0 ? "text-green-500" : "text-red-500"}>
                        {trend.changeRate > 0 ? "+" : ""}
                        {trend.changeRate}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {trend.source === "Twitter" && <Twitter className="h-3.5 w-3.5" />}
                        {trend.source === "Reddit" && <Reddit className="h-3.5 w-3.5" />}
                        {trend.source === "Facebook" && <Facebook className="h-3.5 w-3.5" />}
                        {trend.source}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{trend.category}</Badge>
                    </TableCell>
                    <TableCell>{trend.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
