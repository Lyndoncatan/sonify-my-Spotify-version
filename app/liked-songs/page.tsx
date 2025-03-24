"use client"

import { Button } from "@/components/ui/button"
import { Play, Clock, Heart, Shuffle } from "lucide-react"

// Mock liked songs data
const likedSongs = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    addedAt: "2 weeks ago",
  },
  {
    id: "2",
    title: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:03",
    addedAt: "1 month ago",
  },
  {
    id: "3",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: "2:54",
    addedAt: "3 weeks ago",
  },
  {
    id: "4",
    title: "Circles",
    artist: "Post Malone",
    album: "Hollywood's Bleeding",
    duration: "3:35",
    addedAt: "2 days ago",
  },
  { id: "5", title: "Adore You", artist: "Harry Styles", album: "Fine Line", duration: "3:27", addedAt: "1 week ago" },
  {
    id: "6",
    title: "Physical",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:42",
    addedAt: "4 days ago",
  },
  { id: "7", title: "Savage", artist: "Megan Thee Stallion", album: "Suga", duration: "2:58", addedAt: "5 days ago" },
  {
    id: "8",
    title: "Rain On Me",
    artist: "Lady Gaga, Ariana Grande",
    album: "Chromatica",
    duration: "3:02",
    addedAt: "1 day ago",
  },
]

export default function LikedSongsPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-end mb-8">
        <div className="relative w-48 h-48 md:w-56 md:h-56 shadow-lg bg-gradient-to-br from-purple-700 to-purple-900 rounded-md flex items-center justify-center">
          <Heart className="h-24 w-24 text-white" fill="white" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm font-medium uppercase mb-2">Playlist</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Liked Songs</h1>
          <p className="text-muted-foreground mb-2">Your personal collection of favorite tracks</p>
          <div className="flex items-center justify-center md:justify-start gap-1 text-sm">
            <span className="font-medium">Your Library</span>
            <span className="text-muted-foreground">• {likedSongs.length} songs</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-full h-14 w-14 flex items-center justify-center p-0">
          <Play className="h-7 w-7 ml-0.5" />
        </Button>
        <Button variant="ghost" className="rounded-full">
          <Shuffle className="h-5 w-5 mr-2" />
          Shuffle
        </Button>
      </div>

      <div className="space-y-1">
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs uppercase font-medium text-muted-foreground">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-3">Album</div>
          <div className="col-span-2">Date Added</div>
          <div className="col-span-1 text-right">
            <Clock className="h-4 w-4 inline" />
          </div>
        </div>

        {likedSongs.map((song, index) => (
          <div key={song.id} className="grid grid-cols-12 gap-4 px-4 py-2 rounded-md hover:bg-zinc-800/50 group">
            <div className="col-span-1 flex items-center">
              <span className="group-hover:hidden">{index + 1}</span>
              <Play className="h-4 w-4 hidden group-hover:block" />
            </div>
            <div className="col-span-5 flex items-center">
              <div>
                <p className="font-medium">{song.title}</p>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </div>
            </div>
            <div className="col-span-3 flex items-center text-muted-foreground">{song.album}</div>
            <div className="col-span-2 flex items-center text-muted-foreground">{song.addedAt}</div>
            <div className="col-span-1 flex items-center justify-end text-muted-foreground">{song.duration}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

