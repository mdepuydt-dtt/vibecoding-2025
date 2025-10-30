import { useState } from 'react'
import PostCard from '../components/PostCard'
import CategoryFilter from '../components/CategoryFilter'
import postsData from '../data/posts.json'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [...new Set(postsData.map((post) => post.category))]

  const filteredPosts =
    selectedCategory === 'All'
      ? postsData
      : postsData.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <h1 className="text-5xl font-bold text-white mb-2">Personal Blog</h1>
          <p className="text-purple-100 text-lg">Thoughts, tutorials, and stories</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="mb-6">
          <p className="text-gray-700 font-medium">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
