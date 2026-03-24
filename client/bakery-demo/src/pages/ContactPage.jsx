import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <section className="bakery-section bakery-contact-layout" data-reveal="up">
      <div>
        <p className="bakery-eyebrow" data-reveal="up" style={{'--reveal-delay': '0ms'}}>Book / Contact / Order</p>
        <h2 data-reveal="up" style={{'--reveal-delay': '40ms'}}>Talk to the order desk for cakes, combos and corporate gifting.</h2>
        <p className="section-copy" data-reveal="up" style={{'--reveal-delay': '80ms'}}>Reach us instantly and finalize delivery slot, personalization notes and bulk packaging.</p>

        <div className="contact-cards" data-reveal="up" style={{'--reveal-delay': '120ms'}}>
          <a href="tel:+919999999999">Call: +91 99999 99999</a>
          <a href="mailto:orders@crumbcrown.in">Email: orders@crumbcrown.in</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            WhatsApp Ordering
          </a>
        </div>
      </div>

      <aside className="bakery-contact-panel" data-reveal="up" style={{'--reveal-delay': '160ms'}}>
        <h3>Need help with:</h3>
        <p>Birthday cakes, anniversary combos, balloon decor bundles, office hampers and urgent same-day gifting.</p>
        <Link to="/menu?delivery=Same%20Day" className="bakery-btn-primary">
          Browse Same Day Products
        </Link>
      </aside>
    </section>
  )
}

export default ContactPage
