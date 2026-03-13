import { highlightStats } from '../data/storefrontData'

function AboutPage() {
  return (
    <section className="bakery-section about-grid">
      <div>
        <p className="bakery-eyebrow">About Us</p>
        <h2>Bakery studio with a gifting-first storefront experience.</h2>
        <p className="section-copy">
          Crumb & Crown combines custom cakes, celebration add-ons, premium wrapping and fast team
          support. The demo now behaves more like a modern gifting marketplace while staying inside
          your bakery brand context.
        </p>
        <ul className="about-list">
          <li>Category-first browsing inspired by large gifting storefronts</li>
          <li>Product cards with image, pricing, delivery speed and badges</li>
          <li>Filter-driven menu page for birthday, anniversary and gift bundles</li>
        </ul>

        <div className="bakery-stat-strip bakery-stat-strip-inline">
          {highlightStats.map((item) => (
            <article key={item.label} className="bakery-stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="about-photo-panel bakery-scene-main" aria-hidden="true" />
    </section>
  )
}

export default AboutPage
