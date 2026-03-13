import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  getStorefrontFilter,
  menuSortOptions,
  productCatalog,
  storefrontCategories,
  flavours,
  cakeTypes
} from '../data/storefrontData'

function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const activeCategory = searchParams.get('category') || ''
  const activeOccasion = searchParams.get('occasion') || ''
  const activeDelivery = searchParams.get('delivery') || ''
  const activeFlavour = searchParams.get('flavour') || ''
  const activeType = searchParams.get('type') || ''
  const activeSort = searchParams.get('sort') || 'popular'

  const filteredProducts = useMemo(() => {
    const items = productCatalog.filter((item) => {
      const matchesCategory = !activeCategory || item.category === activeCategory
      const matchesOccasion = !activeOccasion || item.occasion === activeOccasion
      const matchesDelivery = !activeDelivery || item.delivery === activeDelivery
      const matchesFlavour = !activeFlavour || item.flavour === activeFlavour
      const matchesType = !activeType || item.type === activeType

      return matchesCategory && matchesOccasion && matchesDelivery && matchesFlavour && matchesType
    })

    return [...items].sort((firstItem, secondItem) => {
      if (activeSort === 'price-low') return firstItem.price - secondItem.price
      if (activeSort === 'price-high') return secondItem.price - firstItem.price
      if (activeSort === 'rating') return secondItem.rating - firstItem.rating
      return secondItem.rating * 100 + secondItem.price - (firstItem.rating * 100 + firstItem.price)
    })
  }, [activeCategory, activeDelivery, activeOccasion, activeFlavour, activeType, activeSort])

  const updateSearchParams = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)

    if (value) {
      nextParams.set(key, value)
    } else {
      nextParams.delete(key)
    }

    setSearchParams(nextParams)
  }

  const clearFilters = () => {
    setSearchParams({ sort: 'popular' })
  }

  return (
    <section className="bakery-section bakery-catalog-layout">
      <aside className="bakery-filter-panel">
        <div className="bakery-filter-head">
          <p className="bakery-eyebrow">Filters</p>
          <div className="bakery-filter-head-flex">
            <h2>Filter</h2>
            <button type="button" className="bakery-filter-reset-link" onClick={clearFilters}>
              Clear All
            </button>
          </div>
        </div>

        <div className="bakery-filter-group">
          <h3>Category</h3>
          <div className="bakery-filter-checkbox-list">
            {storefrontCategories.map((item) => {
              const filterItem = getStorefrontFilter(item)
              if (filterItem.key !== 'category') return null
              const isChecked = activeCategory === filterItem.value

              return (
                <label key={item.slug} className="bakery-checkbox-label">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => updateSearchParams('category', isChecked ? '' : filterItem.value)}
                  />
                  <span>{item.label}</span>
                </label>
              )
            })}
          </div>
        </div>

        <div className="bakery-filter-group">
          <h3>Flavour</h3>
          <div className="bakery-filter-checkbox-list">
            {flavours.map((item) => (
              <label key={item} className="bakery-checkbox-label">
                <input
                  type="checkbox"
                  checked={activeFlavour === item}
                  onChange={() => updateSearchParams('flavour', activeFlavour === item ? '' : item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bakery-filter-group">
          <h3>Cake Type</h3>
          <div className="bakery-filter-checkbox-list">
            {cakeTypes.map((item) => (
              <label key={item} className="bakery-checkbox-label">
                <input
                  type="checkbox"
                  checked={activeType === item}
                  onChange={() => updateSearchParams('type', activeType === item ? '' : item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bakery-filter-group">
          <h3>Occasion</h3>
          <div className="bakery-filter-checkbox-list">
            {['Birthday', 'Anniversary', 'Valentine\'s Day', 'Kids Birthday'].map((item) => (
              <label key={item} className="bakery-checkbox-label">
                <input
                  type="checkbox"
                  checked={activeOccasion === item}
                  onChange={() => updateSearchParams('occasion', activeOccasion === item ? '' : item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bakery-filter-group">
          <h3>Delivery Speed</h3>
          <div className="bakery-filter-checkbox-list">
            {['Same Day', 'Next Day', 'Midnight', 'Fixed Time'].map((item) => (
              <label key={item} className="bakery-checkbox-label">
                <input
                  type="checkbox"
                  checked={activeDelivery === item}
                  onChange={() => updateSearchParams('delivery', activeDelivery === item ? '' : item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

      </aside>

      <div className="bakery-catalog-content">
        <div className="bakery-breadcrumbs">Home / Cakes Delivery Online</div>

        <div className="bakery-catalog-topbar">
          <div className="bakery-catalog-heading-block">
            <h2>Order Cakes Online</h2>
            <div className="bakery-catalog-meta-row">
              <span>{filteredProducts.length} Products</span>
              <span>|</span>
              <span>Overall Rating: 4.8</span>
              <span>|</span>
              <span>3,000+ Reviews</span>
            </div>
          </div>

          <label className="bakery-sort-box">
            <span>Sort by</span>
            <select value={activeSort} onChange={(event) => updateSearchParams('sort', event.target.value)}>
              {menuSortOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="bakery-active-filters">
          {activeCategory && <span className="bakery-active-pill">Category: {activeCategory} <button onClick={() => updateSearchParams('category', '')}>×</button></span>}
          {activeFlavour && <span className="bakery-active-pill">Flavour: {activeFlavour} <button onClick={() => updateSearchParams('flavour', '')}>×</button></span>}
          {activeType && <span className="bakery-active-pill">Type: {activeType} <button onClick={() => updateSearchParams('type', '')}>×</button></span>}
          {activeOccasion && <span className="bakery-active-pill">Occasion: {activeOccasion} <button onClick={() => updateSearchParams('occasion', '')}>×</button></span>}
          {activeDelivery && <span className="bakery-active-pill">Delivery: {activeDelivery} <button onClick={() => updateSearchParams('delivery', '')}>×</button></span>}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bakery-no-results">
            <h3>No products found</h3>
            <p>Try clearing some filters to see more results.</p>
            <button onClick={clearFilters} className="bakery-btn-primary">Clear Filters</button>
          </div>
        ) : (
          <div className="bakery-product-grid">
            {filteredProducts.map((item) => (
              <article key={item.id} className="bakery-product-card">
                <div
                  className={`bakery-product-image ${item.imageClass}`}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  {item.badge && <span className="bakery-product-badge">{item.badge}</span>}
                </div>
                <div className="bakery-product-body">
                  <div className="bakery-product-meta">
                    <span className="bakery-rating-pill">★ {item.rating}</span>
                    {item.reviews && <span className="bakery-reviews-text">({item.reviews} reviews)</span>}
                  </div>
                  <h3>{item.name}</h3>
                  <div className="bakery-price-row">
                    <strong>₹ {item.price}</strong>
                    {item.originalPrice && <s>₹ {item.originalPrice}</s>}
                  </div>
                  <p className="bakery-delivery-estimate">Earliest Delivery: <strong>{item.delivery}</strong></p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default MenuPage
