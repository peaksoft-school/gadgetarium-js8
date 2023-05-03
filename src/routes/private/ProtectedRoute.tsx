import { Navigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type ProtectedRouteProps = {
  component: React.FC
  roles: string
}

const ProtectedRoute = ({ component: Component, roles }: ProtectedRouteProps) => {
  const role = useSelector((state: RootState) => state.auth.role)

  const isAuthenticated = role ? roles.includes(role) : null
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return <Component />
}

export default ProtectedRoute
