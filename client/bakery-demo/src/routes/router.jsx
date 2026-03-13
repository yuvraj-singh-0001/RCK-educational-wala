import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import StudentDashboardPage from '../modules/Students/StudentDashboardPage'
import StudentCoursesPage from '../modules/Students/StudentCoursesPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CustomCakePage from '../pages/CustomCakePage'
import GalleryPage from '../pages/GalleryPage'
import HomePage from '../pages/HomePage'
import MenuPage from '../pages/MenuPage'
import PublicLayout from '../pages/PublicLayout'
import ProtectedRouter from '../protected/protectedRouter'

function AppRouter() {
  return (
    <BrowserRouter basename="/bakery-demo">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
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
    </BrowserRouter>
  )
}

export default AppRouter
