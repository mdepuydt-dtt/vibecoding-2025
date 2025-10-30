import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import roomsData from '../data/rooms.json'
import BookingForm from '../components/BookingForm'
import BookingSummary from '../components/BookingSummary'

function Checkout() {
  const { id } = useParams()
  const navigate = useNavigate()
  const room = roomsData.find((r) => r.id === parseInt(id))
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState(null)

  if (!room) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-black">Engagement Not Found</h1>
          <p className="text-gray-600 mb-4">This opportunity is not in our current pipeline</p>
          <Link to="/" className="text-[#86BC25] hover:underline font-semibold">
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  if (!room.available) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-black">Resources Fully Allocated</h1>
          <p className="text-gray-600 mb-4">Our consultants are currently deployed on other high-priority engagements</p>
          <Link to="/" className="text-[#86BC25] hover:underline font-semibold">
            Explore Alternative Solutions
          </Link>
        </div>
      </div>
    )
  }

  const handleFormSubmit = (data) => {
    setBookingData(data)
    setStep(2)
  }

  const handleConfirm = () => {
    navigate('/confirmation', { state: { room, bookingData } })
  }

  const handleBack = () => {
    setStep(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black shadow-lg border-b-4 border-[#86BC25]">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <Link to={`/room/${room.id}`} className="text-[#86BC25] hover:text-white mb-2 inline-block transition-colors font-semibold">
            ← Back to Engagement Details
          </Link>
          <h1 className="text-3xl font-bold text-white">Engagement Onboarding</h1>
          <p className="text-gray-300 text-sm mt-1">Streamlining your path to transformational outcomes</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center font-bold ${
                  step >= 1 ? 'bg-[#86BC25] text-black' : 'bg-gray-300 text-gray-600'
                }`}
              >
                1
              </div>
              <div className={`w-32 h-1 ${step >= 2 ? 'bg-[#86BC25]' : 'bg-gray-300'}`}></div>
              <div
                className={`w-12 h-12 flex items-center justify-center font-bold ${
                  step >= 2 ? 'bg-[#86BC25] text-black' : 'bg-gray-300 text-gray-600'
                }`}
              >
                2
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-24 mt-3">
            <span className={`text-sm font-bold ${step >= 1 ? 'text-[#86BC25]' : 'text-gray-500'}`}>
              Requirements Gathering
            </span>
            <span className={`text-sm font-bold ${step >= 2 ? 'text-[#86BC25]' : 'text-gray-500'}`}>
              Stakeholder Sign-off
            </span>
          </div>
        </div>

        <div className="card p-6">
          <div className="mb-6 pb-6 border-b-2 border-[#86BC25]">
            <h3 className="text-xl font-bold mb-3 text-black">Selected Engagement Package</h3>
            <div className="flex gap-4">
              <img src={room.image} alt={room.name} className="w-24 h-20 object-cover" />
              <div>
                <p className="font-bold text-black">{room.name}</p>
                <p className="text-sm text-gray-600">{room.type} • {room.view} Sector</p>
                <p className="text-sm font-semibold text-[#86BC25]">${room.price}K/month</p>
              </div>
            </div>
          </div>

          {step === 1 && <BookingForm room={room} onSubmit={handleFormSubmit} />}

          {step === 2 && (
            <BookingSummary room={room} bookingData={bookingData} onConfirm={handleConfirm} onBack={handleBack} />
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
