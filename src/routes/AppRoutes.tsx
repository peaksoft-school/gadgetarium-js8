import { Routes, Route } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import AdminRoutes from './admin/AdminRoutes'
import ProtectedRoute from './private/ProtectedRoute'

export const roles = {
  user: 'User',
  admin: 'Admin'
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainRoutes />} />
      <Route
        path="/admin/*"
        element={<ProtectedRoute isAllowed={[roles.admin]} component={AdminRoutes} />}
      />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  )
}

export default AppRoutes
