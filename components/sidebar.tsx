"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Home, Search, Library, PlusCircle, Heart, User } from "lucide-react"
import { useState } from "react"
import { Logo } from "./logo"
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

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isCreatePlaylistOpen, setIsCreatePlaylistOpen] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState("")
  const [playlists, setPlaylists] = useState([
    { id: "1", name: "Chill Vibes" },
    { id: "2", name: "Workout Mix" },
    { id: "3", name: "Focus Flow" },
    { id: "4", name: "Party Hits" },
    { id: "5", name: "Throwbacks" },
  ])

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      const newId = (playlists.length + 1).toString()
      setPlaylists([...playlists, { id: newId, name: newPlaylistName }])
      setNewPlaylistName("")
      setIsCreatePlaylistOpen(false)
    }
  }

  const navigateToPlaylist = (id: string) => {
    router.push(`/playlist/${id}`)
  }

  return (
    <div className={cn("pb-12 w-64 bg-zinc-950 border-r border-zinc-800", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <Logo />
        </div>
        <div className="px-4 space-y-1">
          <Link href="/">
            <Button variant={pathname === "/" ? "secondary" : "ghost"} size="sm" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link href="/search">
            <Button variant={pathname === "/search" ? "secondary" : "ghost"} size="sm" className="w-full justify-start">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </Link>
          <Link href="/playlists">
            <Button
              variant={pathname === "/playlists" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
            >
              <Library className="mr-2 h-4 w-4" />
              Your Library
            </Button>
          </Link>
        </div>
        <Separator className="mx-4 bg-zinc-800" />
        <div className="px-4 space-y-1">
          <Dialog open={isCreatePlaylistOpen} onOpenChange={setIsCreatePlaylistOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="w-full justify-start">
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
          <Link href="/liked-songs">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Heart className="mr-2 h-4 w-4" />
              Liked Songs
            </Button>
          </Link>
        </div>
        <Separator className="mx-4 bg-zinc-800" />
        <div className="px-4">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Your Playlists</h2>
          <ScrollArea className="h-[300px]">
            <div className="space-y-1 p-2">
              {playlists.map((playlist) => (
                <Button
                  key={playlist.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start font-normal"
                  onClick={() => navigateToPlaylist(playlist.id)}
                >
                  {playlist.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <Link href="/profile">
          <Button variant={pathname === "/profile" ? "secondary" : "ghost"} size="sm" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </Link>
      </div>
    </div>
  )
}

