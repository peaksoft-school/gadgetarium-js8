import AdminLayout from '../../layout/admin/AdminLayout'
import { Routes, Route, Outlet } from 'react-router-dom'
import { PATHS } from '../../utils/constants/router/routerConsts'
import ProductInnerPage from '../../containers/admin/product-inner-page/ProductInnerPage'

const AdminRoutes = () => {
  return (
    <div>
      <AdminLayout>
        <Routes>
          <Route path={PATHS.ADMIN.default} element={<p>Admin</p>} />

          <Route path={PATHS.ADMIN.products} element={<Outlet />}>
            <Route index element={<p>ProductsPage</p>} />
            <Route path={PATHS.ADMIN.addProducts} element={<p>AddProductsPage</p>} />
            <Route path={PATHS.ADMIN.productId} element={<ProductInnerPage />} />
            <Route path={PATHS.ADMIN.not_found} element={<p>Not Found</p>} />
          </Route>

          <Route path={PATHS.ADMIN.orders} element={<Outlet />}>
            <Route index element={<p>OrdersPage</p>} />
            <Route path={PATHS.ADMIN.orderId} element={<p>OrderInfoPage</p>} />
            <Route path={PATHS.ADMIN.orderId} element={<p>Not Found</p>} />
          </Route>

          <Route path={PATHS.ADMIN.reviews} element={<p>ReviewsPage</p>} />
        </Routes>
      </AdminLayout>
    </div>
  )
}

export default AdminRoutes
