import { Link } from 'react-router-dom'

function RoomCard({ room }) {
  return (
    <div className="card overflow-hidden">
      <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-black">{room.name}</h3>
        <p className="text-sm text-gray-700 mb-4 italic">{room.description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <span className="font-semibold text-black w-32">Service Line:</span>
            <span className="text-gray-700">{room.type}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-semibold text-black w-32">Team Size:</span>
            <span className="text-gray-700">{room.capacity} consultant{room.capacity === 1 ? '' : 's'}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-semibold text-black w-32">Industry Focus:</span>
            <span className="text-gray-700">{room.view}</span>
          </div>
        </div>
        <div className="mb-4 pb-4 border-b border-gray-200">
          <span className="text-xs font-semibold text-black block mb-2">Value Propositions:</span>
          <div className="flex flex-wrap gap-1">
            {room.amenities.slice(0, 3).map((amenity) => (
              <span key={amenity} className="text-xs bg-[#86BC25] text-black px-2 py-1 font-medium">
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-xs text-gray-600 font-medium">+{room.amenities.length - 3} more</span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-[#86BC25]">${room.price}K</span>
            <span className="text-sm text-gray-600">/month</span>
          </div>
          {room.available ? (
            <Link to={`/room/${room.id}`} className="btn-primary">
              Explore
            </Link>
          ) : (
            <span className="text-red-600 font-semibold px-4 py-2">Fully Booked</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default RoomCard
