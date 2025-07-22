"use client"

import { useState } from "react"
import { Download, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Sample data
const categoryData = [
  { name: "Tech", value: 85 },
  { name: "Politics", value: 65 },
  { name: "Entertainment", value: 78 },
  { name: "Sports", value: 45 },
  { name: "Business", value: 72 },
  { name: "Science", value: 58 },
  { name: "Health", value: 62 },
]

const trendingSummary = [
  "AI-generated content is dominating discussions across platforms with a 24% increase in mentions over the last 24 hours.",
  "Climate change topics are seeing renewed interest following the Global Climate Summit, particularly in European regions.",
  "Cryptocurrency discussions have spiked due to recent market volatility, with sentiment trending negative.",
  "Space exploration content is gaining steady traction, driven by recent telescope discoveries and mission announcements.",
  "Healthcare reform debates are polarizing social media users, with regional differences in engagement patterns.",
]

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState("wordcloud")

  return (
    <div className="container py-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Insights</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            <span>CSV</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <FileText className="h-4 w-4" />
            <span>PDF</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Word Cloud */}
        <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20">
          <CardHeader>
            <CardTitle>Trending Terms</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex h-[300px] items-center justify-center rounded-lg bg-muted/50 p-6">
              <div className="relative h-full w-full overflow-hidden">
                {/* Simulated word cloud with CSS */}
                <span className="absolute left-[10%] top-[20%] text-3xl font-bold text-purple-500">AI</span>
                <span className="absolute left-[40%] top-[30%] text-2xl font-semibold text-blue-500">Climate</span>
                <span className="absolute left-[70%] top-[15%] text-xl text-green-500">Crypto</span>
                <span className="absolute left-[25%] top-[50%] text-2xl text-yellow-500">Space</span>
                <span className="absolute left-[60%] top-[60%] text-xl text-red-500">Politics</span>
                <span className="absolute left-[15%] top-[70%] text-lg text-pink-500">Healthcare</span>
                <span className="absolute left-[50%] top-[80%] text-xl text-teal-500">Tech</span>
                <span className="absolute left-[80%] top-[40%] text-lg text-orange-500">Sports</span>
                <span className="absolute left-[35%] top-[10%] text-lg text-indigo-500">Entertainment</span>
                <span className="absolute left-[75%] top-[70%] text-base text-cyan-500">Business</span>
                <span className="absolute left-[5%] top-[40%] text-base text-emerald-500">Science</span>
                <span className="absolute left-[45%] top-[65%] text-base text-rose-500">Health</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20">
          <CardHeader>
            <CardTitle>Most Buzzed Categories</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Region Heatmap */}
        <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20">
          <CardHeader>
            <CardTitle>Region-wise Buzz Heatmap</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex h-[300px] items-center justify-center rounded-lg bg-muted/50">
              <div className="relative h-full w-full overflow-hidden">
                {/* Placeholder for heatmap */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/20 to-green-500/10"></div>
                <div className="absolute left-[20%] top-[30%] h-16 w-16 rounded-full bg-red-500/40 blur-md"></div>
                <div className="absolute left-[60%] top-[20%] h-20 w-20 rounded-full bg-orange-500/30 blur-md"></div>
                <div className="absolute left-[40%] top-[50%] h-24 w-24 rounded-full bg-yellow-500/30 blur-md"></div>
                <div className="absolute left-[70%] top-[60%] h-12 w-12 rounded-full bg-green-500/20 blur-md"></div>
                <div className="absolute left-[30%] top-[70%] h-16 w-16 rounded-full bg-blue-500/20 blur-md"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trend Summary */}
        <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20">
          <CardHeader>
            <CardTitle>Trend Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">AI-generated insights based on current trend data:</p>
              <ul className="space-y-2">
                {trendingSummary.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
