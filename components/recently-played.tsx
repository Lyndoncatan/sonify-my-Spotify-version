import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play } from "lucide-react"

export default function RecentlyPlayed() {
  const recentTracks = [
    {
      id: "1",
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      cover: "/placeholder.svg?height=40&width=40",
      playedAt: "2 hours ago",
    },
    {
      id: "2",
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      cover: "/placeholder.svg?height=40&width=40",
      playedAt: "Yesterday",
    },
    {
      id: "3",
      title: "Bad Habit",
      artist: "Steve Lacy",
      album: "Gemini Rights",
      cover: "/placeholder.svg?height=40&width=40",
      playedAt: "2 days ago",
    },
    {
      id: "4",
      title: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
      cover: "/placeholder.svg?height=40&width=40",
      playedAt: "3 days ago",
    },
  ]

  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader>
        <CardTitle>Recently Played</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center space-x-3 group hover:bg-zinc-800/50 p-2 rounded-md transition-colors"
            >
              <div className="relative">
                <Avatar className="h-10 w-10 rounded-md">
                  <AvatarImage src={track.cover} alt={track.title} />
                  <AvatarFallback className="rounded-md">{track.title[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-md transition-opacity">
                  <Play className="h-5 w-5" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{track.title}</p>
                <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
              </div>
              <div className="text-xs text-muted-foreground">{track.playedAt}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

