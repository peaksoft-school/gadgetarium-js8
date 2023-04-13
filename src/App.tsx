import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from './utils/constants/theme'
import AboutStore from './layout/user/AboutStore'

const AppContent = () => {
  return (
    <div>
      <AboutStore />
    </div>
  )
}

function App() {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <AppContent />
      </ThemeProvider>
    </>
  )
}

export default App
