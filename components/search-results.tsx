"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Play, Plus } from "lucide-react"
import { useState } from "react"

interface SearchResultsProps {
  query: string
  type: "all" | "songs" | "artists" | "albums" | "playlists"
}

export function SearchResults({ query, type }: SearchResultsProps) {
  // Mock search results
  const [results, setResults] = useState({
    songs: [
      { id: "1", title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
      { id: "2", title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", duration: "3:35" },
      { id: "3", title: "Starboy", artist: "The Weeknd", album: "Starboy", duration: "3:50" },
    ],
    artists: [
      { id: "1", name: "The Weeknd", image: "/placeholder.svg?height=48&width=48", followers: "85.4M" },
      { id: "2", name: "Weeknd, The", image: "/placeholder.svg?height=48&width=48", followers: "12K" },
    ],
    albums: [
      {
        id: "1",
        title: "After Hours",
        artist: "The Weeknd",
        image: "/placeholder.svg?height=64&width=64",
        year: "2020",
      },
      { id: "2", title: "Starboy", artist: "The Weeknd", image: "/placeholder.svg?height=64&width=64", year: "2016" },
      {
        id: "3",
        title: "Beauty Behind the Madness",
        artist: "The Weeknd",
        image: "/placeholder.svg?height=64&width=64",
        year: "2015",
      },
    ],
    playlists: [
      {
        id: "1",
        title: "The Weeknd Essentials",
        creator: "Sonify",
        image: "/placeholder.svg?height=64&width=64",
        tracks: "50",
      },
      {
        id: "2",
        title: "This Is The Weeknd",
        creator: "Sonify",
        image: "/placeholder.svg?height=64&width=64",
        tracks: "45",
      },
    ],
  })

  if (!query) {
    return (
      <div className="text-center py-12 text-muted-foreground">Search for songs, artists, albums, or playlists</div>
    )
  }

  // Render results based on type
  const renderResultsByType = (resultType: string, items: any[]) => {
    switch (resultType) {
      case "songs":
        return (
          <div className="space-y-2">
            {items.map((song) => (
              <div
                key={song.id}
                className="flex items-center justify-between p-2 hover:bg-zinc-800/50 rounded-md group"
              >
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-4 w-4" />
                  </Button>
                  <div>
                    <p className="font-medium">{song.title}</p>
                    <p className="text-sm text-muted-foreground">{song.artist}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-muted-foreground">{song.album}</p>
                  <p className="text-sm text-muted-foreground w-12 text-right">{song.duration}</p>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )
      case "artists":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((artist) => (
              <div
                key={artist.id}
                className="flex flex-col items-center text-center p-4 hover:bg-zinc-800/50 rounded-md"
              >
                <Avatar className="h-24 w-24 mb-4 rounded-full">
                  <AvatarImage src={artist.image} alt={artist.name} />
                  <AvatarFallback>{artist.name[0]}</AvatarFallback>
                </Avatar>
                <h4 className="font-medium">{artist.name}</h4>
                <p className="text-sm text-muted-foreground">Artist • {artist.followers} followers</p>
              </div>
            ))}
          </div>
        )
      case "albums":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((album) => (
              <div key={album.id} className="p-4 hover:bg-zinc-800/50 rounded-md group">
                <div className="relative mb-4">
                  <Avatar className="h-full w-full rounded-md">
                    <AvatarImage src={album.image} alt={album.title} className="object-cover" />
                    <AvatarFallback className="rounded-md">{album.title[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <Button className="bg-purple-600 hover:bg-purple-700 rounded-full h-10 w-10 p-0">
                      <Play className="h-5 w-5 ml-0.5" />
                    </Button>
                  </div>
                </div>
                <h4 className="font-medium truncate">{album.title}</h4>
                <p className="text-sm text-muted-foreground truncate">
                  {album.year} • {album.artist}
                </p>
              </div>
            ))}
          </div>
        )
      case "playlists":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((playlist) => (
              <div key={playlist.id} className="p-4 hover:bg-zinc-800/50 rounded-md group">
                <div className="relative mb-4">
                  <Avatar className="h-full w-full rounded-md">
                    <AvatarImage src={playlist.image} alt={playlist.title} className="object-cover" />
                    <AvatarFallback className="rounded-md">{playlist.title[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <Button className="bg-purple-600 hover:bg-purple-700 rounded-full h-10 w-10 p-0">
                      <Play className="h-5 w-5 ml-0.5" />
                    </Button>
                  </div>
                </div>
                <h4 className="font-medium truncate">{playlist.title}</h4>
                <p className="text-sm text-muted-foreground truncate">Playlist • {playlist.tracks} tracks</p>
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  // Render all results or filtered by type
  const renderResults = () => {
    if (type === "all") {
      return (
        <div className="space-y-8">
          {Object.entries(results).map(([resultType, items]) => (
            <div key={resultType}>
              <h3 className="text-lg font-semibold mb-4 capitalize">{resultType}</h3>
              {renderResultsByType(resultType as keyof typeof results, items)}
            </div>
          ))}
        </div>
      )
    }

    return renderResultsByType(type, results[type as keyof typeof results])
  }

  return (
    <div className="py-4">
      {query && (
        <p className="text-sm text-muted-foreground mb-6">
          Showing results for "<span className="font-medium text-foreground">{query}</span>"
        </p>
      )}
      {renderResults()}
    </div>
  )
}

