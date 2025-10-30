import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'
import productsData from '../data/products.json'

function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = productsData.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-4 px-4">
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 inline-block mb-2">← Back to Shop</Link>
      </div>

      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
            <div>
              <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded">
                {product.category}
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-4">{product.name}</h2>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-primary w-full py-3 text-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetail
