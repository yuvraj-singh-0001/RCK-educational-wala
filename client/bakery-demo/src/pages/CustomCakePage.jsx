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
    <section className="bakery-section bakery-custom-layout">
      <div>
        <p className="bakery-eyebrow">Custom Cake Builder</p>
        <h2>Build your cake request in minutes</h2>
        <p className="section-copy">Choose size, flavor and message. Our team will contact you with final design options and delivery confirmation.</p>

        <form className="cake-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input name="name" value={formState.name} onChange={handleChange} required />
          </label>

          <label>
            Phone Number
            <input name="phone" value={formState.phone} onChange={handleChange} required />
          </label>

          <label>
            Event Date
            <input type="date" name="eventDate" value={formState.eventDate} onChange={handleChange} required />
          </label>

          <label>
            Cake Size
            <select name="size" value={formState.size} onChange={handleChange}>
              {sizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Flavor
            <select name="flavor" value={formState.flavor} onChange={handleChange}>
              {flavors.map((flavor) => (
                <option key={flavor.id} value={flavor.id}>
                  {flavor.label}
                </option>
              ))}
            </select>
          </label>

          <label className="full-width">
            Message on Cake
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Example: Happy Anniversary Aarav & Riya"
            />
          </label>

          <aside className="estimator full-width">
            <p>Estimated Price</p>
            <h3>Rs {estimatedTotal}</h3>
            <span>
              Base Rs {basePrice} + size ({selectedSize.label}) + flavor ({selectedFlavor.label})
            </span>
          </aside>

          <button className="bakery-btn-primary full-width" type="submit">
            Submit Cake Request
          </button>
        </form>
      </div>

      <aside className="bakery-custom-panel bakery-scene-confetti">
        <div className="bakery-custom-panel-copy">
          <span>Bakery Concierge</span>
          <h3>Theme cake, topper and gifting add-ons in one request.</h3>
          <p>Ask for candles, flower wraps, balloons, dessert jars or corporate cards while placing the cake request.</p>
        </div>
      </aside>
    </section>
  )
}

export default CustomCakePage
