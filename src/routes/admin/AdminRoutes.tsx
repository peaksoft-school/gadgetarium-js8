import AdminLayout from '../../layout/admin/AdminLayout'
import { Routes, Route, Outlet } from 'react-router-dom'
import { PATHS } from '../../utils/constants/router/routerConsts'
import ProductInnerPage from '../../containers/admin/product-inner-page/ProductInnerPage'
import ProductsPage from '../../containers/admin/products/ProductsPage'
import AddProductsPage from '../../layout/admin/addProduct/CreateAddProduct'
import ReviewsPage from '../../components/admin/reviews/ReviewsPage'

const AdminRoutes = () => {
  return (
    <div>
      <AdminLayout>
        <Outlet />
        <Routes>
          <Route path={PATHS.ADMIN.products} element={<Outlet />}>
            <Route index element={<ProductsPage />} />
            <Route path={PATHS.ADMIN.productId} element={<ProductInnerPage />} />
            <Route path={PATHS.ADMIN.addProducts} Component={AddProductsPage} />
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
