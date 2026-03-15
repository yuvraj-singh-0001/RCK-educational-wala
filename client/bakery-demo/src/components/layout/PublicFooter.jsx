import { Link } from 'react-router-dom'

function PublicFooter() {
  const knowUsLinks = ['Our Story', 'Contact Us', 'Locate Us', 'Blog', 'Media', 'Careers']
  const helpLinks = ['FAQ', 'Cancellation And Refund', 'Privacy Policy', 'Terms And Conditions', 'Customer Grievance', 'Sitemap']
  const moreInfoLinks = ['Corporate Cakes', 'Coupons & Offers', 'Download App']

  return (
    <footer className="mt-6 overflow-hidden bg-[#fff9f7]">
      <div className="border-y border-black/10 bg-[#fff9f7]">
        <div className="mx-auto flex w-[min(1220px,94%)] items-center justify-between gap-3 py-3.5">
          <p className="m-0 text-center text-[clamp(0.82rem,1vw,1.1rem)] font-semibold tracking-tight text-[#181818]">
            Bakingo - Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </p>
          <button
            type="button"
            className="grid h-8 w-8 shrink-0 place-items-center bg-transparent text-[#222]"
            aria-label="Expand footer"
          >
            <span className="text-[1.45rem] leading-none">⌄</span>
          </button>
        </div>
      </div>

      <section className="relative bg-[#f4dfd1] py-9">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18px -6px, #fff9f7 24px, transparent 25px)',
            backgroundSize: '36px 24px',
          }}
        />

        <span
          aria-hidden
          className="pointer-events-none absolute -left-20 top-0 h-[140%] w-[64%] rotate-[24deg] bg-white/12"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-[-8%] top-[-24%] h-[360px] w-[360px] rounded-full bg-[#edd3c6]"
        />

        <div className="relative mx-auto w-[min(1220px,94%)]">
          <div className="mb-9 grid gap-4 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-10">
            <h3 className="m-0 text-[clamp(1.2rem,1.55vw,1.7rem)] font-extrabold uppercase tracking-[0.02em] text-[#f20d24]">
              Subscribe To Our Newsletter
            </h3>
            <label className="flex h-[46px] items-center rounded-lg border border-[#ff303f] bg-transparent px-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="h-full w-full border-none bg-transparent text-[clamp(0.9rem,1vw,1.05rem)] text-[#f20d24] outline-none placeholder:text-[#f20d24]"
              />
              <span className="ml-3 text-[1.45rem] leading-none text-[#f20d24]">→</span>
            </label>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
            <div>
              <p className="m-0 text-[clamp(2rem,3.2vw,2.9rem)] font-extrabold italic leading-none tracking-tight text-[#f20d24]">
                bakingo
              </p>
              <p className="mt-3 text-[clamp(0.85rem,0.95vw,1rem)] text-[#f20d24]">© 2026</p>
              <div className="mt-3 flex items-center gap-3 text-[clamp(1rem,1.2vw,1.25rem)] font-bold text-[#f20d24]">
                <span>f</span>
                <span>◉</span>
                <span>𝕏</span>
                <span>in</span>
                <span>▶</span>
              </div>
            </div>

            <div>
              <h4 className="m-0 text-[clamp(1rem,1.2vw,1.25rem)] font-extrabold uppercase leading-none text-[#f20d24]">Know Us</h4>
              <div className="mt-3 space-y-1.5">
                {knowUsLinks.map((label) => (
                  <Link key={label} to="/about" className="block text-[clamp(0.88rem,0.95vw,1rem)] text-[#f20d24] no-underline hover:opacity-80">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="m-0 text-[clamp(1rem,1.2vw,1.25rem)] font-extrabold uppercase leading-none text-[#f20d24]">Need Help</h4>
              <div className="mt-3 space-y-1.5">
                {helpLinks.map((label) => (
                  <Link key={label} to="/contact" className="block text-[clamp(0.88rem,0.95vw,1rem)] text-[#f20d24] no-underline hover:opacity-80">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="m-0 text-[clamp(1rem,1.2vw,1.25rem)] font-extrabold uppercase leading-none text-[#f20d24]">More Info</h4>
              <div className="mt-3 space-y-1.5">
                {moreInfoLinks.map((label) => (
                  <Link key={label} to="/menu" className="block text-[clamp(0.88rem,0.95vw,1rem)] text-[#f20d24] no-underline hover:opacity-80">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default PublicFooter
