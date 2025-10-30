import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import postsData from '../data/posts.json'

function PostDetail() {
  const { id } = useParams()
  const post = postsData.find((p) => p.id === parseInt(id))
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post?.likes || 0)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Feed
          </Link>
        </div>
      </div>
    )
  }

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg">
        <div className="max-w-6xl mx-auto py-4 px-4">
          <Link to="/" className="text-white hover:text-gray-200 inline-block mb-2">
            ← Back to Feed
          </Link>
          <h1 className="text-3xl font-bold text-white">Post Details</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={post.image} alt="Post" className="w-full rounded-xl shadow-lg" />
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b">
              <img src={post.userAvatar} alt={post.username} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold text-lg text-gray-800">{post.username}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-800 text-lg leading-relaxed">{post.description}</p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t">
              <button
                onClick={handleLike}
                className="flex items-center gap-2 text-2xl hover:scale-110 transition-transform"
              >
                {liked ? '❤️' : '🤍'}
                <span className="font-semibold text-gray-700 text-base">{likeCount}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PostDetail
