import { Link } from 'react-router-dom'
import HeroCarousel from '../components/home/HeroCarousel'
import {
  highlightStats,
  productCatalog
} from '../data/storefrontData'

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
    to: '/menu?category=Gourmet%20Cakes',
    imageUrl: '/bakery-demo/images/Gourmet%20Cakes1.jpg',
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

const specialOffers = [
  {
    id: 'first-order-gift',
    title: 'First Cake Order Gift',
    detail: 'Get complimentary chocolates with your very first cake order.',
    chip: 'Welcome Benefit',
  },
  {
    id: 'next-order-off',
    title: 'Next Order Discount',
    detail: 'After your first order, unlock 20% to 60% OFF on your next cake order.',
    chip: '20% - 60% OFF',
  },
  {
    id: 'refer-and-earn',
    title: 'Refer & Earn Rewards',
    detail: 'Share your coupon code with friends. When they place their first order, you get 30% to 60% OFF on your next order, plus chocolates and birthday decoration perks.',
    chip: 'Referral Bonus',
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

      <section className="bakery-section overflow-hidden rounded-[1.8rem] bg-white/70 px-4 py-8 sm:px-6 lg:px-8">
        {/* Section header — centred like reference image */}
        <div className="mb-7 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[1.6rem] leading-none text-[#f5a623]">✦</span>
            <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold text-[#c62828]">Our Bestsellers</h2>
          </div>
          <p className="mt-1.5 text-sm text-[#666666]">Most loved products from our kitchen</p>
        </div>

        {/* Horizontal scroll strip */}
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {featuredProducts.map((item) => (
            <Link
              to="/menu"
              key={item.id}
              className="shrink-0 snap-start basis-[44%] no-underline sm:basis-[30%] md:basis-[22%] lg:basis-[18%]"
            >
              <article className="overflow-hidden rounded-xl border border-black/[0.07] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                {/* Image */}
                <div
                  className="relative aspect-square overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  {/* Veg indicator — green square with inner circle */}
                  <span className="absolute left-2 top-2 flex h-[18px] w-[18px] items-center justify-center rounded-[3px] border-[2px] border-[#388e3c] bg-white shadow-sm">
                    <span className="h-[9px] w-[9px] rounded-full bg-[#388e3c]" />
                  </span>
                </div>

                {/* Card body */}
                <div className="px-2.5 pb-3 pt-2">
                  <h3 className="line-clamp-1 text-[0.82rem] font-semibold leading-snug text-[#1a1a1a]">{item.name}</h3>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[0.9rem] font-extrabold text-[#1a1a1a]">₹{item.price}</span>
                      {item.originalPrice && (
                        <s className="text-[0.72rem] text-[#999]">₹{item.originalPrice}</s>
                      )}
                    </div>
                    <span className="cursor-pointer text-base leading-none text-[#c8c8c8] transition-colors hover:text-[#e02b2b]">♡</span>
                  </div>

                  <div className="mt-1.5 flex items-center gap-1 text-[0.72rem] text-[#666]">
                    <span className="text-[#f5a623] text-[0.78rem]">★</span>
                    <span className="font-semibold text-[#333]">{item.rating}</span>
                    <span>({item.reviews >= 1000 ? (item.reviews / 1000).toFixed(1) + 'K' : item.reviews} Reviews)</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="mt-5 text-center">
          <Link
            to="/menu?sort=popular"
            className="inline-block border-b-2 border-[#c62828] pb-0.5 text-sm font-bold uppercase tracking-widest text-[#c62828] no-underline transition-colors hover:text-[#9b1b1b]"
          >
            VIEW ALL
          </Link>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section className="bakery-section relative overflow-hidden rounded-[1.8rem] bg-[#fdf0f2] px-6 py-12 sm:px-10 lg:px-16">
        {/* decorative large circle */}
        <span className="pointer-events-none absolute -right-24 top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-[#f5d5dc] opacity-60 sm:h-[420px] sm:w-[420px]" />

        <div className="relative z-10">
          <div className="mb-8 text-center">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-[#c62828]">Our Promise</h2>
            <p className="mt-2 text-[0.95rem] text-[#555]">There’s no secret spell—only honest, hard work!</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {/* ON-TIME DELIVERY */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 64 40" className="mb-3 h-16 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="8" width="38" height="24" rx="3" fill="#e88a9a"/>
                <rect x="40" y="16" width="20" height="16" rx="2" fill="#d96c7e"/>
                <polygon points="40,16 60,16 54,8 46,8" fill="#c45870"/>
                <circle cx="12" cy="34" r="5" fill="#c45870" stroke="#fff" strokeWidth="1.5"/>
                <circle cx="48" cy="34" r="5" fill="#c45870" stroke="#fff" strokeWidth="1.5"/>
                <circle cx="12" cy="34" r="2" fill="#fff"/>
                <circle cx="48" cy="34" r="2" fill="#fff"/>
              </svg>
              <p className="text-[0.78rem] font-extrabold uppercase tracking-wide text-[#1a1a1a]">On-Time Delivery</p>
              <p className="mt-1 text-[0.72rem] leading-relaxed text-[#666]">Because no one likes late surprises.</p>
            </div>

            {/* 500+ DESIGNS */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 56 48" className="mb-3 h-16 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="26" width="44" height="18" rx="3" fill="#e88a9a"/>
                <rect x="12" y="18" width="32" height="10" rx="2" fill="#d96c7e"/>
                <rect x="18" y="12" width="20" height="8" rx="2" fill="#e88a9a"/>
                <rect x="25" y="2" width="4" height="12" rx="2" fill="#c45870"/>
                <rect x="16" y="2" width="4" height="10" rx="2" fill="#c45870"/>
                <rect x="34" y="2" width="4" height="10" rx="2" fill="#c45870"/>
                <circle cx="27" cy="2" r="2" fill="#e88a9a"/>
                <circle cx="18" cy="2" r="2" fill="#e88a9a"/>
                <circle cx="36" cy="2" r="2" fill="#e88a9a"/>
              </svg>
              <p className="text-[0.78rem] font-extrabold uppercase tracking-wide text-[#1a1a1a]">500+ Designs</p>
              <p className="mt-1 text-[0.72rem] leading-relaxed text-[#666]">Wishes come in all shapes and sizes.</p>
            </div>

            {/* 2 CR+ ORDERS */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 52 52" className="mb-3 h-16 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="22" width="40" height="26" rx="3" fill="#e88a9a"/>
                <rect x="4" y="16" width="44" height="8" rx="2" fill="#d96c7e"/>
                <rect x="23" y="4" width="6" height="20" rx="3" fill="#c45870"/>
                <path d="M26 4 C16 4 10 10 10 16 L26 16 Z" fill="#d96c7e"/>
                <path d="M26 4 C36 4 42 10 42 16 L26 16 Z" fill="#e88a9a"/>
                <rect x="22" y="16" width="8" height="32" fill="#c45870" opacity="0.4"/>
              </svg>
              <p className="text-[0.78rem] font-extrabold uppercase tracking-wide text-[#1a1a1a]">2 Cr+ Orders</p>
              <p className="mt-1 text-[0.72rem] leading-relaxed text-[#666]">You can close your eyes and trust us.</p>
            </div>

            {/* BAKED FRESH */}
            <div className="flex flex-col items-center text-center">
              <svg viewBox="0 0 56 44" className="mb-3 h-16 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 24 L4 38 Q4 42 8 42 L36 42 Q40 42 40 38 L40 24 Z" fill="#e88a9a"/>
                <path d="M4 24 L40 24 L34 12 Q32 8 28 8 L16 8 Q12 8 10 12 Z" fill="#d96c7e"/>
                <rect x="16" y="4" width="4" height="10" rx="2" fill="#c45870"/>
                <circle cx="18" cy="4" r="2" fill="#f5a8b8"/>
                <path d="M40 28 Q48 24 52 30 Q52 38 48 42 L40 42 Z" fill="#d96c7e"/>
                <path d="M8 30 Q14 26 20 30 Q26 34 32 30" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
              <p className="text-[0.78rem] font-extrabold uppercase tracking-wide text-[#1a1a1a]">Baked Fresh</p>
              <p className="mt-1 text-[0.72rem] leading-relaxed text-[#666]">Spreading smiles, one slice at a time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bakery-section overflow-hidden rounded-[1.6rem] border border-[#f0d7de] bg-[#fff6f8] p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="m-0 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#d62839]">Special Offers</p>
            <h2 className="mt-1 text-[1.15rem] font-bold tracking-tight text-[#222] sm:text-[1.28rem]">Easy Savings For Every User</h2>
          </div>
          <Link
            to="/menu"
            className="rounded-full bg-[#e11d2f] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-white no-underline transition hover:bg-[#c91527]"
          >
            Claim Offer
          </Link>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.12fr_1fr]">
          <article className="offer-ticket-glow relative overflow-hidden rounded-[1.3rem] border-[3px] border-[#c9a734] bg-[#f7ced9] px-4 py-4 sm:px-5">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-[radial-gradient(circle_at_16px_-7px,#fff6f8_22px,transparent_23px)] [background-size:32px_20px]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-[radial-gradient(circle_at_16px_27px,#fff6f8_22px,transparent_23px)] [background-size:32px_20px]" />
            <span className="offer-ticket-shine pointer-events-none absolute inset-y-0 left-[-45%] w-[45%] bg-gradient-to-r from-transparent via-white/35 to-transparent" />

            <div className="relative z-10 text-center">
              <h3 className="m-0 text-[1.28rem] font-extrabold uppercase tracking-[0.03em] text-[#e1172d] sm:text-[1.55rem]">
                The Magical Ticket
              </h3>
              <p className="mx-auto mt-2 max-w-[28rem] text-[0.84rem] leading-snug text-[#292929] sm:text-[0.9rem]">
                Add 3 reminders to your account and unlock special savings. Smart ordering, better rewards.
              </p>
              <Link
                to="/contact"
                className="offer-cta-pop mt-3 inline-block rounded-lg bg-[#ff1128] px-5 py-2 text-[0.82rem] font-extrabold uppercase tracking-[0.05em] text-white no-underline transition hover:bg-[#de0b20]"
              >
                Unlock Now
              </Link>
            </div>
          </article>

          <div className="grid gap-2.5">
            {specialOffers.map((item) => (
              <article key={item.id} className="offer-card-float rounded-xl border border-[#efdbe1] bg-white px-3.5 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <h3 className="m-0 text-[0.88rem] font-bold text-[#1f1f1f]">{item.title}</h3>
                  <span className="bakery-offer-pill-live shrink-0 rounded-full bg-[#ffe7ec] px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.06em] text-[#c61c2f]">
                    {item.chip}
                  </span>
                </div>
                <p className="m-0 text-[0.77rem] leading-relaxed text-[#575757]">{item.detail}</p>
              </article>
            ))}
          </div>
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
