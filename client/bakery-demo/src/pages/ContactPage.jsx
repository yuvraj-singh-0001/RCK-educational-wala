import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <section className="bakery-section bakery-contact-layout">
      <div>
        <p className="bakery-eyebrow">Book / Contact / Order</p>
        <h2>Talk to the order desk for cakes, combos and corporate gifting.</h2>
        <p className="section-copy">Reach us instantly and finalize delivery slot, personalization notes and bulk packaging.</p>

        <div className="contact-cards">
          <a href="tel:+919999999999">Call: +91 99999 99999</a>
          <a href="mailto:orders@crumbcrown.in">Email: orders@crumbcrown.in</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            WhatsApp Ordering
          </a>
        </div>
      </div>

      <aside className="bakery-contact-panel">
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
