import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from './utils/constants/theme'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Contackts from './layout/contacts/Contackt'

const AppContent = () => {
  return (
    <div>
      <Header />
      <Contackts />
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
