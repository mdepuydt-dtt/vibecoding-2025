import { Link } from 'react-router-dom'

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4">
        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">
          {product.category}
        </span>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold mt-2 mb-1 hover:text-blue-600">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <button onClick={() => onAddToCart(product)} className="btn btn-primary text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
