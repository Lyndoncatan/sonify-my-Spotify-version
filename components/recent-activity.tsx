import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: "1",
      type: "liked",
      content: "Liked the song 'Blinding Lights' by The Weeknd",
      time: "2 hours ago",
      icon: "❤️",
    },
    {
      id: "2",
      type: "playlist",
      content: "Added 'As It Was' to playlist 'Summer Vibes'",
      time: "Yesterday",
      icon: "➕",
    },
    {
      id: "3",
      type: "follow",
      content: "Started following Taylor Swift",
      time: "2 days ago",
      icon: "👤",
    },
    {
      id: "4",
      type: "share",
      content: "Shared playlist 'Workout Mix' with @friend",
      time: "3 days ago",
      icon: "🔗",
    },
    {
      id: "5",
      type: "listened",
      content: "Listened to the album 'Dawn FM' by The Weeknd",
      time: "4 days ago",
      icon: "🎧",
    },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className="bg-purple-900/30 rounded-full p-2 text-xl">{activity.icon}</div>
              <div className="flex-1 space-y-1">
                <p>{activity.content}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

