"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Play } from "lucide-react"
import { useRouter } from "next/navigation"

export function PlaylistGrid() {
  const router = useRouter()

  const playlists = [
    {
      id: "1",
      title: "Chill Vibes",
      description: "Relaxing beats for your downtime",
      cover: "/placeholder.svg?height=200&width=200",
      songCount: 45,
    },
    {
      id: "2",
      title: "Workout Mix",
      description: "High energy tracks to keep you moving",
      cover: "/placeholder.svg?height=200&width=200",
      songCount: 32,
    },
    {
      id: "3",
      title: "Focus Flow",
      description: "Concentration-enhancing instrumentals",
      cover: "/placeholder.svg?height=200&width=200",
      songCount: 28,
    },
    {
      id: "4",
      title: "Party Hits",
      description: "Top tracks to get the party started",
      cover: "/placeholder.svg?height=200&width=200",
      songCount: 50,
    },
    {
      id: "5",
      title: "Throwbacks",
      description: "Nostalgic hits from the past",
      cover: "/placeholder.svg?height=200&width=200",
      songCount: 37,
    },
    {
      id: "6",
      title: "Indie Discoveries",
      description: "Fresh finds from independent artists",
      cover: "/placeholder.svg?height=200&width=200",
      songCount: 42,
    },
  ]

  const handlePlaylistClick = (id: string) => {
    router.push(`/playlist/${id}`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {playlists.map((playlist) => (
        <Card
          key={playlist.id}
          className="group overflow-hidden bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-pointer"
          onClick={() => handlePlaylistClick(playlist.id)}
        >
          <div className="p-4">
            <div className="aspect-square relative rounded-md overflow-hidden mb-4">
              <Image
                src={playlist.cover || "/placeholder.svg"}
                alt={playlist.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <div className="rounded-full bg-purple-600 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Play className="h-6 w-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium truncate">{playlist.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 h-10">{playlist.description}</p>
              <p className="text-xs text-muted-foreground mt-2">{playlist.songCount} songs</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

