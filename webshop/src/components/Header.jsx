import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Header() {
  const { getItemCount } = useCart()

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white hover:text-gray-100 transition-colors">WebShop</h1>
        </Link>
        <Link
          to="/cart"
          className="bg-white/20 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors"
        >
          Cart ({getItemCount()})
        </Link>
      </div>
    </header>
  )
}

export default Header
