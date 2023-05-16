import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './utils/constants/theme/theme'

const AppContent = () => {
  return (
    <div>
      <AppRoutes />
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
