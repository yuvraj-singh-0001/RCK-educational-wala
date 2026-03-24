import { galleryStories } from '../data/storefrontData'

function GalleryPage() {
  return (
    <section className="bakery-section" data-reveal="up">
      <p className="bakery-eyebrow" data-reveal="up" style={{'--reveal-delay': '0ms'}}>Gallery</p>
      <h2 data-reveal="up" style={{'--reveal-delay': '40ms'}}>Visual collection for the product-heavy bakery interface</h2>
      <p className="section-copy" data-reveal="up" style={{'--reveal-delay': '80ms'}}>Use these sections to show style direction, gifting mood and bakery product presentation.</p>

      <div className="gallery-grid" data-reveal="up" style={{'--reveal-delay': '120ms'}}>
        {galleryStories.map((item) => (
          <article key={item.title} className={`gallery-card ${item.imageClass}`} data-reveal="up" style={{'--reveal-delay': `${galleryStories.indexOf(item) * 60}ms`}}>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GalleryPage
