"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navLinks = [
	{ name: "Dashboard", href: "/" },
	{ name: "AI Agents", href: "/trends" },
	{ name: "Predictions", href: "/predictions" },
	{ name: "Insights", href: "/insights" },
	{ name: "Alerts", href: "/alerts" },
]

export default function Navbar() {
	const pathname = usePathname()
	

	return (
		<header className="sticky top-0 z-50 w-full border-b-2 border-blue-500 bg-background transition-all duration-200">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-6 md:gap-10">
					<Link href="/" className="flex items-center pl-2">
						<span className="font-bold tracking-tight text-pink-500">COGNITION</span>
					</Link>
					<nav className="hidden md:flex md:gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className={cn(
									"text-sm font-medium transition-colors hover:text-primary",
									(link.href === "/trends" && pathname.startsWith("/trends"))
										? "text-foreground"
										: pathname === link.href
										? "text-foreground"
										: "text-muted-foreground",
								)}
							>
								{link.name}
							</Link>
						))}
					</nav>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon" className="h-9 w-9 relative">
						<Bell className="h-4 w-4" />
						<span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
						<span className="sr-only">Notifications</span>
					</Button>
					<Avatar className="h-9 w-9">
						<AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
						<AvatarFallback>US</AvatarFallback>
					</Avatar>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="h-9 w-9 md:hidden">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<nav className="grid gap-6 text-lg font-medium">
								{navLinks.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className={cn(
											"hover:text-foreground",
											pathname === link.href ? "text-foreground" : "text-muted-foreground",
										)}
									>
										{link.name}
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
