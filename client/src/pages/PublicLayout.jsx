import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

function PublicLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionJump = (sectionId) => {
    const goToSection = () => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    if (location.pathname !== '/') {
      navigate('/', { replace: false })
      setTimeout(goToSection, 60)
      return
    }

    goToSection()
  }

  return (
    <div className="min-h-screen bg-canvas">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/75 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <button className="text-lg font-extrabold tracking-tight text-slate-900" onClick={() => handleSectionJump('hero')}>
            RCK Educational Wala
          </button>
          <nav className="flex items-center gap-2 text-sm font-semibold">
            <button className="nav-link" onClick={() => handleSectionJump('hero')}>
              Home
            </button>
            <button className="nav-link" onClick={() => handleSectionJump('courses')}>
              Courses
            </button>
            <button className="nav-link" onClick={() => handleSectionJump('contact')}>
              Contact
            </button>
            <NavLink className="nav-link" to="/student">
              Student
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-slate-200 bg-white/90">
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
    </div>
  )
}

export default PublicLayout
