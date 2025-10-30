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
          <h1 className="text-3xl font-bold mb-4">Room Not Found</h1>
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  if (!room.available) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Room Not Available</h1>
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
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
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <Link to={`/room/${room.id}`} className="text-blue-100 hover:text-white mb-2 inline-block transition-colors">
            ← Back to Room Details
          </Link>
          <h1 className="text-3xl font-bold text-white">Checkout</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                1
              </div>
              <div className={`w-32 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                2
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-24 mt-3">
            <span className={`text-sm font-medium ${step >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>
              Details
            </span>
            <span className={`text-sm font-medium ${step >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>
              Confirm
            </span>
          </div>
        </div>

        <div className="card p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Selected Room</h3>
            <div className="flex gap-4">
              <img src={room.image} alt={room.name} className="w-24 h-20 object-cover rounded" />
              <div>
                <p className="font-semibold">{room.name}</p>
                <p className="text-sm text-gray-600">{room.type}</p>
                <p className="text-sm font-medium">${room.price}/night</p>
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
