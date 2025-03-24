import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function TopArtists() {
  const artists = [
    {
      id: "1",
      name: "The Weeknd",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "2",
      name: "Taylor Swift",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "3",
      name: "Bad Bunny",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "4",
      name: "Drake",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "5",
      name: "Dua Lipa",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "6",
      name: "Billie Eilish",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "7",
      name: "Harry Styles",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader>
        <CardTitle>Top Artists</CardTitle>
      </CardHeader>
      <CardContent className="p-0 pb-6">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-6 p-6">
            {artists.map((artist) => (
              <Link href="#" key={artist.id}>
                <div className="w-[120px] space-y-3 text-center">
                  <Avatar className="h-[120px] w-[120px] rounded-full mx-auto border-2 border-purple-500/20 hover:border-purple-500 transition-colors">
                    <AvatarImage src={artist.image} alt={artist.name} />
                    <AvatarFallback>{artist.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium truncate">{artist.name}</h3>
                    <p className="text-xs text-muted-foreground">Artist</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

