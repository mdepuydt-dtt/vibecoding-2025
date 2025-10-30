import PostCard from '../components/PostCard'
import postsData from '../data/posts.json'

function Feed() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg sticky top-0 z-10">
        <div className="max-w-2xl mx-auto py-4 px-4">
          <h1 className="text-3xl font-bold text-white">Social Feed</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto py-6 px-4">
        <div className="space-y-6">
          {postsData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Feed
