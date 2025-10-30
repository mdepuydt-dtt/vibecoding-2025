function RoomFilters({ filters, onFilterChange }) {
  const roomTypes = ['All', 'Single', 'Double', 'Suite', 'Deluxe']
  const viewTypes = ['All', 'City', 'Ocean', 'Garden']
  const amenitiesList = ['WiFi', 'TV', 'Air Conditioning', 'Mini-bar', 'Coffee Maker', 'Balcony', 'Room Service', 'Jacuzzi']

  return (
    <div className="card p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Filter Rooms</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Room Type</label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="select-field"
          >
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">View</label>
          <select
            value={filters.view}
            onChange={(e) => onFilterChange('view', e.target.value)}
            className="select-field"
          >
            {viewTypes.map((view) => (
              <option key={view} value={view}>
                {view}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Max Price: <span className="text-blue-600">${filters.maxPrice}</span>
          </label>
          <input
            type="range"
            min="0"
            max="600"
            step="10"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange('maxPrice', e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Capacity</label>
          <select
            value={filters.capacity}
            onChange={(e) => onFilterChange('capacity', e.target.value)}
            className="select-field"
          >
            <option value="0">Any</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4+ Guests</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold mb-3 text-gray-700">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center text-sm cursor-pointer hover:text-blue-600 transition-colors">
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={(e) => {
                  const newAmenities = e.target.checked
                    ? [...filters.amenities, amenity]
                    : filters.amenities.filter((a) => a !== amenity)
                  onFilterChange('amenities', newAmenities)
                }}
                className="mr-2 w-4 h-4 accent-blue-600 cursor-pointer"
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          onFilterChange('reset', {
            type: 'All',
            view: 'All',
            maxPrice: 600,
            capacity: 0,
            amenities: [],
          })
        }
        className="btn-secondary mt-6"
      >
        Reset Filters
      </button>
    </div>
  )
}

export default RoomFilters
