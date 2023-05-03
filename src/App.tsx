import { ThemeProvider } from '@mui/material'
import { appTheme } from './utils/constants/theme'

const AppContent = () => {
  return <div></div>
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
