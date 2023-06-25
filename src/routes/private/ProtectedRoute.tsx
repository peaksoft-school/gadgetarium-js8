import { Navigate } from 'react-router-dom'
import React from 'react'

type ProtectedRouteProps = {
  component: React.FC
  isAuthenticated: boolean
  fallback?: string
}

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  fallback = '/login'
}: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={fallback} replace />
  }
  return <Component />
}

export default ProtectedRoute
