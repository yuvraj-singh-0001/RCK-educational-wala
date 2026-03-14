import { Link } from 'react-router-dom'
import { getStorefrontHref, storefrontCategories } from '../../data/storefrontData'

function PublicFooter() {
  return (
    <footer className="mx-auto mb-6 mt-4 w-[min(1220px,94%)] rounded-3xl border border-black/10 bg-white/95 px-5 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-[1.15fr_0.9fr_1fr_1.05fr]">
        <div className="space-y-3">
          <h3 className="m-0 text-[1.15rem] font-semibold text-[#222222]">Crumb & Crown Bakery</h3>
          <p className="m-0 text-sm leading-6 text-[#666666]">
            Celebration gifting studio with cakes, flowers, hampers and fast order support.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="m-0 text-sm font-extrabold uppercase tracking-[0.12em] text-[#e02b2b]">Quick Links</h4>
          <div className="flex flex-wrap gap-2.5">
            <Link
              to="/menu"
              className="rounded-full border border-black/10 bg-[#fff9f9] px-3 py-1.5 text-sm font-semibold text-[#3f4a5d] no-underline transition hover:border-[#e02b2b]/35 hover:text-[#c62828]"
            >
              Shop All
            </Link>
            <Link
              to="/custom-cake"
              className="rounded-full border border-black/10 bg-[#fff9f9] px-3 py-1.5 text-sm font-semibold text-[#3f4a5d] no-underline transition hover:border-[#e02b2b]/35 hover:text-[#c62828]"
            >
              Custom Cake
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border border-black/10 bg-[#fff9f9] px-3 py-1.5 text-sm font-semibold text-[#3f4a5d] no-underline transition hover:border-[#e02b2b]/35 hover:text-[#c62828]"
            >
              Gallery
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="m-0 text-sm font-extrabold uppercase tracking-[0.12em] text-[#e02b2b]">Contact</h4>
          <div className="space-y-1.5 text-sm text-[#4e5c71]">
            <p className="m-0">
              <span className="font-semibold text-[#222222]">Phone:</span> +91 99999 99999
            </p>
            <p className="m-0 break-all">
              <span className="font-semibold text-[#222222]">Email:</span> orders@crumbcrown.in
            </p>
            <p className="m-0">
              <span className="font-semibold text-[#222222]">Mon-Sat:</span> 9:00 AM - 9:00 PM
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="m-0 text-sm font-extrabold uppercase tracking-[0.12em] text-[#e02b2b]">Popular Filters</h4>
          <div className="flex flex-wrap gap-2">
            {storefrontCategories.slice(0, 6).map((item) => (
              <Link
                key={item.slug}
                to={getStorefrontHref(item)}
                className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-[#4a5568] no-underline transition hover:border-[#e02b2b]/35 hover:bg-[#fde8e8] hover:text-[#c62828]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PublicFooter
