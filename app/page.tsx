import FeaturedSection from "@/components/featured-section"
import RecentlyPlayed from "@/components/recently-played"
import ForYou from "@/components/for-you"
import NewReleases from "@/components/new-releases"
import TopArtists from "@/components/top-artists"

export default function Home() {
  return (
    <div className="container py-6 space-y-8">
      <FeaturedSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentlyPlayed />
        <ForYou />
      </div>
      <NewReleases />
      <TopArtists />
    </div>
  )
}

