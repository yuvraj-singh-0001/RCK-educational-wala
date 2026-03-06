import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import StudentDashboardPage from '../modules/Students/StudentDashboardPage'
import StudentCoursesPage from '../modules/Students/StudentCoursesPage'
import HomePage from '../pages/HomePage'
import PublicLayout from '../pages/PublicLayout'
import ProtectedRouter from '../protected/protectedRouter'

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/courses" element={<Navigate to="/#courses" replace />} />
					<Route path="/contact" element={<Navigate to="/#contact" replace />} />
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
