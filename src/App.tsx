import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from './utils/constants/theme'
import SignIn from './layout/signin-signup/SignIn'

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
