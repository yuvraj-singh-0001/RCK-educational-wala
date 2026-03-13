import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import StudentDashboardPage from '../modules/Students/StudentDashboardPage'
import StudentCoursesPage from '../modules/Students/StudentCoursesPage'
import AboutPage from '../pages/AboutPage'
import AdmissionPage from '../pages/AdmissionPage'
import ContactPage from '../pages/ContactPage'
import CoursesPage from '../pages/CoursesPage'
import HomePage from '../pages/HomePage'
import PublicLayout from '../pages/PublicLayout'
import ResultsPage from '../pages/ResultsPage'
import ProtectedRouter from '../protected/protectedRouter'

function AppRouter() {
	return (
		<BrowserRouter basename="/education-demo">
			<Routes>
				<Route element={<PublicLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/courses" element={<CoursesPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/results" element={<ResultsPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/admission" element={<AdmissionPage />} />
				</Route>

				<Route path="/student" element={<ProtectedRouter />}>
					<Route index element={<StudentDashboardPage />} />
					<Route path="courses" element={<StudentCoursesPage />} />
				</Route>

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
