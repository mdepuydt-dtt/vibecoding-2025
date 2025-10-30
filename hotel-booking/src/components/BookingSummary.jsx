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
      <h2 className="text-2xl font-bold mb-2 text-black">Executive Summary</h2>
      <p className="text-sm text-gray-600 mb-6 italic">Please review and validate all engagement parameters before final sign-off</p>

      <div className="bg-white border-l-4 border-[#86BC25] p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 text-black">Engagement Package</h3>
        <div className="flex gap-4 mb-4">
          <img src={room.image} alt={room.name} className="w-32 h-24 object-cover" />
          <div>
            <p className="font-bold text-black">{room.name}</p>
            <p className="text-sm text-gray-700">{room.type} Service Line</p>
            <p className="text-sm text-gray-700">{room.view} Industry Vertical</p>
            <p className="text-sm font-semibold text-[#86BC25] mt-2">${room.price}K/month</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-l-4 border-[#86BC25] p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 text-black">Primary Stakeholder</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Decision Maker</p>
            <p className="font-semibold text-black">
              {bookingData.firstName} {bookingData.lastName}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Corporate Email</p>
            <p className="font-medium text-gray-700">{bookingData.email}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Direct Line</p>
            <p className="font-medium text-gray-700">{bookingData.phone}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Team Size</p>
            <p className="font-semibold text-black">{bookingData.guests} Consultant{bookingData.guests > 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-l-4 border-[#86BC25] p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 text-black">Engagement Timeline</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Kickoff Date</p>
            <p className="font-semibold text-black">{new Date(bookingData.checkIn).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Target Delivery</p>
            <p className="font-semibold text-black">{new Date(bookingData.checkOut).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
            <p className="font-semibold text-black">{nights} Month{nights > 1 ? 's' : ''}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Total Investment</p>
            <p className="font-bold text-[#86BC25] text-lg">${totalPrice}K</p>
          </div>
        </div>
        {bookingData.specialRequests && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Strategic Objectives</p>
            <p className="font-medium text-gray-700 mt-1">{bookingData.specialRequests}</p>
          </div>
        )}
      </div>

      <div className="bg-[#86BC25] p-6 mb-6">
        <h3 className="text-xl font-bold mb-2 text-black">Total Engagement Value</h3>
        <p className="text-4xl font-bold text-black">${totalPrice}K</p>
        <p className="text-sm text-black mt-1 font-medium">
          {nights} {nights === 1 ? 'month' : 'months'} × ${room.price}K/month
        </p>
        <p className="text-xs text-black mt-2 italic">*Investment excludes expenses and out-of-pocket costs</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="btn-secondary flex-1 py-3"
        >
          Revise Inputs
        </button>
        <button
          onClick={onConfirm}
          className="btn-primary flex-1 py-3"
        >
          Confirm & Proceed
        </button>
      </div>
    </div>
  )
}

export default BookingSummary
