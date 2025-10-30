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
      <header className="bg-black shadow-lg border-b-4 border-[#86BC25]">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-white">Engagement Confirmed</h1>
          <p className="text-[#86BC25] mt-2 font-semibold">Your strategic partnership is now activated</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="card p-10">
          <div className="text-center mb-10">
            <div className="w-24 h-24 bg-[#86BC25] flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-14 h-14 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-3 text-black">Engagement Activated!</h2>
            <p className="text-gray-700 text-lg italic">We're committed to driving transformational value and unlocking synergies</p>
          </div>

          <div className="bg-[#86BC25] p-5 mb-8">
            <p className="text-sm text-black font-semibold">Engagement Reference Code</p>
            <p className="text-2xl font-bold text-black">{bookingId}</p>
            <p className="text-xs text-black mt-1 italic">Share this with your engagement manager for seamless onboarding</p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-[#86BC25] pl-4">
              <h3 className="text-xl font-bold mb-3 text-black">Engagement Package</h3>
              <div className="flex gap-4">
                <img src={room.image} alt={room.name} className="w-32 h-24 object-cover" />
                <div>
                  <p className="font-bold text-black">{room.name}</p>
                  <p className="text-sm text-gray-700">{room.type} Service Line</p>
                  <p className="text-sm text-gray-700">{room.view} Industry Vertical</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#86BC25] pl-4">
              <h3 className="text-xl font-bold mb-3 text-black">Executive Sponsor</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Name</p>
                  <p className="font-semibold text-black">
                    {bookingData.firstName} {bookingData.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="font-medium text-gray-700">{bookingData.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="font-medium text-gray-700">{bookingData.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Team Size</p>
                  <p className="font-semibold text-black">{bookingData.guests} Consultant{bookingData.guests > 1 ? 's' : ''}</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#86BC25] pl-4">
              <h3 className="text-xl font-bold mb-3 text-black">Engagement Timeline</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Kickoff</p>
                  <p className="font-semibold text-black">{new Date(bookingData.checkIn).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Completion</p>
                  <p className="font-semibold text-black">{new Date(bookingData.checkOut).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-[#86BC25] pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">
                  {nights} {nights === 1 ? 'month' : 'months'} × ${room.price}K
                </span>
                <span className="font-bold text-black">${totalPrice}K</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-black">Total Engagement Value</span>
                <span className="text-[#86BC25]">${totalPrice}K</span>
              </div>
              <p className="text-xs text-gray-600 mt-2 italic">*Excludes travel & expenses as per standard T&E policy</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-300">
            <div className="bg-gray-50 p-4 mb-6 border-l-4 border-[#86BC25]">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-bold text-black">Next Steps:</span> Your dedicated engagement manager will reach out within 24-48 hours to align on kickoff logistics and conduct stakeholder mapping.
              </p>
              <p className="text-sm text-gray-700">
                Confirmation details have been dispatched to <strong className="text-black">{bookingData.email}</strong>
              </p>
            </div>
            <Link
              to="/"
              className="btn-primary block text-center py-3 text-lg"
            >
              Return to Portfolio
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Confirmation
