import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
const StudentDashboardPage = lazy(() => import('../modules/Students/StudentDashboardPage'))
const StudentCoursesPage = lazy(() => import('../modules/Students/StudentCoursesPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const CartPage = lazy(() => import('../pages/CartPage'))
const CustomCakePage = lazy(() => import('../pages/CustomCakePage'))
const GalleryPage = lazy(() => import('../pages/GalleryPage'))
import HomePage from '../pages/HomePage'
const MenuPage = lazy(() => import('../pages/MenuPage'))
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
            <Route path="/custom-cake" element={<CustomCakePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
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
