import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

function PublicLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
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
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <button className="brand-title" onClick={() => handleSectionJump('hero')}>
              RCK Educational Wala
            </button>

            <span className="admission-badge">Admission Open</span>

            <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold">
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
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-slate-200 bg-white/95">
        <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6">
          <div>
            <p className="text-sm font-bold text-slate-900">RCK Educational Wala</p>
            <p className="mt-1 text-sm text-slate-600">Coaching Name: RCK Educational Wala</p>
          </div>
          <div className="text-sm text-slate-600 sm:text-right">
            <p>Phone: 7307056527</p>
            <p>Email: rckeducationalwala@gmail.com</p>
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
