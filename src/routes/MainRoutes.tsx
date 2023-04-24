import { Routes, Route, Outlet } from 'react-router-dom'
import ProtectedRoute from './private/ProtectedRoute'
import { roles } from './AppRoutes'
import Delivery from '../layout/delivery/Delivery'
import MainLayout from '../layout/main/MainLayout'
import FrequentlyAskedQuestions from '../layout/user/FrequentlyAskedQuestions'
import Contackts from '../layout/contacts/Contackt'

const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<p>MainPage</p>} />
        <Route path="catalog" element={<Outlet />}>
          <Route index element={<p>CatalogPage</p>} />
          <Route path=":productID" element={<p>ProductInnerPage</p>} />
        </Route>
        <Route path="comparison" element={<p>ComparisonPage</p>} />
        <Route path="favourites" element={<p>FavouritesPage</p>} />

        <Route path="basket" element={<Outlet />}>
          <Route index element={<p>BasketPage</p>} />
          <Route path="ordering" element={<p>OrderingPage</p>} />
        </Route>

        <Route
          path="user"
          element={<ProtectedRoute isAllowed={[roles.user]} component={() => <p>UserPage</p>} />}
        />

        <Route path="about" element={<p>AboutPage</p>} />
        <Route path="delivery" Component={Delivery} />
        <Route path="faq" Component={FrequentlyAskedQuestions} />
        <Route path="contacts" Component={Contackts} />
      </Routes>
    </MainLayout>
  )
}

export default MainRoutes
