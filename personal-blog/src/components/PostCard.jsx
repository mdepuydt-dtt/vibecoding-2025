import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <article className="card overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <Link to={`/post/${post.id}`} className="text-blue-600 hover:text-blue-700 font-medium">
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostCard
