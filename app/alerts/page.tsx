import { AlertCard } from "@/components/ui/alert-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const alerts = [
  {
    id: 1,
    time: "10 minutes ago",
    topic: "AI-Generated Art Controversy",
    spikePercentage: 24,
    source: "Twitter",
    category: "Tech",
  },
  {
    id: 2,
    time: "45 minutes ago",
    topic: "Cryptocurrency Market Crash",
    spikePercentage: 32,
    source: "Reddit",
    category: "Business",
  },
  {
    id: 3,
    time: "1 hour ago",
    topic: "New Space Telescope Discoveries",
    spikePercentage: 18,
    source: "Twitter",
    category: "Science",
  },
  {
    id: 4,
    time: "2 hours ago",
    topic: "Olympic Games Controversy",
    spikePercentage: 15,
    source: "Facebook",
    category: "Sports",
  },
  {
    id: 5,
    time: "3 hours ago",
    topic: "Healthcare Reform Debate",
    spikePercentage: 12,
    source: "Twitter",
    category: "Politics",
  },
]

const categories = ["All Categories", "Tech", "Politics", "Sports", "Entertainment", "Science", "Business", "Health"]

export default function AlertsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Alerts</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Alert List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Alerts</h2>
          {alerts.map((alert) => (
            <AlertCard
              key={alert.id}
              time={alert.time}
              topic={alert.topic}
              spikePercentage={alert.spikePercentage}
              source={alert.source}
              category={alert.category}
            />
          ))}
        </div>

        {/* Alert Control Panel */}
        <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/20">
          <CardHeader>
            <CardTitle>Alert Control Panel</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Real-time Alerts Toggle */}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="real-time-alerts">Real-time Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications when trends spike</p>
                </div>
                <Switch id="real-time-alerts" defaultChecked />
              </div>

              {/* Threshold Slider */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label>Buzz Score Threshold</Label>
                  <p className="text-sm text-muted-foreground">Alert me when a topic reaches this buzz score</p>
                </div>
                <div className="flex items-center gap-4">
                  <Slider defaultValue={[80]} max={100} step={1} />
                  <span className="w-12 text-center font-medium">80</span>
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-1.5">
                <Label htmlFor="category-filter">Category</Label>
                <Select defaultValue={categories[0]}>
                  <SelectTrigger id="category-filter">
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

              {/* Custom Topic */}
              <div className="space-y-1.5">
                <Label htmlFor="custom-topic">Custom Topic (Optional)</Label>
                <Input id="custom-topic" placeholder="Enter a specific topic to track" />
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <Button className="flex-1">Save Settings</Button>
                <Button variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
