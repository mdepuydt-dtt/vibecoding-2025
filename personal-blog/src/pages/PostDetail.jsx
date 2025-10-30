import { useParams, Link } from 'react-router-dom'
import postsData from '../data/posts.json'

function PostDetail() {
  const { id } = useParams()
  const post = postsData.find((p) => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <Link to="/" className="text-purple-100 hover:text-white mb-4 inline-block transition-colors">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-purple-100">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span className="bg-white/20 px-3 py-1 rounded">{post.category}</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <article className="card p-8">
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default PostDetail
