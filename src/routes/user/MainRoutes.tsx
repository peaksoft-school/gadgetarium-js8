import { Routes, Route, Outlet } from 'react-router-dom'
import ProtectedRoute from '../private/ProtectedRoute'
import Delivery from '../../layout/user/delivery/Delivery'
import MainLayout from '../../layout/user/main/MainLayout'
import FrequentlyAskedQuestions from '../../layout/user/FAQ/FrequentlyAskedQuestions'
import Contackts from '../../layout/user/contacts/Contackt'
import { PATHS } from '../../utils/constants/router/routerConsts'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { UserRoles } from '../../utils/common/types'
import MainPage from '../../layout/user/main/MainPage'
import BasketPage from '../../components/user/basket/BasketPage'
import AboutStore from '../../layout/user/about/AboutStore'
import { FavouritesPage } from '../../components/user/favourites/FavouritesPage'
import ComparisonPage from '../../containers/user/comparison-page/ComparisonPage'

const MainRoutes = () => {
  const role = useSelector((state: RootState) => state.auth.role)

  const isAuthenticated = (roles: UserRoles) => {
    return roles.includes(role)
  }
  return (
    <MainLayout>
      <Routes>
        <Route path={PATHS.MAIN.default} Component={MainPage} />
        <Route path={PATHS.MAIN.catalog} element={<Outlet />}>
          <Route index element={<p>CatalogPage</p>} />
          <Route path={PATHS.MAIN.productId} element={<p>ProductInnerPage</p>} />
        </Route>
        <Route path={PATHS.MAIN.comparison} element={<ComparisonPage />} />
        <Route path={PATHS.MAIN.favourites} element={<p>FavouritesPage</p>} />

        <Route path={PATHS.MAIN.favourites} element={<Outlet />}>
          <Route index element={<FavouritesPage />} />
          <Route path={PATHS.MAIN.ordering} element={<p>OrderingPage</p>} />
        </Route>
        <Route path={PATHS.MAIN.basket} element={<BasketPage />} />
        <Route
          path={PATHS.MAIN.user}
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated(UserRoles.USER)}
              component={() => <p>UserPage</p>}
            />
          }
        />

        <Route path={PATHS.MAIN.about} Component={AboutStore} />
        <Route path={PATHS.MAIN.delivery} Component={Delivery} />
        <Route path={PATHS.MAIN.faq} Component={FrequentlyAskedQuestions} />
        <Route path={PATHS.MAIN.contacts} Component={Contackts} />
      </Routes>
    </MainLayout>
  )
}

export default MainRoutes
