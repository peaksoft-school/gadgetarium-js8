import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './utils/constants/theme/theme'
import ProductInnerPage from './containers/admin/product-inner-page/ProductInnerPage'

const AppContent = () => {
  return (
    <div>
      <AppRoutes />
      <ProductInnerPage />
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={appTheme}>
            <AppContent />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
export default App
