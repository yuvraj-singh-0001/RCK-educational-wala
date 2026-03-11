import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

function PublicLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)

    const revealTargets = document.querySelectorAll('[data-reveal]')
    if (revealTargets.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
      )

      revealTargets.forEach((item) => {
        item.classList.add('reveal')
        observer.observe(item)
      })

      return () => observer.disconnect()
    }

    return undefined
  }, [location.pathname])

  useEffect(() => {
    const sectionId = location.hash?.replace('#', '')
    if (!sectionId) {
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  const handleSectionJump = (sectionId) => {
    setMenuOpen(false)

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`)
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-canvas">
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
            <button className="brand-title" onClick={() => handleSectionJump('hero')}>
              RCK Educational Wala
            </button>

            <span className="admission-badge hidden sm:inline-flex">Admission Open</span>

            <nav className="hidden items-center gap-2 text-sm font-semibold md:flex">
              <button className="nav-link" onClick={() => handleSectionJump('hero')}>
                Home
              </button>
              <button className="nav-link" onClick={() => handleSectionJump('courses')}>
                Courses
              </button>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/results">
                Results
              </NavLink>
              <button className="nav-link" onClick={() => handleSectionJump('contact')}>
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
              <button className="mobile-nav-link" onClick={() => handleSectionJump('hero')} type="button">
                Home
              </button>
              <button className="mobile-nav-link" onClick={() => handleSectionJump('courses')} type="button">
                Courses
              </button>
              <NavLink className="mobile-nav-link" onClick={() => setMenuOpen(false)} to="/about">
                About
              </NavLink>
              <NavLink className="mobile-nav-link" onClick={() => setMenuOpen(false)} to="/results">
                Results
              </NavLink>
              <button className="mobile-nav-link" onClick={() => handleSectionJump('contact')} type="button">
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

      <Outlet />

      <footer className="site-footer border-t border-slate-200 bg-white/95">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="footer-grid">
            <div>
              <p className="footer-brand">RCK Educational Wala</p>
              <p className="footer-text mt-3">
                Exam-focused coaching with structured batches for State Exams, School Maths, TET/CTET, and
                academic tracks.
              </p>
              <div className="footer-social mt-4">
                <a aria-label="Facebook" className="footer-social-link" href="https://facebook.com" rel="noreferrer" target="_blank">
                  <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M14 8H16V5H14C11.79 5 10 6.79 10 9V11H8V14H10V19H13V14H15.5L16 11H13V9C13 8.45 13.45 8 14 8Z" fill="currentColor" />
                  </svg>
                </a>
                <a aria-label="Instagram" className="footer-social-link" href="https://instagram.com" rel="noreferrer" target="_blank">
                  <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
                    <rect height="14" rx="4" stroke="currentColor" strokeWidth="1.8" width="14" x="5" y="5" />
                    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="16.8" cy="7.4" fill="currentColor" r="1" />
                  </svg>
                </a>
                <a aria-label="YouTube" className="footer-social-link" href="https://youtube.com" rel="noreferrer" target="_blank">
                  <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M20 8.2C19.8 7.45 19.2 6.85 18.45 6.65C17.1 6.3 12 6.3 12 6.3C12 6.3 6.9 6.3 5.55 6.65C4.8 6.85 4.2 7.45 4 8.2C3.65 9.55 3.65 12 3.65 12C3.65 12 3.65 14.45 4 15.8C4.2 16.55 4.8 17.15 5.55 17.35C6.9 17.7 12 17.7 12 17.7C12 17.7 17.1 17.7 18.45 17.35C19.2 17.15 19.8 16.55 20 15.8C20.35 14.45 20.35 12 20.35 12C20.35 12 20.35 9.55 20 8.2Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M10.6 14.45V9.55L14.4 12L10.6 14.45Z" fill="currentColor" />
                  </svg>
                </a>
                <a aria-label="WhatsApp" className="footer-social-link" href="https://wa.me/917307056527" rel="noreferrer" target="_blank">
                  <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M20 11.8C20 16.05 16.58 19.5 12.35 19.5C11 19.5 9.73 19.16 8.62 18.56L4.5 19.5L5.45 15.5C4.84 14.36 4.5 13.06 4.5 11.7C4.5 7.45 7.92 4 12.15 4C16.38 4 20 7.55 20 11.8Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M9.3 8.9C9.12 8.5 8.95 8.5 8.62 8.5C8.34 8.5 8.02 8.51 7.74 8.78C7.46 9.05 6.68 9.73 6.68 11.12C6.68 12.51 7.77 13.85 7.92 14.04C8.07 14.23 10.04 17.32 13.14 18.16C15.72 18.85 16.25 18.76 16.73 18.72C17.21 18.68 18.27 18.04 18.49 17.44C18.71 16.84 18.71 16.33 18.65 16.23C18.59 16.13 18.43 16.07 18.15 15.93C17.87 15.79 16.51 15.12 16.25 15.02C15.99 14.92 15.8 14.87 15.61 15.15C15.42 15.43 14.87 16.07 14.71 16.25C14.55 16.43 14.39 16.45 14.11 16.31C13.83 16.17 12.93 15.87 11.87 14.93C11.04 14.2 10.48 13.3 10.32 13.03C10.16 12.76 10.31 12.61 10.44 12.48C10.57 12.35 10.72 12.14 10.86 11.97C11 11.8 11.04 11.68 11.13 11.49C11.22 11.3 11.17 11.12 11.1 10.98C11.03 10.84 10.45 9.42 9.3 8.9Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className="footer-title">Quick Links</p>
              <div className="footer-links mt-3">
                <button className="footer-link" onClick={() => handleSectionJump('hero')} type="button">
                  Home
                </button>
                <button className="footer-link" onClick={() => handleSectionJump('courses')} type="button">
                  Courses
                </button>
                <NavLink className="footer-link" to="/about">
                  About
                </NavLink>
                <NavLink className="footer-link" to="/results">
                  Results
                </NavLink>
                <button className="footer-link" onClick={() => handleSectionJump('contact')} type="button">
                  Contact
                </button>
                <NavLink className="footer-link" to="/admission">
                  Admission
                </NavLink>
              </div>
            </div>

            <div>
              <p className="footer-title">Support</p>
              <div className="footer-links mt-3">
                <Link className="footer-link" to="/student">
                  Student Login
                </Link>
                <a className="footer-link" href="tel:+917307056527">
                  Call Counsellor
                </a>
                <a className="footer-link" href="mailto:rckeducationalwala@gmail.com">
                  Email Support
                </a>
                <a className="footer-link" href="https://wa.me/917307056527" rel="noreferrer" target="_blank">
                  WhatsApp Help
                </a>
              </div>
            </div>

            <div>
              <p className="footer-title">Contact</p>
              <div className="footer-contact mt-3">
                <p className="footer-text">Phone: +91 7307056527</p>
                <p className="footer-text">Email: rckeducationalwala@gmail.com</p>
                <p className="footer-text">Address: Main Road, Uttar Pradesh</p>
                <p className="footer-text">Timing: 7:00 AM - 10:00 AM | 4:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom mt-8">
            <p className="footer-text">Copyright {new Date().getFullYear()} RCK Educational Wala. All rights reserved.</p>
            <p className="footer-text">Designed for exam-focused learning and trusted mentorship.</p>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/917307056527"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Chat
      </a>
    </div>
  )
}

export default PublicLayout
