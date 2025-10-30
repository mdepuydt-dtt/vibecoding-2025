import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'

function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto py-16 px-4 text-center">
          <div className="card p-12">
            <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link to="/" className="btn btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="card p-6 mb-6">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b last:border-b-0">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <Link to={`/product/${item.id}`} className="font-bold text-lg hover:text-blue-600">
                    {item.name}
                  </Link>
                  <p className="text-gray-600 text-sm">{item.category}</p>
                  <p className="text-blue-600 font-bold mt-1">${item.price}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-3xl font-bold text-blue-600">${getTotal().toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary w-full py-3 text-lg text-center block">
            Proceed to Checkout
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Cart
