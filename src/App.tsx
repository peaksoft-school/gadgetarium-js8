import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './utils/constants/theme/theme'
import { store } from './redux/store'
import AppRoutes from './routes/AppRoutes'
import Snackbar from './components/UI/snackbar/Snackbar'
import { useSnackbar } from './hooks/snackbar/useSnackbar'

const AppContent = () => {
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })
  return (
    <div>
      {ToastContainer}
      <AppRoutes />
      <Snackbar />
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
