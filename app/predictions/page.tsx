import { PredictionCard } from "@/components/ui/prediction-card"

// Sample data
const predictions = [
  {
    id: 1,
    title: "AI-Generated Art Controversy",
    confidence: 87,
    peakTime: "3 hours",
    chartData: [
      { x: 0, y: 10 },
      { x: 20, y: 15 },
      { x: 40, y: 25 },
      { x: 60, y: 30 },
      { x: 80, y: 35 },
      { x: 100, y: 25 },
    ],
  },
  {
    id: 2,
    title: "New Quantum Computing Breakthrough",
    confidence: 76,
    peakTime: "8 hours",
    chartData: [
      { x: 0, y: 5 },
      { x: 20, y: 10 },
      { x: 40, y: 20 },
      { x: 60, y: 30 },
      { x: 80, y: 25 },
      { x: 100, y: 15 },
    ],
  },
  {
    id: 3,
    title: "Global Climate Summit Results",
    confidence: 92,
    peakTime: "12 hours",
    chartData: [
      { x: 0, y: 15 },
      { x: 20, y: 20 },
      { x: 40, y: 30 },
      { x: 60, y: 35 },
      { x: 80, y: 30 },
      { x: 100, y: 20 },
    ],
  },
  {
    id: 4,
    title: "Cryptocurrency Market Crash",
    confidence: 95,
    peakTime: "2 hours",
    chartData: [
      { x: 0, y: 20 },
      { x: 20, y: 25 },
      { x: 40, y: 35 },
      { x: 60, y: 30 },
      { x: 80, y: 20 },
      { x: 100, y: 15 },
    ],
  },
  {
    id: 5,
    title: "New Space Telescope Discoveries",
    confidence: 81,
    peakTime: "6 hours",
    chartData: [
      { x: 0, y: 10 },
      { x: 20, y: 15 },
      { x: 40, y: 20 },
      { x: 60, y: 25 },
      { x: 80, y: 30 },
      { x: 100, y: 20 },
    ],
  },
  {
    id: 6,
    title: "Olympic Games Controversy",
    confidence: 89,
    peakTime: "4 hours",
    chartData: [
      { x: 0, y: 15 },
      { x: 20, y: 25 },
      { x: 40, y: 30 },
      { x: 60, y: 25 },
      { x: 80, y: 20 },
      { x: 100, y: 15 },
    ],
  },
  {
    id: 7,
    title: "New Streaming Platform Launch",
    confidence: 72,
    peakTime: "10 hours",
    chartData: [
      { x: 0, y: 5 },
      { x: 20, y: 10 },
      { x: 40, y: 15 },
      { x: 60, y: 25 },
      { x: 80, y: 30 },
      { x: 100, y: 20 },
    ],
  },
  {
    id: 8,
    title: "Healthcare Reform Debate",
    confidence: 84,
    peakTime: "5 hours",
    chartData: [
      { x: 0, y: 10 },
      { x: 20, y: 20 },
      { x: 40, y: 25 },
      { x: 60, y: 30 },
      { x: 80, y: 25 },
      { x: 100, y: 15 },
    ],
  },
  {
    id: 9,
    title: "New Electric Vehicle Announcement",
    confidence: 78,
    peakTime: "7 hours",
    chartData: [
      { x: 0, y: 5 },
      { x: 20, y: 15 },
      { x: 40, y: 25 },
      { x: 60, y: 30 },
      { x: 80, y: 25 },
      { x: 100, y: 20 },
    ],
  },
]

export default function PredictionsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-2 text-3xl font-bold">Buzz Predictions</h1>
      <p className="mb-6 text-muted-foreground">AI-powered predictions for the next 24 hours</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {predictions.map((prediction) => (
          <PredictionCard
            key={prediction.id}
            title={prediction.title}
            confidence={prediction.confidence}
            peakTime={prediction.peakTime}
            chartData={prediction.chartData}
          />
        ))}
      </div>
    </div>
  )
}
