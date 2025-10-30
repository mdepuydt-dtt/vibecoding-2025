import { useParams, Link } from 'react-router-dom'
import roomsData from '../data/rooms.json'

function RoomDetails() {
  const { id } = useParams()
  const room = roomsData.find((r) => r.id === parseInt(id))

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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <Link to="/" className="text-blue-100 hover:text-white mb-2 inline-block transition-colors">
            ← Back to Rooms
          </Link>
          <h1 className="text-3xl font-bold text-white">{room.name}</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="card overflow-hidden">
          <img src={room.image} alt={room.name} className="w-full h-96 object-cover" />

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Room Information</h2>

                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Type:</span> {room.type}
                  </div>
                  <div>
                    <span className="font-medium">View:</span> {room.view}
                  </div>
                  <div>
                    <span className="font-medium">Capacity:</span> {room.capacity}{' '}
                    {room.capacity === 1 ? 'guest' : 'guests'}
                  </div>
                  <div>
                    <span className="font-medium">Price:</span>{' '}
                    <span className="text-2xl font-bold">${room.price}</span>/night
                  </div>
                  <div>
                    <span className="font-medium">Availability:</span>{' '}
                    {room.available ? (
                      <span className="text-green-600">Available</span>
                    ) : (
                      <span className="text-red-600">Not Available</span>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{room.description}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <ul className="space-y-2">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              {room.available ? (
                <Link
                  to={`/checkout/${room.id}`}
                  className="btn-primary text-center block md:inline-block px-8 py-3 text-lg"
                >
                  Book This Room
                </Link>
              ) : (
                <button disabled className="bg-gray-400 text-white px-8 py-3 rounded-lg cursor-not-allowed">
                  Not Available
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
