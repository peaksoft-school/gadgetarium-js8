import { ThemeProvider } from '@mui/material'
import { appTheme } from './utils/constants/theme'
import ImageGallery from './components/banners/Banner'

const AppContent = () => {
  return (
    <div>
      <ImageGallery />
    </div>
  )
}
const App = () => {
  return (
    <div>
      <ThemeProvider theme={appTheme}>
        <AppContent />
      </ThemeProvider>
    </div>
  )
}
export default App
