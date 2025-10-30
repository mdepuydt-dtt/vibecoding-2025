function BookingSummary({ room, bookingData, onConfirm, onBack }) {
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

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Booking Summary</h2>

      <div className="bg-white border rounded p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Room Details</h3>
        <div className="flex gap-4 mb-4">
          <img src={room.image} alt={room.name} className="w-32 h-24 object-cover rounded" />
          <div>
            <p className="font-semibold">{room.name}</p>
            <p className="text-sm text-gray-600">{room.type}</p>
            <p className="text-sm text-gray-600">{room.view} View</p>
            <p className="text-sm font-medium mt-2">${room.price}/night</p>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Guest Information</h3>
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
            <p className="text-sm text-gray-600">Number of Guests</p>
            <p className="font-medium">{bookingData.guests}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Stay Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Check-in</p>
            <p className="font-medium">{new Date(bookingData.checkIn).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Check-out</p>
            <p className="font-medium">{new Date(bookingData.checkOut).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Number of Nights</p>
            <p className="font-medium">{nights}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Price</p>
            <p className="font-medium text-lg">${totalPrice}</p>
          </div>
        </div>
        {bookingData.specialRequests && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Special Requests</p>
            <p className="font-medium">{bookingData.specialRequests}</p>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Total Amount</h3>
        <p className="text-3xl font-bold text-blue-600">${totalPrice}</p>
        <p className="text-sm text-gray-600 mt-1">
          {nights} {nights === 1 ? 'night' : 'nights'} × ${room.price}/night
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="btn-secondary flex-1 py-3"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          className="btn-primary flex-1 py-3"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  )
}

export default BookingSummary
