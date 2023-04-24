import AdminLayout from '../../layout/admin/AdminLayout'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <div>
      <AdminLayout>
        <Routes>
          <Route path="" element={<Navigate to="products" />} />

          <Route path="products/*" element={<Outlet />}>
            <Route index element={<p>ProductsPage</p>} />
            <Route path="addproducts/*" element={<p>AddProductsPage</p>} />
            <Route path=":productId" element={<p>ProductInnerPage</p>} />
            <Route path="*" element={<p>Not Found</p>} />
          </Route>

          <Route path="orders/*" element={<Outlet />}>
            <Route index element={<p>OrdersPage</p>} />
            <Route path=":orderId" element={<p>OrderInfoPage</p>} />
            <Route path="*" element={<p>Not Found</p>} />
          </Route>

          <Route path="reviews" element={<p>ReviewsPage</p>} />
        </Routes>
      </AdminLayout>
    </div>
  )
}

export default AdminRoutes
