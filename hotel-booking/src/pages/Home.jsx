import { useState } from 'react'
import RoomCard from '../components/RoomCard'
import RoomFilters from '../components/RoomFilters'
import roomsData from '../data/rooms.json'

function Home() {
  const [filters, setFilters] = useState({
    type: 'All',
    view: 'All',
    maxPrice: 600,
    capacity: 0,
    amenities: [],
  })

  const handleFilterChange = (key, value) => {
    if (key === 'reset') {
      setFilters(value)
    } else {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
      }))
    }
  }

  const filteredRooms = roomsData.filter((room) => {
    if (filters.type !== 'All' && room.type !== filters.type) return false
    if (filters.view !== 'All' && room.view !== filters.view) return false
    if (room.price > filters.maxPrice) return false
    if (filters.capacity > 0 && room.capacity < filters.capacity) return false
    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity) => room.amenities.includes(amenity))
      if (!hasAllAmenities) return false
    }
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black shadow-lg border-b-4 border-[#86BC25]">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-white">Deloitte Consulting Services</h1>
          <p className="text-[#86BC25] mt-2 font-semibold">Delivering value through strategic excellence & actionable insights</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <RoomFilters filters={filters} onFilterChange={handleFilterChange} />

        <div className="mb-6">
          <p className="text-gray-900 font-semibold text-lg">
            <span className="text-[#86BC25]">{filteredRooms.length}</span> consulting engagement{filteredRooms.length === 1 ? '' : 's'} aligned with your business objectives
          </p>
        </div>

        {filteredRooms.length === 0 ? (
          <div className="text-center py-16 card p-12">
            <svg
              className="w-24 h-24 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-2xl font-semibold text-gray-800 mb-2">No synergistic opportunities identified</p>
            <p className="text-gray-600 mb-6">Let's pivot and recalibrate your criteria to unlock value-add solutions</p>
            <button
              onClick={() =>
                handleFilterChange('reset', {
                  type: 'All',
                  view: 'All',
                  maxPrice: 600,
                  capacity: 0,
                  amenities: [],
                })
              }
              className="btn-primary"
            >
              Reset Parameters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
