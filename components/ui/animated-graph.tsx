"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGraphProps {
  className?: string
}

export function AnimatedGraph({ className }: AnimatedGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={cn("relative h-full w-full overflow-hidden", className)}>
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900/90"></div>

      {/* Grid overlay for futuristic effect - sharper, more defined grid */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ec489930 1.5px, transparent 1.5px), linear-gradient(to bottom, #ec489930 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>
  )
}
