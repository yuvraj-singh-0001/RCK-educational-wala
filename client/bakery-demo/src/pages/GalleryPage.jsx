import { galleryStories } from '../data/storefrontData'

function GalleryPage() {
  return (
    <section className="bakery-section">
      <p className="bakery-eyebrow">Gallery</p>
      <h2>Visual collection for the product-heavy bakery interface</h2>
      <p className="section-copy">Use these sections to show style direction, gifting mood and bakery product presentation.</p>

      <div className="gallery-grid">
        {galleryStories.map((item) => (
          <article key={item.title} className={`gallery-card ${item.imageClass}`}>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GalleryPage
