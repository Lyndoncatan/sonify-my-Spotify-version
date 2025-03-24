"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock } from "lucide-react"
import Image from "next/image"

export default function FeaturedSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const featuredItems = [
    {
      id: "1",
      title: "Today's Top Hits",
      description: "The hottest tracks right now - updated daily",
      image: "/placeholder.svg?height=400&width=800",
      color: "from-purple-800 to-blue-900",
    },
    {
      id: "2",
      title: "Discover Weekly",
      description: "Your weekly mixtape of fresh music",
      image: "/placeholder.svg?height=400&width=800",
      color: "from-pink-800 to-purple-900",
    },
    {
      id: "3",
      title: "New Releases",
      description: "The latest drops from your favorite artists",
      image: "/placeholder.svg?height=400&width=800",
      color: "from-indigo-800 to-violet-900",
    },
  ]

  // Auto-rotate featured items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [featuredItems.length])

  const currentItem = featuredItems[currentIndex]

  return (
    <Card className="overflow-hidden border-0">
      <CardContent className="p-0 relative">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <div className={`absolute inset-0 bg-gradient-to-r ${currentItem.color} opacity-70`} />
          <Image src={currentItem.image || "/placeholder.svg"} alt={currentItem.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-4xl font-bold">{currentItem.title}</h2>
                <p className="text-sm md:text-base text-zinc-300">{currentItem.description}</p>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Play className="mr-2 h-4 w-4" />
                  Play
                </Button>
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                  <Clock className="mr-2 h-4 w-4" />
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-purple-500" : "bg-zinc-600"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

