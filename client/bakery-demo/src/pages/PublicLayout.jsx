import { Link, Outlet } from 'react-router-dom'
import PublicFooter from '../components/layout/PublicFooter'
import PublicHeader from '../components/layout/PublicHeader'

function PublicLayout() {
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
