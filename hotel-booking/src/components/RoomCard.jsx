import { Link } from 'react-router-dom'

function RoomCard({ room }) {
  return (
    <div className="card overflow-hidden">
      <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{room.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{room.description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <span className="font-medium text-gray-700 w-20">Type:</span>
            <span className="text-gray-600">{room.type}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-medium text-gray-700 w-20">Capacity:</span>
            <span className="text-gray-600">{room.capacity} {room.capacity === 1 ? 'guest' : 'guests'}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-medium text-gray-700 w-20">View:</span>
            <span className="text-gray-600">{room.view}</span>
          </div>
        </div>
        <div className="mb-4 pb-4 border-b">
          <span className="text-xs font-medium text-gray-500 block mb-2">Amenities:</span>
          <div className="flex flex-wrap gap-1">
            {room.amenities.slice(0, 3).map((amenity) => (
              <span key={amenity} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-xs text-gray-500">+{room.amenities.length - 3} more</span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-blue-600">${room.price}</span>
            <span className="text-sm text-gray-500">/night</span>
          </div>
          {room.available ? (
            <Link to={`/room/${room.id}`} className="btn-primary">
              View Details
            </Link>
          ) : (
            <span className="text-red-600 font-medium px-4 py-2">Not Available</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default RoomCard
