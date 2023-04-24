import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from './utils/constants/theme'
import AppRoutes from './routes/AppRoutes'

const AppContent = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  )
}

function App() {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
