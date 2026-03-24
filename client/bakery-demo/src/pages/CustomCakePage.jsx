import { useMemo, useState } from 'react'

const sizes = [
  { id: 'half', label: '0.5 KG', extra: 0 },
  { id: 'one', label: '1 KG', extra: 500 },
  { id: 'one-half', label: '1.5 KG', extra: 980 },
  { id: 'two', label: '2 KG', extra: 1450 },
]

const flavors = [
  { id: 'choco', label: 'Belgian Chocolate', extra: 0 },
  { id: 'red-velvet', label: 'Red Velvet Cream', extra: 120 },
  { id: 'blueberry', label: 'Blueberry Vanilla', extra: 100 },
  { id: 'pistachio', label: 'Pistachio Saffron', extra: 180 },
]

const basePrice = 850

function CustomCakePage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    eventDate: '',
    size: sizes[1].id,
    flavor: flavors[0].id,
    message: '',
  })

  const selectedSize = sizes.find((item) => item.id === formState.size) || sizes[1]
  const selectedFlavor = flavors.find((item) => item.id === formState.flavor) || flavors[0]

  const estimatedTotal = useMemo(
    () => basePrice + selectedSize.extra + selectedFlavor.extra,
    [selectedFlavor.extra, selectedSize.extra],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Thanks! Your custom cake request has been recorded for callback.')
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-8" data-reveal="up">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4" data-reveal="up" style={{animationDelay: '0ms'}}>
            Custom Cake Builder
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-reveal="up" style={{animationDelay: '100ms'}}>
            Build your cake request in minutes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-reveal="up" style={{animationDelay: '200ms'}}>
            Choose size, flavor and message. Our team will contact you with final design options and delivery confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8" data-reveal="up" style={{animationDelay: '300ms'}}>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formState.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  />
                </div>

                {/* Cake Size */}
                <div className="space-y-2">
                  <label htmlFor="size" className="block text-sm font-semibold text-gray-700">
                    Cake Size
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={formState.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  >
                    {sizes.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Flavor */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="flavor" className="block text-sm font-semibold text-gray-700">
                    Flavor
                  </label>
                  <select
                    id="flavor"
                    name="flavor"
                    value={formState.flavor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  >
                    {flavors.map((flavor) => (
                      <option key={flavor.id} value={flavor.id}>
                        {flavor.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Message on Cake
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Example: Happy Anniversary Aarav & Riya"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Price Estimator */}
              <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl border border-pink-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-semibold text-gray-600">Estimated Price</span>
                  <span className="text-xs text-gray-500">Inclusive of all taxes</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Rs {estimatedTotal}</div>
                <div className="text-sm text-gray-600">
                  Base Rs {basePrice} + size ({selectedSize.label}) + flavor ({selectedFlavor.label})
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Cake Request
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden" data-reveal="up" style={{animationDelay: '400ms'}}>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span className="text-xl font-bold">Bakery Concierge</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Theme cake, topper and gifting add-ons in one request.
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">Custom theme cakes</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">Premium cake toppers</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">Flower wraps & balloons</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">Dessert jars & treats</span>
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed opacity-90">
                  Ask for candles, flower wraps, balloons, dessert jars or corporate cards while placing the cake request.
                </p>
                
                <div className="mt-6 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                  <p className="text-sm font-semibold mb-1">Need Help?</p>
                  <p className="text-xs">Call us at +91 99999 99999 for personalized assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomCakePage
