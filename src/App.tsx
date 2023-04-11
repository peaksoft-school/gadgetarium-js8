import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import { appTheme } from './utils/constants/theme'
import Footer from './components/footer/Footer'

const AppContent = () => {
  return (
    <div>
      <Footer />
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
