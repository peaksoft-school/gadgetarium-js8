import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from './utils/constants/theme'

const AppContent = () => {
  return <div></div>
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
