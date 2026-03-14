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
  const viewMode = searchParams.get('view') || ''

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

  const isClassicGalleryView =
    viewMode === 'classic' &&
    activeCategory === 'Cakes' &&
    !activeOccasion &&
    !activeDelivery &&
    !activeFlavour &&
    !activeType

  if (isClassicGalleryView) {
    return (
      <section className="bakery-section !mt-1.5 rounded-xl md:rounded-2xl">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#e02b2b]">Classic Collection</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#222222] sm:text-3xl">Classic Cakes</h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center rounded-full border border-[#e02b2b]/25 bg-[#fde8e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#c62828] no-underline transition hover:-translate-y-0.5 hover:border-[#e02b2b]/45"
          >
            View Full Menu
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {filteredProducts.map((item, index) => (
            <Link key={item.id} to="/menu" className="group no-underline">
              <article
                className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(0,0,0,0.1)] motion-safe:animate-[bakery-fade-up_420ms_ease_both]"
                style={{ animationDelay: `${Math.min(index * 32, 260)}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-[#f6f0eb]">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading={index < 6 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index < 2 ? 'high' : 'auto'}
                    sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
                  />
                </div>
                <div className="space-y-0.5 px-2.5 py-2">
                  <h3 className="line-clamp-1 text-[0.74rem] font-semibold text-[#222222]">{item.name}</h3>
                  <p className="text-[0.72rem] font-bold text-[#c62828]">₹ {item.price}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="bakery-section bakery-catalog-layout !mt-1.5 rounded-xl md:rounded-2xl">
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
