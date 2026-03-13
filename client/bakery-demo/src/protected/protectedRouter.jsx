import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter() {
  const isAllowed = true

  if (!isAllowed) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default ProtectedRouter
