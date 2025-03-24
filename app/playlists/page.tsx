"use client"

import { PlaylistGrid } from "@/components/playlist-grid"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function PlaylistsPage() {
  const [isCreatePlaylistOpen, setIsCreatePlaylistOpen] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState("")
  const router = useRouter()

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      // In a real app, this would create a new playlist in the database
      // For now, we'll just close the dialog and show a success message
      setNewPlaylistName("")
      setIsCreatePlaylistOpen(false)

      // Navigate to a new playlist (in a real app, this would be the newly created playlist)
      router.push("/playlist/1")
    }
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Playlists</h1>
        <Dialog open={isCreatePlaylistOpen} onOpenChange={setIsCreatePlaylistOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Playlist
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-zinc-900 border-zinc-800">
            <DialogHeader>
              <DialogTitle>Create New Playlist</DialogTitle>
              <DialogDescription>Give your playlist a name to get started.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Playlist Name</Label>
                <Input
                  id="name"
                  value={newPlaylistName}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  placeholder="My Awesome Playlist"
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleCreatePlaylist}>
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <PlaylistGrid />
    </div>
  )
}

