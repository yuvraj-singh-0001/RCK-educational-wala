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
      <Link className="floating-order-btn" to="/custom-cake">
        Order Now
      </Link>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
