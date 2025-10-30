import { useParams, Link } from 'react-router-dom'
import roomsData from '../data/rooms.json'

function RoomDetails() {
  const { id } = useParams()
  const room = roomsData.find((r) => r.id === parseInt(id))

  if (!room) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-black">Engagement Not Found</h1>
          <p className="text-gray-600 mb-4">This opportunity may have reached end-of-life or been deprioritized</p>
          <Link to="/" className="text-[#86BC25] hover:underline font-semibold">
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black shadow-lg border-b-4 border-[#86BC25]">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <Link to="/" className="text-[#86BC25] hover:text-white mb-2 inline-block transition-colors font-semibold">
            ← Back to Portfolio
          </Link>
          <h1 className="text-3xl font-bold text-white">{room.name}</h1>
          <p className="text-gray-300 text-sm mt-1">A transformative engagement designed to drive measurable outcomes</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="card overflow-hidden">
          <img src={room.image} alt={room.name} className="w-full h-96 object-cover" />

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-black border-b-2 border-[#86BC25] pb-2">Engagement Overview</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex">
                    <span className="font-semibold text-black w-40">Service Line:</span>
                    <span className="text-gray-700">{room.type}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-black w-40">Industry Focus:</span>
                    <span className="text-gray-700">{room.view}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-black w-40">Team Composition:</span>
                    <span className="text-gray-700">{room.capacity}{' '}
                    senior consultant{room.capacity === 1 ? '' : 's'}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-black w-40">Investment:</span>
                    <span className="text-2xl font-bold text-[#86BC25]">${room.price}K</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-black w-40">Bandwidth:</span>
                    {room.available ? (
                      <span className="text-[#86BC25] font-semibold">Resources Available</span>
                    ) : (
                      <span className="text-red-600 font-semibold">Fully Allocated</span>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold mb-2 text-black">Value Proposition</h3>
                  <p className="text-gray-700 italic">{room.description}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-black border-b-2 border-[#86BC25] pb-2">Key Deliverables</h2>
                <ul className="space-y-2">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center text-sm">
                      <span className="mr-3 text-[#86BC25] font-bold">✓</span>
                      <span className="text-gray-800">{amenity}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-gray-50 border-l-4 border-[#86BC25]">
                  <p className="text-xs text-gray-700 italic">
                    "Leveraging our proprietary methodologies and best-in-class frameworks, we'll drive synergies across your organization while ensuring alignment with strategic imperatives."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              {room.available ? (
                <Link
                  to={`/checkout/${room.id}`}
                  className="btn-primary text-center block md:inline-block px-8 py-3 text-lg"
                >
                  Initiate Engagement
                </Link>
              ) : (
                <button disabled className="bg-gray-400 text-white px-8 py-3 cursor-not-allowed font-semibold">
                  Fully Allocated - Join Waitlist
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RoomDetails
