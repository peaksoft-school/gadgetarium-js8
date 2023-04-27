import { Navigate } from 'react-router-dom'
import React from 'react'

type ProtectedRouteProps = {
  component: React.FC
  roles: string
}

const ProtectedRoute = ({ component: Component, roles }: ProtectedRouteProps) => {
  const role = 'asdas'
  const isAuthenticated = role ? roles.includes(role) : null
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return <Component />
}

export default ProtectedRoute
