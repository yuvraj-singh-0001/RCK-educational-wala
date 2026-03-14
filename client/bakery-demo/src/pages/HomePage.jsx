import { Link } from 'react-router-dom'
import HeroCarousel from '../components/home/HeroCarousel'
import {
  highlightStats,
  productCatalog
} from '../data/storefrontData'

const highlights = [
  { title: '2 Hour Delivery', description: 'Get your cakes and gifts delivered within 2 hours of placing the order.' },
  { title: 'Midnight Delivery', description: 'Surprise your loved ones right at 12:00 AM with our special midnight delivery.' },
  { title: '100% Fresh', description: 'Oven fresh cakes baked with premium ingredients just for your order.' },
]

const menuShowcaseItems = [
  {
    id: 'classic-cakes',
    label: 'Classic Cakes',
    to: '/menu?category=Cakes',
    imageUrl: '/bakery-demo/images/Classic-Menu-cake.png',
  },
  {
    id: 'photo-cakes',
    label: 'Photo Cakes',
    to: '/menu?type=Photo%20Cakes',
    imageUrl: '/bakery-demo/images/Photo-Cakes-cake.png',
  },
  {
    id: 'gourmet-cakes',
    label: 'Gourmet Cakes',
    to: '/menu?category=Cakes',
    imageUrl: '/bakery-demo/images/Gourmet%20Cakes.png',
  },
  {
    id: 'designer-cakes',
    label: 'Designer Cakes',
    to: '/menu?type=Designer%20Cakes',
    imageUrl: '/bakery-demo/images/Designer-Cakes-menu.png',
  },
  {
    id: 'hampers',
    label: 'Hampers',
    to: '/menu?category=Combos',
    imageUrl: '/bakery-demo/images/Bakery-Hampers-menu.png',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    to: '/menu?category=Desserts',
    imageUrl: '/bakery-demo/images/Buy-Desserts-menu.png',
  },
]

function HomePage() {
  const featuredProducts = productCatalog.slice(0, 8) // Increased to 8 to show a nice 2-row grid

  return (
    <>
      <HeroCarousel />

      <section className="bakery-section !mt-1.5 overflow-hidden rounded-xl bg-gradient-to-b from-[#f8dfe7] to-[#f9e8ee] px-4 pb-7 pt-6 sm:px-6 md:rounded-2xl lg:px-8">
        <div className="mb-5 grid justify-items-center gap-2 text-center">
          <p className="m-0 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none text-[#e11d2f]">Menu</p>
          <h2 className="m-0 text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium tracking-[-0.03em] text-[#435266]">
            What will you wish for?
          </h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {menuShowcaseItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="group shrink-0 basis-[calc(50%-0.375rem)] snap-start text-inherit no-underline md:basis-[calc(25%-0.5625rem)] xl:basis-[calc(16.666%-0.625rem)]"
            >
              <div className="w-full rounded-xl bg-white/30 p-1 shadow-[0_10px_24px_rgba(114,65,79,0.08)]">
                <div
                  className="aspect-square rounded-lg bg-cover bg-center transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_20px_rgba(114,65,79,0.12)]"
                  style={{
                    backgroundImage: `url('${item.imageUrl}')`,
                  }}
                />
              </div>
              <span className="mt-2 block text-center text-[0.8rem] font-extrabold uppercase tracking-[0.03em] text-[#18233a] md:text-[0.82rem] xl:text-[0.9rem]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bakery-section grid gap-3 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-black/10 bg-white/95 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          >
            <h3 className="m-0 font-['Fraunces',serif] text-[1.05rem] text-[#222222]">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#666666]">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="bakery-section rounded-[1.8rem] bg-white/70 p-4 sm:p-6 lg:p-7">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#e02b2b]">Our Bestsellers</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#222222] sm:text-3xl">Most Loved Products</h2>
          </div>
          <Link
            to="/menu?sort=popular"
            className="inline-flex items-center rounded-full border border-[#e02b2b]/25 bg-[#fde8e8] px-4 py-2 text-sm font-bold text-[#c62828] no-underline transition hover:-translate-y-0.5 hover:border-[#e02b2b]/40"
          >
            Explore All Products
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((item) => (
            <Link to="/menu" key={item.id} className="no-underline">
              <article className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.09)]">
                <div
                  className="relative h-52 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                >
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#c62828] shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex rounded-full bg-[#fde8e8] px-2.5 py-1 text-xs font-bold text-[#c62828]">★ {item.rating}</span>
                    {item.reviews && <span className="text-xs text-[#666666]">({item.reviews} reviews)</span>}
                  </div>
                  <h3 className="line-clamp-1 text-[1.04rem] font-semibold text-[#222222]">{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-extrabold text-[#222222]">₹ {item.price}</span>
                    {item.originalPrice && <s className="text-[#888888]">₹ {item.originalPrice}</s>}
                  </div>
                  <p className="text-sm text-[#666666]">
                    Earliest Delivery:{' '}
                    <strong className="font-semibold text-[#222222]">{item.delivery}</strong>
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="bakery-section rounded-[1.8rem] bg-gradient-to-r from-[#fff6f8] to-[#fffdf9] p-4 sm:p-6 lg:p-7">
        <div className="mb-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#e02b2b]">Milestones</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#222222] sm:text-3xl">Delivering Smiles Across India</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {highlightStats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-black/10 bg-white px-4 py-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
            >
              <strong className="block text-2xl font-extrabold text-[#222222]">{item.value}</strong>
              <span className="mt-1 block text-sm font-medium text-[#666666]">{item.label}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
