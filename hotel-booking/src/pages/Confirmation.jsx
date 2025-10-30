import { useLocation, Link, Navigate } from 'react-router-dom'

function Confirmation() {
  const location = useLocation()
  const { room, bookingData } = location.state || {}

  if (!room || !bookingData) {
    return <Navigate to="/" replace />
  }

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn)
      const checkOut = new Date(bookingData.checkOut)
      const diffTime = Math.abs(checkOut - checkIn)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 0
  }

  const nights = calculateNights()
  const totalPrice = nights * room.price
  const bookingId = 'BK' + Math.random().toString(36).substring(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-green-800 shadow-lg">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-white">Booking Confirmed</h1>
          <p className="text-green-100 mt-2">Your reservation is complete</p>
        </div>
      </header>

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
            <h2 className="text-4xl font-bold mb-3 text-gray-800">Booking Successful!</h2>
            <p className="text-gray-600 text-lg">Your reservation has been confirmed</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-5 mb-8">
            <p className="text-sm text-gray-600">Booking Reference</p>
            <p className="text-2xl font-bold text-blue-600">{bookingId}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Room Details</h3>
              <div className="flex gap-4">
                <img src={room.image} alt={room.name} className="w-32 h-24 object-cover rounded" />
                <div>
                  <p className="font-semibold">{room.name}</p>
                  <p className="text-sm text-gray-600">{room.type}</p>
                  <p className="text-sm text-gray-600">{room.view} View</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Guest Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium">
                    {bookingData.firstName} {bookingData.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{bookingData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{bookingData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Guests</p>
                  <p className="font-medium">{bookingData.guests}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Stay Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Check-in</p>
                  <p className="font-medium">{new Date(bookingData.checkIn).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Check-out</p>
                  <p className="font-medium">{new Date(bookingData.checkOut).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span>
                  {nights} {nights === 1 ? 'night' : 'nights'} × ${room.price}
                </span>
                <span className="font-medium">${totalPrice}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total</span>
                <span className="text-blue-600">${totalPrice}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-gray-600 mb-6 text-center">
              A confirmation email has been sent to <strong>{bookingData.email}</strong>
            </p>
            <Link
              to="/"
              className="btn-primary block text-center py-3 text-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Confirmation
