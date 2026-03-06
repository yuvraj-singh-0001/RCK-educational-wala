import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter() {
	// For now all users can access student routes. Toggle with localStorage key later when auth is added.
	const isAllowed = localStorage.getItem('studentAccess') !== 'blocked'

	if (!isAllowed) {
		return <Navigate to="/" replace />
	}

	return <Outlet />
}

export default ProtectedRouter
