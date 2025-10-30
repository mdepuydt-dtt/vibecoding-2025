import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'
import productsData from '../data/products.json'

function Shop() {
  const [category, setCategory] = useState('All')
  const { addToCart } = useCart()

  const categories = ['All', ...new Set(productsData.map(p => p.category))]
  const filtered = category === 'All' ? productsData : productsData.filter(p => p.category === category)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium ${
                category === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Shop
