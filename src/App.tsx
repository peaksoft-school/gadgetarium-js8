import { ThemeProvider } from '@mui/material/styles'
import Categories from './components/UI/Categories'
import { appTheme } from './utils/constants/theme'

const AppContent = () => {
  return (
    <div>
      <Categories />
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
