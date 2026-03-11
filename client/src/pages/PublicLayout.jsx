import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import PublicFooter from '../components/layout/PublicFooter'
import PublicHeader from '../components/layout/PublicHeader'

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
      <PublicHeader menuOpen={menuOpen} onSectionJump={handleSectionJump} setMenuOpen={setMenuOpen} />

      <Outlet />

      <PublicFooter onSectionJump={handleSectionJump} />

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
