import { useEffect, useMemo, useState } from 'react'
import BakeryDemoApp from '../bakery-demo/src/App'
import EducationDemoApp from '../education-demo/src/App'

const demoOptions = [
  { key: 'education', slug: 'education-demo', label: 'Education Demo', status: 'live' },
  { key: 'ecommerce', slug: 'ecommerce-demo', label: 'E-commerce Demo', status: 'coming-soon' },
  {
    key: 'recruitment',
    slug: 'recruitment-demo',
    label: 'Recruitment Demo',
    status: 'coming-soon',
  },
  { key: 'bakery', slug: 'bakery-demo', label: 'Bakery Demo', status: 'live' },
]

function getPathname() {
  if (typeof window === 'undefined') {
    return '/'
  }
  return window.location.pathname || '/'
}

function normalizePath(pathname) {
  if (!pathname) {
    return '/'
  }
  const withoutTrailingSlash = pathname.replace(/\/+$/, '')
  return withoutTrailingSlash || '/'
}

function getSelectedOptionFromPath(pathname) {
  const normalized = normalizePath(pathname)

  if (normalized === '/') {
    return null
  }

  const segments = normalized.split('/').filter(Boolean)
  const topSegment = segments[0] || ''

  return demoOptions.find((option) => option.slug === topSegment) || null
}

function navigateTo(pathname) {
  const normalized = normalizePath(pathname)
  if (window.location.pathname === normalized) {
    return
  }
  window.history.pushState({}, '', normalized)
  window.dispatchEvent(new Event('popstate'))
}

function DemoLanding({ onSelect }) {
  return (
    <div className="switcher-page">
      <div className="switcher-orb switcher-orb-left" aria-hidden="true" />
      <div className="switcher-orb switcher-orb-right" aria-hidden="true" />

      <main className="switcher-panel">
        <p className="switcher-kicker">RCK Demo Switcher</p>
        <h1 className="switcher-title">Choose Website Type</h1>
        <p className="switcher-subtitle">
          Click on any demo to preview the website and decide what you want to order.
        </p>

        <div className="switcher-grid" role="group" aria-label="Website demo selection">
          {demoOptions.map((option) => (
            <button
              key={option.key}
              className="switcher-option"
              onClick={() => onSelect(option.slug)}
            >
              <span>{option.label}</span>
              <small>{option.status === 'live' ? 'Live Preview' : 'Coming Soon'}</small>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}

function ComingSoonDemo({ option, onBack }) {
  return (
    <div className="coming-page">
      <main className="coming-panel">
        <p className="coming-kicker">{option.label}</p>
        <h2 className="coming-title">Coming Soon</h2>
        <p className="coming-copy">
          This demo will be available shortly. You can still contact us to book your project.
        </p>

        <div className="coming-actions">
          <a href="tel:+919999999999">Call to Book</a>
          <a href="mailto:rck.demo@example.com">Contact by Email</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            Order on WhatsApp
          </a>
        </div>

        <button className="back-btn" onClick={onBack}>
          Back to Demo Switcher
        </button>
      </main>
    </div>
  )
}

function App() {
  const [pathname, setPathname] = useState(getPathname)

  useEffect(() => {
    const syncPathname = () => setPathname(getPathname())
    window.addEventListener('popstate', syncPathname)
    return () => window.removeEventListener('popstate', syncPathname)
  }, [])

  const selectedOption = useMemo(
    () => getSelectedOptionFromPath(pathname),
    [pathname],
  )

  if (!selectedOption) {
    return <DemoLanding onSelect={(slug) => navigateTo(`/${slug}`)} />
  }

  if (selectedOption.key === 'education') {
    return <EducationDemoApp />
  }

  if (selectedOption.key === 'bakery') {
    return <BakeryDemoApp />
  }

  return <ComingSoonDemo option={selectedOption} onBack={() => navigateTo('/')} />
}

export default App
