import { Link } from 'react-router-dom'
import HeroCarousel from '../components/home/HeroCarousel'
import {
  getStorefrontHref,
  highlightStats,
  productCatalog,
  storefrontCategoryImages,
  storefrontHeroImage,
  storefrontCategories,
  featuredCollections
} from '../data/storefrontData'

const highlights = [
  { title: '2 Hour Delivery', description: 'Get your cakes and gifts delivered within 2 hours of placing the order.' },
  { title: 'Midnight Delivery', description: 'Surprise your loved ones right at 12:00 AM with our special midnight delivery.' },
  { title: '100% Fresh', description: 'Oven fresh cakes baked with premium ingredients just for your order.' },
]

function HomePage() {
  const featuredProducts = productCatalog.slice(0, 8) // Increased to 8 to show a nice 2-row grid

  return (
    <>
      <HeroCarousel />

      <section className="bakery-section">
        <div className="bakery-section-heading">
          <div>
            <p className="bakery-eyebrow">Shop By Category</p>
            <h2>Explore Our Collections</h2>
          </div>
          <Link to="/menu" className="bakery-inline-link">
            View All Categories
          </Link>
        </div>

        <div className="bakery-home-category-grid">
          {storefrontCategories.slice(0, 8).map((item, index) => (
            <Link key={item.slug} to={getStorefrontHref(item)} className="bakery-home-category-card">
              <div
                className={`bakery-home-category-image bakery-home-category-${index + 1}`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4)), url(${storefrontCategoryImages[item.slug]})`,
                }}
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bakery-section bakery-home-highlights">
        {highlights.map((item) => (
          <article key={item.title} className="highlight-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="bakery-section">
        <div className="bakery-section-heading">
          <div>
            <p className="bakery-eyebrow">Our Bestsellers</p>
            <h2>Most Loved Products</h2>
          </div>
          <Link to="/menu?sort=popular" className="bakery-inline-link">
            Explore All Products
          </Link>
        </div>

        <div className="bakery-product-grid">
          {featuredProducts.map((item) => (
            <Link to="/menu" key={item.id} className="bakery-home-product-card-link">
              <article className="bakery-product-card">
                <div
                  className={`bakery-product-image ${item.imageClass}`}
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                >
                  {item.badge && <span className="bakery-product-badge">{item.badge}</span>}
                </div>
                <div className="bakery-product-body">
                  <div className="bakery-product-meta">
                    <span className="bakery-rating-pill">★ {item.rating}</span>
                    {item.reviews && <span className="bakery-reviews-text">({item.reviews} reviews)</span>}
                  </div>
                  <h3>{item.name}</h3>
                  <div className="bakery-price-row-small">
                    <span>₹ {item.price}</span>
                    {item.originalPrice && <s>₹ {item.originalPrice}</s>}
                  </div>
                  <p className="bakery-delivery-estimate">Earliest Delivery: <strong>{item.delivery}</strong></p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="bakery-section">
        <div className="bakery-section-heading">
          <div>
            <p className="bakery-eyebrow">Milestones</p>
            <h2>Delivering Smiles Across India</h2>
          </div>
        </div>

        <div className="bakery-stat-strip">
        {highlightStats.map((item) => (
          <article key={item.label} className="bakery-stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
