"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchResults } from "@/components/search-results"
import { Search } from "lucide-react"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="container py-6 space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for songs, artists, or albums..."
          className="pl-10 bg-zinc-900 border-purple-800/30 focus-visible:ring-purple-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-zinc-900">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="songs">Songs</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <SearchResults query={query} type="all" />
        </TabsContent>
        <TabsContent value="songs">
          <SearchResults query={query} type="songs" />
        </TabsContent>
        <TabsContent value="artists">
          <SearchResults query={query} type="artists" />
        </TabsContent>
        <TabsContent value="albums">
          <SearchResults query={query} type="albums" />
        </TabsContent>
        <TabsContent value="playlists">
          <SearchResults query={query} type="playlists" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

