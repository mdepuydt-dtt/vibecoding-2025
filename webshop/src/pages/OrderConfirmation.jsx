import { useLocation, Link, Navigate } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'

function OrderConfirmation() {
  const location = useLocation()
  const { clearCart } = useCart()
  const order = location.state?.order
  const [cleared, setCleared] = useState(false)

  const orderId = useMemo(() => {
    return 'ORD-' + Math.random().toString(36).substring(2, 9).toUpperCase()
  }, [])

  useEffect(() => {
    if (order && !cleared) {
      clearCart()
      setCleared(true)
    }
  }, [order, cleared, clearCart])

  if (!order) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="card p-10">
          <div className="text-center mb-10">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-3 text-gray-800">Order Confirmed!</h1>
            <p className="text-gray-600 text-lg">Thank you for your purchase</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-5 mb-8">
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="text-2xl font-bold text-blue-600">{orderId}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Shipping Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">
                  {order.firstName} {order.lastName}
                </p>
                <p className="text-gray-700">{order.email}</p>
                <p className="text-gray-700">{order.address}</p>
                <p className="text-gray-700">
                  {order.city}, {order.zipCode}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Order Items</h3>
              <div className="space-y-3">
                {order.cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold">Total Paid:</span>
                <span className="text-3xl font-bold text-green-600">${order.total.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-600 text-center mb-6">
                A confirmation email has been sent to <strong>{order.email}</strong>
              </p>
              <Link
                to="/"
                className="btn btn-primary w-full py-3 text-lg text-center block no-underline"
                style={{ display: 'block', textDecoration: 'none' }}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OrderConfirmation
