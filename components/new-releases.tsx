import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Play } from "lucide-react"

export default function NewReleases() {
  const releases = [
    {
      id: "1",
      title: "Dawn FM",
      artist: "The Weeknd",
      cover: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "2",
      title: "Un Verano Sin Ti",
      artist: "Bad Bunny",
      cover: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "3",
      title: "Harry's House",
      artist: "Harry Styles",
      cover: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "4",
      title: "Midnights",
      artist: "Taylor Swift",
      cover: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "5",
      title: "SOS",
      artist: "SZA",
      cover: "/placeholder.svg?height=180&width=180",
    },
    {
      id: "6",
      title: "Renaissance",
      artist: "Beyoncé",
      cover: "/placeholder.svg?height=180&width=180",
    },
  ]

  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader>
        <CardTitle>New Releases</CardTitle>
      </CardHeader>
      <CardContent className="p-0 pb-6">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-4 p-6">
            {releases.map((album) => (
              <div key={album.id} className="w-[180px] space-y-3">
                <div className="overflow-hidden rounded-md group relative">
                  <Image
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    width={180}
                    height={180}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <div className="rounded-full bg-purple-600 p-3">
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium truncate">{album.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{album.artist}</p>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

