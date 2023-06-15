import { Routes, Route, Navigate } from 'react-router-dom'
import MainRoutes from './user/MainRoutes'
import AdminRoutes from './admin/AdminRoutes'
import ProtectedRoute from './private/ProtectedRoute'
import { PATHS } from '../utils/constants/router/routerConsts'
import SignIn from '../containers/signin-signup/SignIn'
import SignUp from '../containers/signin-signup/SignUp'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { UserRoles } from '../utils/common/types'

const AppRoutes = () => {
  const role = useSelector((state: RootState) => state.auth.role)
  const isAuthenticated = (roles: string) => {
    return role === roles
  }

  return (
    <Routes>
      <Route path={PATHS.APP.logIn} element={<SignIn />} />
      <Route path={PATHS.APP.signUp} element={<SignUp />} />
      <Route
        path={PATHS.APP.mainRoutes}
        element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated(UserRoles.USER)}
            component={MainRoutes}
            fallback={isAuthenticated(UserRoles.ADMIN) ? PATHS.APP.admin : '/login'}
          />
        }
      />
      <Route
        path={PATHS.APP.admin}
        element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated(UserRoles.ADMIN)}
            component={AdminRoutes}
          />
        }
      >
        <Route index element={<Navigate to={PATHS.ADMIN.products} />} />
      </Route>
      <Route path={PATHS.APP.not_found} element={<p>Not Found</p>} />
    </Routes>
  )
}

export default AppRoutes
