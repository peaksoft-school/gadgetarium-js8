import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './utils/constants/theme/theme'
import { store } from './redux/store'
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
