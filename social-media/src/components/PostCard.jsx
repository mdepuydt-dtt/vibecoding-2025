import { useState } from 'react'
import { Link } from 'react-router-dom'

function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  return (
    <article className="card overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <img src={post.userAvatar} alt={post.username} className="w-10 h-10 rounded-full" />
        <Link to={`/post/${post.id}`} className="font-semibold text-gray-800 hover:text-blue-600">
          {post.username}
        </Link>
      </div>

      <Link to={`/post/${post.id}`}>
        <img src={post.image} alt="Post" className="w-full aspect-square object-cover" />
      </Link>

      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button
            onClick={handleLike}
            className="text-2xl hover:scale-110 transition-transform"
          >
            {liked ? '❤️' : '🤍'}
          </button>
          <span className="font-semibold text-gray-700">{likeCount} likes</span>
        </div>

        <p className="text-gray-800">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.description}
        </p>

        <p className="text-gray-500 text-sm mt-2">
          {new Date(post.timestamp).toLocaleDateString()}
        </p>
      </div>
    </article>
  )
}

export default PostCard
