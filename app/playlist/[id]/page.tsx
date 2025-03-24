"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Play, Clock, MoreHorizontal, Heart } from "lucide-react"
import Image from "next/image"

// Mock playlist data
const playlistsData = {
  "1": {
    id: "1",
    title: "Chill Vibes",
    description: "Relaxing beats for your downtime",
    cover: "/placeholder.svg?height=200&width=200",
    creator: "Sonify",
    followers: "2,345",
    songs: [
      { id: "1", title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
      { id: "2", title: "Don't Start Now", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:03" },
      { id: "3", title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", duration: "2:54" },
      { id: "4", title: "Circles", artist: "Post Malone", album: "Hollywood's Bleeding", duration: "3:35" },
      { id: "5", title: "Adore You", artist: "Harry Styles", album: "Fine Line", duration: "3:27" },
    ],
  },
  "2": {
    id: "2",
    title: "Workout Mix",
    description: "High energy tracks to keep you moving",
    cover: "/placeholder.svg?height=200&width=200",
    creator: "Sonify",
    followers: "5,678",
    songs: [
      { id: "1", title: "Physical", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:42" },
      { id: "2", title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
      { id: "3", title: "Don't Start Now", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:03" },
      { id: "4", title: "Savage", artist: "Megan Thee Stallion", album: "Suga", duration: "2:58" },
      { id: "5", title: "Rain On Me", artist: "Lady Gaga, Ariana Grande", album: "Chromatica", duration: "3:02" },
    ],
  },
  "3": {
    id: "3",
    title: "Focus Flow",
    description: "Concentration-enhancing instrumentals",
    cover: "/placeholder.svg?height=200&width=200",
    creator: "Sonify",
    followers: "1,234",
    songs: [
      { id: "1", title: "Experience", artist: "Ludovico Einaudi", album: "Seven Days Walking", duration: "5:15" },
      { id: "2", title: "Nuvole Bianche", artist: "Ludovico Einaudi", album: "Una Mattina", duration: "5:57" },
      { id: "3", title: "Experience", artist: "Ludovico Einaudi", album: "In a Time Lapse", duration: "5:15" },
      { id: "4", title: "Divenire", artist: "Ludovico Einaudi", album: "Divenire", duration: "6:42" },
      { id: "5", title: "Primavera", artist: "Ludovico Einaudi", album: "In a Time Lapse", duration: "7:23" },
    ],
  },
  "4": {
    id: "4",
    title: "Party Hits",
    description: "Top tracks to get the party started",
    cover: "/placeholder.svg?height=200&width=200",
    creator: "Sonify",
    followers: "8,901",
    songs: [
      { id: "1", title: "Don't Start Now", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:03" },
      { id: "2", title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
      { id: "3", title: "Savage Love", artist: "Jawsh 685, Jason Derulo", album: "Savage Love", duration: "2:51" },
      { id: "4", title: "Dynamite", artist: "BTS", album: "Dynamite (Single)", duration: "3:19" },
      { id: "5", title: "Levitating", artist: "Dua Lipa ft. DaBaby", album: "Future Nostalgia", duration: "3:23" },
    ],
  },
  "5": {
    id: "5",
    title: "Throwbacks",
    description: "Nostalgic hits from the past",
    cover: "/placeholder.svg?height=200&width=200",
    creator: "Sonify",
    followers: "3,456",
    songs: [
      { id: "1", title: "Billie Jean", artist: "Michael Jackson", album: "Thriller", duration: "4:54" },
      {
        id: "2",
        title: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        album: "Appetite for Destruction",
        duration: "5:56",
      },
      { id: "3", title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind", duration: "5:01" },
      { id: "4", title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", duration: "5:55" },
      {
        id: "5",
        title: "Sweet Dreams (Are Made of This)",
        artist: "Eurythmics",
        album: "Sweet Dreams",
        duration: "3:36",
      },
    ],
  },
}

export default function PlaylistPage() {
  const { id } = useParams<{ id: string }>()
  const playlist = playlistsData[id as keyof typeof playlistsData] || {
    id: "unknown",
    title: "Unknown Playlist",
    description: "This playlist doesn't exist",
    cover: "/placeholder.svg?height=200&width=200",
    creator: "Unknown",
    followers: "0",
    songs: [],
  }

  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-end mb-8">
        <div className="relative w-48 h-48 md:w-56 md:h-56 shadow-lg">
          <Image
            src={playlist.cover || "/placeholder.svg"}
            alt={playlist.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm font-medium uppercase mb-2">Playlist</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{playlist.title}</h1>
          <p className="text-muted-foreground mb-2">{playlist.description}</p>
          <div className="flex items-center justify-center md:justify-start gap-1 text-sm">
            <span className="font-medium">{playlist.creator}</span>
            <span className="text-muted-foreground">• {playlist.followers} followers</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-full h-14 w-14 flex items-center justify-center p-0">
          <Play className="h-7 w-7 ml-0.5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
          <Heart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-1">
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs uppercase font-medium text-muted-foreground">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-4">Album</div>
          <div className="col-span-2 text-right">
            <Clock className="h-4 w-4 inline" />
          </div>
        </div>

        {playlist.songs.map((song, index) => (
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
            <div className="col-span-4 flex items-center text-muted-foreground">{song.album}</div>
            <div className="col-span-2 flex items-center justify-end text-muted-foreground">{song.duration}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

