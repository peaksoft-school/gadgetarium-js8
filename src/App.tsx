import { BrowserRouter } from 'react-router-dom'
import AdminHeader from './components/admin/AdminHeader'
import ProductsPage from './containers/admin/products/ProductsPage'
import AppRoutes from './routes/AppRoutes'

const AppContent = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  )
}
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <AppContent />
      </div>
    </BrowserRouter>
  )
}
export default App
