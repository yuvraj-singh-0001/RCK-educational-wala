import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const desktopCategories = [
  { label: 'Cakes', to: '/menu?category=Cakes' },
  { label: 'Gourmet Cakes', to: '/menu?category=Gourmet%20Cakes' },
  { label: 'Theme Cakes', to: '/menu?type=Theme%20Cakes' },
  { label: 'By Relationship', to: '/menu?occasion=Relationship' },
  { label: 'Desserts', to: '/menu?category=Desserts' },
  { label: 'Birthday', to: '/menu?occasion=Birthday' },
  { label: 'Hampers', to: '/menu?category=Combos', badge: 'New' },
  { label: 'Anniversary', to: '/menu?occasion=Anniversary' },
  { label: 'Occasions', to: '/menu?occasion=Occasions' },
  { label: 'Customized Cakes', to: '/custom-cake' },
]

const mobileMenuLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Custom Cake', to: '/custom-cake' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const quickActions = [
  { label: 'Track Order', to: '/contact?topic=track-order', icon: PercentIcon },
  { label: 'Cart', to: '/custom-cake', icon: CartIcon },
  { label: 'Login/Signup', to: '/contact', icon: UserIcon },
]

function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const closeMenu = () => setIsMobileMenuOpen(false)
    window.addEventListener('resize', closeMenu)

    return () => window.removeEventListener('resize', closeMenu)
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_7px_18px_rgba(0,0,0,0.08)]">
      <div className="bg-[#ff0015] text-white">
        <div className="mx-auto flex w-full max-w-[1900px] flex-col gap-2.5 px-4 py-2 sm:px-6 lg:px-10 xl:flex-row xl:items-center xl:gap-3 xl:py-[8px]">
          <div className="flex items-center justify-between gap-2.5 xl:min-w-[250px] xl:justify-start">
            <Link to="/" className="shrink-0 text-white no-underline">
              <span
                className="block text-[1.8rem] font-black leading-none tracking-[-0.06em] sm:text-[2.25rem]"
                style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
              >
                bakingo
              </span>
            </Link>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/16 xl:hidden"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle bakery navigation"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold sm:text-[0.9rem] xl:min-w-[160px] xl:flex-1 xl:justify-start">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12">
              <PinIcon />
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-1 py-0 text-left text-white transition hover:bg-white/10"
            >
              <span>Delivering To</span>
              <ChevronDownIcon />
            </button>
          </div>

          <label
            htmlFor="bakery-search-input"
            className="flex min-h-10 w-full items-center gap-2 rounded-2xl bg-white px-3.5 text-[#191919] shadow-[0_8px_22px_rgba(0,0,0,0.12)] xl:mx-auto xl:max-w-[540px] xl:flex-[1.3]"
          >
            <SearchIcon />
            <input
              id="bakery-search-input"
              type="text"
              placeholder="Search For Cakes, Occasion, Flavour And More..."
              className="w-full border-none bg-transparent text-[0.8rem] font-medium text-[#141414] outline-none placeholder:text-[#333333] sm:text-[0.88rem]"
            />
          </label>

          <nav
            className="hidden items-start justify-end gap-1.5 lg:flex xl:flex-1 xl:gap-2"
            aria-label="Quick actions"
          >
            {quickActions.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className="group flex min-w-[64px] flex-col items-center gap-0.5 text-center text-white no-underline"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/18 bg-white/8 transition duration-200 group-hover:-translate-y-0.5 group-hover:bg-white/14">
                    <Icon />
                  </span>
                  <span className="text-[0.64rem] font-semibold leading-tight xl:text-[0.75rem]">{item.label}</span>
                </NavLink>
              )
            })}
          </nav>

          <div className="grid grid-cols-3 gap-1.5 lg:hidden">
            {quickActions.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className="flex flex-col items-center justify-center gap-0.5 rounded-2xl border border-white/16 bg-white/8 px-2 py-1.5 text-center text-white no-underline transition hover:bg-white/12"
                >
                  <Icon />
                  <span className="text-[0.62rem] font-semibold leading-tight sm:text-[0.7rem]">{item.label}</span>
                </NavLink>
              )
            })}
          </div>
        </div>

        <div
          className={[
            'overflow-hidden bg-white text-[#121212] transition-all duration-300 ease-out',
            'max-h-20 border-b border-[#e9e9e9] opacity-100',
          ].join(' ')}
        >
          <div className="mx-auto hidden max-w-[1900px] items-center justify-between gap-4 overflow-x-auto whitespace-nowrap px-4 py-2.5 sm:px-6 lg:flex lg:px-10 xl:gap-5">
            {desktopCategories.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="group inline-flex shrink-0 items-center gap-1 text-[0.84rem] font-semibold text-[#111111] no-underline transition hover:text-[#ff0015] xl:text-[0.92rem]"
              >
                <span>{item.label}</span>
                {item.badge ? (
                  <span className="rounded-full bg-[#ff0015] px-2 py-0.5 text-[0.68rem] font-bold leading-none text-white">
                    {item.badge}
                  </span>
                ) : null}
              </NavLink>
            ))}
          </div>
        </div>

        <div
          className={[
            'xl:hidden overflow-hidden border-t border-[#efefef] bg-white text-[#121212] transition-all duration-300 ease-out',
            isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="space-y-3 px-4 py-2.5 sm:px-6">
            <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3" aria-label="Mobile page navigation">
              {mobileMenuLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-2xl border px-3 py-2.5 text-center text-[0.82rem] font-semibold no-underline transition',
                      isActive
                        ? 'border-[#ff0015] bg-[#ffebed] text-[#ff0015]'
                        : 'border-[#f2c6cb] bg-white text-[#242424] hover:border-[#ff0015]/50',
                    ].join(' ')
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <nav className="flex gap-1.5 overflow-x-auto pb-1" aria-label="Mobile storefront categories">
              {desktopCategories.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#e7e7e7] bg-white px-3 py-1.5 text-[0.78rem] font-semibold text-[#222222] no-underline transition hover:border-[#ff0015] hover:text-[#ff0015]"
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="rounded-full bg-[#ff0015] px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s6-5.7 6-11a6 6 0 10-12 0c0 5.3 6 11 6 11z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="11" cy="11" r="6.6" />
      <path d="M20 20l-4.35-4.35" strokeLinecap="round" />
    </svg>
  )
}

function PercentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7" strokeLinecap="round" />
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="16" r="2.5" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 5h2l2.2 9.2a1 1 0 001 .8h8.9a1 1 0 001-.76L21 8H7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19a7 7 0 0114 0" strokeLinecap="round" />
    </svg>
  )
}

export default PublicHeader
