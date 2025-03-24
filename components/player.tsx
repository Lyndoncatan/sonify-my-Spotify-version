"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle, Heart } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(217) // 3:37 in seconds
  const [volume, setVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isVolumeHovered, setIsVolumeHovered] = useState(false)

  // Mock current song data
  const currentSong = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    cover: "/placeholder.svg?height=56&width=56",
  }

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Simulate progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => Math.min(prev + 1, duration))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentTime, duration])

  // Reset to beginning when finished
  useEffect(() => {
    if (currentTime >= duration) {
      if (isRepeat) {
        setCurrentTime(0)
      } else {
        setIsPlaying(false)
      }
    }
  }, [currentTime, duration, isRepeat])

  return (
    <div className="h-20 border-t border-zinc-800 bg-zinc-950 px-4 flex items-center justify-between">
      {/* Song info */}
      <div className="flex items-center space-x-4 w-1/4">
        <div className="relative group cursor-pointer">
          <Image
            src={currentSong.cover || "/placeholder.svg"}
            alt={currentSong.title}
            width={56}
            height={56}
            className="rounded-md transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
            <Button variant="ghost" size="icon" className="text-white">
              <Play className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="hover:underline cursor-pointer">
          <h4 className="text-sm font-medium">{currentSong.title}</h4>
          <p className="text-xs text-muted-foreground">{currentSong.artist}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn("text-muted-foreground transition-all duration-300", isLiked && "text-purple-500")}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={cn("h-5 w-5 transition-all duration-300", isLiked && "fill-purple-500 scale-110")} />
        </Button>
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center space-y-2 w-2/4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className={cn("text-muted-foreground", isShuffle && "text-purple-500")}
            onClick={() => setIsShuffle(!isShuffle)}
          >
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-purple-500 transition-colors"
            onClick={() => {
              setCurrentTime(0)
              setIsPlaying(true)
            }}
          >
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            className={cn(
              "rounded-full h-10 w-10 flex items-center justify-center transition-transform hover:scale-110",
              isPlaying ? "bg-purple-600 hover:bg-purple-700" : "bg-white text-black hover:bg-gray-200",
            )}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-purple-500 transition-colors"
            onClick={() => {
              // Simulate skip to next song
              setCurrentTime(0)
              setIsPlaying(true)
            }}
          >
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn("text-muted-foreground", isRepeat && "text-purple-500")}
            onClick={() => setIsRepeat(!isRepeat)}
          >
            <Repeat className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-2 w-full">
          <span className="text-xs text-muted-foreground w-10 text-right">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            className="w-full"
            onValueChange={(value) => setCurrentTime(value[0])}
          />
          <span className="text-xs text-muted-foreground w-10">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume controls */}
      <div className="flex items-center space-x-2 w-1/4 justify-end">
        <div
          className="relative flex items-center space-x-2"
          onMouseEnter={() => setIsVolumeHovered(true)}
          onMouseLeave={() => setIsVolumeHovered(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="hover:text-purple-500 transition-colors"
          >
            {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
          <div
            className={cn(
              "transition-all duration-300 overflow-hidden",
              isVolumeHovered ? "w-24 opacity-100" : "w-0 opacity-0",
            )}
          >
            <Slider
              value={[isMuted ? 0 : volume]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={(value) => {
                setVolume(value[0])
                if (value[0] > 0) setIsMuted(false)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

