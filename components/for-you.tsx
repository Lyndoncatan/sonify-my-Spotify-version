import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play } from "lucide-react"

export default function ForYou() {
  const recommendations = [
    {
      id: "1",
      title: "Chill Mix",
      description: "Based on your listening",
      cover: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "2",
      title: "Discover Weekly",
      description: "New music just for you",
      cover: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "3",
      title: "Mood Booster",
      description: "Feel-good tracks to lift your spirits",
      cover: "/placeholder.svg?height=120&width=120",
    },
  ]

  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader>
        <CardTitle>Made For You</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recommendations.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-md cursor-pointer">
              <div className="aspect-square relative">
                <Image
                  src={item.cover || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Button className="absolute bottom-2 right-2 bg-purple-600 hover:bg-purple-700 rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-0">
                  <Play className="h-5 w-5 ml-0.5" />
                </Button>
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

