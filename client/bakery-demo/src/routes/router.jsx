import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
const StudentDashboardPage = lazy(() => import('../modules/Students/StudentDashboardPage'))
const StudentCoursesPage = lazy(() => import('../modules/Students/StudentCoursesPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const MenuPage = lazy(() => import('../pages/MenuPage'))
const InfoPage = lazy(() => import('../pages/InfoPage'))
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'))
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import CustomCakePage from '../pages/CustomCakePage'
import GalleryPage from '../pages/GalleryPage'
import ContactPage from '../pages/ContactPage'
import CheckoutPage from '../pages/CheckoutPage'
import OrderConfirmationPage from '../pages/OrderConfirmationPage'
import TrackOrderPage from '../pages/TrackOrderPage'
import PublicLayout from '../pages/PublicLayout'
import ProtectedRouter from '../protected/protectedRouter'

function AppRouter() {
  return (
    <BrowserRouter basename="/bakery-demo">
      <Suspense
        fallback={
          <div className="bakery-page-wrap">
            <div className="bakery-main" style={{ paddingTop: '1.5rem' }}>
              <div className="bakery-section">Loading...</div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/track-order" element={<TrackOrderPage />} />
            <Route path="/custom-cake" element={<CustomCakePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/info/:page" element={<InfoPage />} />
          </Route>

          <Route path="/staff" element={<ProtectedRouter />}>
            <Route index element={<StudentDashboardPage />} />
            <Route path="orders" element={<StudentCoursesPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
