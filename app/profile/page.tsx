import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlaylistGrid } from "@/components/playlist-grid"
import { RecentActivity } from "@/components/recent-activity"
import { Settings } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <Avatar className="h-24 w-24 border-2 border-purple-500">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">User Name</h1>
          <p className="text-muted-foreground">@username • 120 followers • 45 following</p>
        </div>
        <Button variant="outline" className="md:ml-auto">
          <Settings className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <Tabs defaultValue="playlists" className="w-full">
        <TabsList className="bg-zinc-900">
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="liked">Liked Songs</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="playlists">
          <PlaylistGrid />
        </TabsContent>
        <TabsContent value="liked">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Liked Songs</h2>
              {/* Liked songs content */}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity">
          <RecentActivity />
        </TabsContent>
      </Tabs>
    </div>
  )
}

