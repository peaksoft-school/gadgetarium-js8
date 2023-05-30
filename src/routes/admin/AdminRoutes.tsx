import AdminLayout from '../../layout/admin/AdminLayout'
import { Routes, Route, Outlet } from 'react-router-dom'
import { PATHS } from '../../utils/constants/router/routerConsts'
import ProductsPage from '../../containers/admin/products/ProductsPage'
import ReviewsPage from '../../components/admin/reviews/ReviewsPage'

const AdminRoutes = () => {
  return (
    <div>
      <AdminLayout>
        <Routes>
          <Route path={PATHS.ADMIN.default} element={<p>Admin</p>} />

          <Route path={PATHS.ADMIN.products} element={<Outlet />}>
            <Route index element={<ProductsPage />} />
            <Route path={PATHS.ADMIN.addProducts} element={<p>AddProductsPage</p>} />
            <Route path={PATHS.ADMIN.productId} element={<p>ProductInnerPage</p>} />
            <Route path={PATHS.ADMIN.not_found} element={<p>Not Found</p>} />
          </Route>

          <Route path={PATHS.ADMIN.orders} element={<Outlet />}>
            <Route index element={<p>OrdersPage</p>} />
            <Route path={PATHS.ADMIN.orderId} element={<p>OrderInfoPage</p>} />
            <Route path={PATHS.ADMIN.orderId} element={<p>Not Found</p>} />
          </Route>

          <Route path={PATHS.ADMIN.reviews} element={<ReviewsPage />} />
        </Routes>
      </AdminLayout>
    </div>
  )
}

export default AdminRoutes
