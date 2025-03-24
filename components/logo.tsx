"use client"

import { Music2 } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Logo() {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Trigger animation on initial load
  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Link
      href="/"
      className="flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative flex items-center justify-center transition-all duration-500 ease-out",
          isHovered && "rotate-12 scale-110",
          isAnimating && "animate-bounce",
        )}
      >
        <div className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
        <Music2
          className={cn(
            "h-8 w-8 relative z-10 transition-all duration-300",
            isHovered ? "text-white" : "text-purple-500",
          )}
        />
      </div>
      <div className="relative">
        <h1
          className={cn(
            "text-xl font-bold transition-all duration-300",
            isHovered
              ? "bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600"
              : "bg-gradient-to-r from-purple-400 to-purple-600",
            "text-transparent bg-clip-text",
          )}
        >
          Sonify
        </h1>
        <div
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300",
            isHovered ? "w-full" : "w-0",
          )}
        ></div>
      </div>
    </Link>
  )
}

