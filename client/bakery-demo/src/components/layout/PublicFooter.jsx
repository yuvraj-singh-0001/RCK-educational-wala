import { Link } from 'react-router-dom'
import { getStorefrontHref, storefrontCategories } from '../../data/storefrontData'

function PublicFooter() {
  return (
    <footer className="bakery-footer">
      <div className="bakery-footer-grid">
        <div>
          <h3>Crumb & Crown Bakery</h3>
          <p>Celebration gifting studio with cakes, flowers, hampers and fast order support.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/menu">Shop All</Link>
          <Link to="/custom-cake">Custom Cake</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Phone: +91 99999 99999</p>
          <p>Email: orders@crumbcrown.in</p>
          <p>Mon-Sat: 9:00 AM - 9:00 PM</p>
        </div>
        <div>
          <h4>Popular Filters</h4>
          {storefrontCategories.slice(0, 6).map((item) => (
            <Link key={item.slug} to={getStorefrontHref(item)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default PublicFooter
