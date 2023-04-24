import { Navigate } from 'react-router-dom'
import React from 'react'
import { roles } from '../AppRoutes'

type ProtectedRouteProps = {
  component: React.FC
  isAllowed: string[]
}

const ProtectedRoute = ({ component: Component, isAllowed }: ProtectedRouteProps) => {
  if (!!isAllowed.includes(roles.admin)) {
    return <Navigate to="/" replace />
  }
  return <Component />
}

export default ProtectedRoute
