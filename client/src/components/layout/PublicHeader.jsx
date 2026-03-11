import { NavLink } from 'react-router-dom'

function PublicHeader({ menuOpen, onSectionJump, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-40">
      <div className="top-bar">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/90">Admission Open 2026</p>
          <a className="top-contact" href="tel:+917307056527">
            Call Now: +91 7307056527
          </a>
        </div>
      </div>
      <div className="border-b border-white/60 bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <button className="brand-title" onClick={() => onSectionJump('hero')}>
            RCK Educational Wala
          </button>

          <span className="admission-badge hidden sm:inline-flex">Admission Open</span>

          <nav className="hidden items-center gap-2 text-sm font-semibold md:flex">
            <button className="nav-link" onClick={() => onSectionJump('hero')}>
              Home
            </button>
            <button className="nav-link" onClick={() => onSectionJump('courses')}>
              Courses
            </button>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/results">
              Results
            </NavLink>
            <button className="nav-link" onClick={() => onSectionJump('contact')}>
              Contact
            </button>
            <NavLink className="nav-link" to="/admission">
              Admission
            </NavLink>
            <NavLink className="nav-link" to="/student">
              Student
            </NavLink>
          </nav>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="hamburger-btn md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
          >
            {menuOpen ? (
              <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
                <path d="M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                <path d="M6 18L18 6" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            ) : (
              <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
                <path d="M4 7H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                <path d="M4 12H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                <path d="M4 17H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav md:hidden">
            <button className="mobile-nav-link" onClick={() => onSectionJump('hero')} type="button">
              Home
            </button>
            <button className="mobile-nav-link" onClick={() => onSectionJump('courses')} type="button">
              Courses
            </button>
            <NavLink className="mobile-nav-link" onClick={() => setMenuOpen(false)} to="/about">
              About
            </NavLink>
            <NavLink className="mobile-nav-link" onClick={() => setMenuOpen(false)} to="/results">
              Results
            </NavLink>
            <button className="mobile-nav-link" onClick={() => onSectionJump('contact')} type="button">
              Contact
            </button>
            <NavLink className="mobile-nav-link" onClick={() => setMenuOpen(false)} to="/admission">
              Admission
            </NavLink>
            <NavLink className="mobile-nav-link" onClick={() => setMenuOpen(false)} to="/student">
              Student
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

export default PublicHeader
