"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { TrendingUp, BarChart3, LineChart, PieChart, BellRing, Zap, Globe, Lightbulb, Rocket } from "lucide-react"
import { BuzzMeter } from "@/components/ui/buzz-meter"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatedGraph } from "@/components/ui/animated-graph"
import { WorldHeatmap } from "@/components/ui/world-heatmap"
import { TrendWars } from "@/components/ui/trend-wars"
import { BuzzCountdown } from "@/components/ui/buzz-countdown"
import { TrendCarousel } from "@/components/ui/trend-carousel"

// Features data
const features = [
	{
		title: "Real-time Trend Analysis",
		description:
			"Monitor social media platforms for emerging trends as they happen with our advanced AI algorithms.",
		icon: <TrendingUp className="h-12 w-12 text-pink-500" />,
	},
	{
		title: "Predictive Analytics",
		description:
			"Forecast which topics will go viral next with our machine learning prediction engine.",
		icon: <LineChart className="h-12 w-12 text-pink-500" />,
	},
	{
		title: "Comprehensive Insights",
		description:
			"Get detailed analytics on trend performance, audience demographics, and engagement metrics.",
		icon: <BarChart3 className="h-12 w-12 text-pink-500" />,
	},
	{
		title: "Custom Alerts",
		description:
			"Set up personalized notifications for trends relevant to your industry or interests.",
		icon: <BellRing className="h-12 w-12 text-pink-500" />,
	},
	{
		title: "Global Trend Mapping",
		description:
			"Visualize how trends spread across different regions and countries in real-time.",
		icon: <Globe className="h-12 w-12 text-pink-500" />,
	},
	{
		title: "Trend Comparison",
		description:
			"Compare multiple trends side by side to identify patterns and correlations.",
		icon: <PieChart className="h-12 w-12 text-pink-500" />,
	},
	{
		title: "AI-Powered Recommendations",
		description:
			"Receive intelligent suggestions for content based on emerging trends in your industry.",
		icon: <Lightbulb className="h-12 w-12 text-pink-500" />,
	},
	{
		title: "Trend Acceleration Alerts",
		description:
			"Get notified the moment a trend starts to accelerate, before it goes viral.",
		icon: <Rocket className="h-12 w-12 text-pink-500" />,
	},
]

export default function Home() {
	const [isVisible, setIsVisible] = useState(false)
	const heroRef = useRef<HTMLDivElement>(null)

	// Animation on scroll
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1 },
		)

		if (heroRef.current) {
			observer.observe(heroRef.current)
		}

		return () => {
			if (heroRef.current) {
				observer.unobserve(heroRef.current)
			}
		}
	}, [])

	return (
		<div className="flex flex-col">
			{/* Dynamic Hero Section with Animated Graph */}
			<section className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-black">
				{/* Animated graph background */}
				<div className="absolute inset-0 mt-0 h-full w-full">
					<AnimatedGraph />
				</div>

				<div className="container relative z-10 flex flex-col items-center px-4 pt-8 text-center">
					<span className="mb-8 -mt-16 font-extrabold text-pink-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-normal">
						COGNITION
					</span>
					<h1 className="mb-6 mx-auto w-fit bg-black/60 px-6 py-2 text-white text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl rounded-none">
						DECODE INTELLIGENCE , DISCOVER AI
					</h1>

					<div className="mt-6 flex flex-wrap gap-4">
						<Button
							size="lg"
							className="gap-2 border border-pink-800 bg-pink-600 hover:bg-pink-700"
						>
							<Zap className="h-4 w-4" />
							Get Started
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-pink-800 hover:bg-pink-900/20"
						>
							Learn More
						</Button>
					</div>
				</div>
			</section>

			{/* Current Trends with Predictions */}
			<section ref={heroRef} className="bg-black py-16">
				<div className="container">
					<TrendCarousel />
				</div>
			</section>

			{/* World Heatmap Section */}
			<section className="bg-zinc-900 py-16">
				<div className="container">
					<WorldHeatmap />
				</div>
			</section>

			{/* Trend Wars Section */}
			<section className="bg-black py-16">
				<div className="container">
					<TrendWars />
				</div>
			</section>

			{/* Buzz Countdown Section */}
			<section className="bg-zinc-900 py-16">
				<div className="container">
					<BuzzCountdown />
				</div>
			</section>

			{/* Buzz Meter Section */}
			<section className="bg-black py-16">
				<div className="container">
					<div className="flex flex-col items-center justify-center gap-8 md:flex-row">
						<div className="flex-1 text-center md:text-left">
							<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
								Real-time Buzz Meter
							</h2>
							<p className="mb-6 max-w-md text-muted-foreground">
								Our proprietary Buzz Meter measures the current global buzz index
								based on social media activity.
							</p>
							<Button
								variant="outline"
								asChild
								className="border-pink-800 hover:bg-pink-900/20"
							>
								<Link href="/insights">Explore Insights</Link>
							</Button>
						</div>
						<div className="flex-1">
							<Card className="flex flex-col items-center justify-center border border-pink-900/30 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/20">
								<BuzzMeter value={78} size="lg" />
								<p className="mt-4 text-center text-sm text-muted-foreground">
									Current global buzz index
								</p>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-zinc-900 py-16">
				<div className="container">
					<div className="mb-10 text-center">
						<h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
							Platform Features
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							COGNITION offers a comprehensive suite of tools to help you stay ahead
							of viral trends.
						</p>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{features.map((feature, index) => (
							<Card
								key={index}
								className={cn(
									"overflow-hidden border border-pink-900/30 p-6 transition-all duration-500 hover:shadow-lg hover:shadow-pink-900/20",
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0",
								)}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<CardHeader className="pb-2">
									<div className="mb-2 flex h-16 items-center justify-center">
										{feature.icon}
									</div>
									<CardTitle className="text-center text-xl">
										{feature.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-center text-muted-foreground">
										{feature.description}
									</p>
								</CardContent>
								<CardFooter className="flex justify-center pb-6">
									<Button
										variant="outline"
										size="sm"
										className="border-pink-800 hover:bg-pink-900/20"
									>
										Learn More
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-black py-16">
				<div className="container text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
						Ready to Predict the Next Viral Trend?
					</h2>
					<p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
						Join thousands of marketers, content creators, and businesses who use
						COGNITION to stay ahead of the curve.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Button
							size="lg"
							className="gap-2 border border-pink-800 bg-pink-600 hover:bg-pink-700"
						>
							<Zap className="h-4 w-4" />
							Get Started
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-pink-800 hover:bg-pink-900/20"
						>
							Schedule a Demo
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
