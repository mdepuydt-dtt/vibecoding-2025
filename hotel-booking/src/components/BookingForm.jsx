import { useState } from 'react'

function BookingForm({ room, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required'
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required'
    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      newErrors.checkOut = 'Check-out must be after check-in'
    }
    if (formData.guests > room.capacity) {
      newErrors.guests = `Maximum capacity is ${room.capacity} guests`
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData)
    } else {
      setErrors(newErrors)
    }
  }

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn)
      const checkOut = new Date(formData.checkOut)
      const diffTime = Math.abs(checkOut - checkIn)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 0
  }

  const nights = calculateNights()
  const totalPrice = nights * room.price

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-2 text-black">Stakeholder Information</h2>
      <p className="text-sm text-gray-600 mb-6 italic">Please provide key stakeholder details to facilitate seamless engagement kickoff</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-2 text-black">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input-field"
          />
          {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-black">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input-field"
          />
          {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-2 text-black">Corporate Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-black">Direct Line *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-2 text-black">Engagement Start Date *</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="input-field"
          />
          {errors.checkIn && <p className="text-red-600 text-sm mt-1">{errors.checkIn}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-black">Target Completion Date *</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            min={formData.checkIn || new Date().toISOString().split('T')[0]}
            className="input-field"
          />
          {errors.checkOut && <p className="text-red-600 text-sm mt-1">{errors.checkOut}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-black">Consultant Count *</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max={room.capacity}
            className="input-field"
          />
          {errors.guests && <p className="text-red-600 text-sm mt-1">{errors.guests}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-black">Strategic Objectives & Pain Points</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows="3"
          className="input-field"
          placeholder="Share your key business challenges and desired outcomes to enable value creation..."
        />
      </div>

      {nights > 0 && (
        <div className="bg-gray-50 p-5 border-l-4 border-[#86BC25]">
          <p className="text-sm text-gray-700">
            <span className="font-bold text-black">Engagement Duration:</span> {nights} months
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-black">Monthly Investment:</span> ${room.price}K
          </p>
          <p className="text-2xl font-bold mt-2 text-[#86BC25]">Total Project Value: ${totalPrice}K</p>
        </div>
      )}

      <button type="submit" className="btn-primary w-full py-3 text-lg">
        Proceed to Sign-off
      </button>
    </form>
  )
}

export default BookingForm
