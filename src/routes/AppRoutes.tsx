import { Routes, Route } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import AdminRoutes from './admin/AdminRoutes'
import ProtectedRoute from './private/ProtectedRoute'
import { PATHS } from '../utils/constants/routerConsts'
import SignIn from '../containers/signin-signup/SignIn'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.APP.logIn} Component={SignIn} />
      <Route path={PATHS.APP.mainRoutes} element={<MainRoutes />} />
      <Route
        path={PATHS.APP.admin}
        element={<ProtectedRoute roles="ADMIN" component={AdminRoutes} />}
      />
      <Route path={PATHS.APP.not_found} element={<p>Not Found</p>} />
    </Routes>
  )
}

export default AppRoutes
