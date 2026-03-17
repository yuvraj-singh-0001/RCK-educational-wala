import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import PublicFooter from '../components/layout/PublicFooter'
import PublicHeader from '../components/layout/PublicHeader'

function PublicLayout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-bakery-reveal]')
    if (!revealTargets.length) {
      return undefined
    }

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      revealTargets.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '160px 0px 160px 0px' }
    )

    revealTargets.forEach((item) => {
      if (!item.classList.contains('bakery-reveal')) {
        item.classList.add('bakery-reveal')
      }
      observer.observe(item)
    })

    const fallbackRevealTimer = window.setTimeout(() => {
      revealTargets.forEach((item) => item.classList.add('is-visible'))
    }, 1200)

    return () => {
      window.clearTimeout(fallbackRevealTimer)
      observer.disconnect()
    }
  }, [location.pathname, location.search])

  return (
    <div className="bakery-page-wrap">
      <PublicHeader />
      <main className="bakery-main">
        <Outlet />
      </main>
      <Link
        className="fixed bottom-4 right-4 z-40 rounded-full bg-gradient-to-br from-[#ff5252] to-[#b96d34] px-5 py-3 text-sm font-extrabold text-[#fff9f2] no-underline shadow-[0_14px_28px_rgba(90,52,18,0.2)] transition hover:-translate-y-0.5"
        to="/custom-cake"
      >
        Order Now
      </Link>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
