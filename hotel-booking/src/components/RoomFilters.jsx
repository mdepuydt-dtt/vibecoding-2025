function RoomFilters({ filters, onFilterChange }) {
  const roomTypes = ['All', 'Single', 'Double', 'Suite', 'Deluxe']
  const viewTypes = ['All', 'City', 'Ocean', 'Garden']
  const amenitiesList = ['WiFi', 'TV', 'Air Conditioning', 'Mini-bar', 'Coffee Maker', 'Balcony', 'Room Service', 'Jacuzzi']

  return (
    <div className="card p-6 mb-8">
      <h2 className="text-2xl font-bold mb-2 text-black">Solution Configurator</h2>
      <p className="text-sm text-gray-600 mb-6 italic">Leverage our best-in-class filtering capabilities to optimize your engagement selection</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-2 text-black">Service Line</label>
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
          <label className="block text-sm font-semibold mb-2 text-black">Industry Vertical</label>
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
          <label className="block text-sm font-semibold mb-2 text-black">
            Budget Ceiling: <span className="text-[#86BC25] font-bold">${filters.maxPrice}K</span>
          </label>
          <input
            type="range"
            min="0"
            max="600"
            step="10"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange('maxPrice', e.target.value)}
            className="w-full h-2 bg-gray-200 appearance-none cursor-pointer accent-[#86BC25]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-black">Team Bandwidth</label>
          <select
            value={filters.capacity}
            onChange={(e) => onFilterChange('capacity', e.target.value)}
            className="select-field"
          >
            <option value="0">Flexible</option>
            <option value="1">1 Consultant</option>
            <option value="2">2 Consultants</option>
            <option value="3">3 Consultants</option>
            <option value="4">4+ Consultants</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold mb-3 text-black">Key Deliverables & Value Streams</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center text-sm cursor-pointer hover:text-[#86BC25] transition-colors font-medium">
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={(e) => {
                  const newAmenities = e.target.checked
                    ? [...filters.amenities, amenity]
                    : filters.amenities.filter((a) => a !== amenity)
                  onFilterChange('amenities', newAmenities)
                }}
                className="mr-2 w-4 h-4 accent-[#86BC25] cursor-pointer"
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
        Reset Parameters
      </button>
    </div>
  )
}

export default RoomFilters
