import { ThemeProvider } from '@mui/material/styles'
import FrequentlyAskedQuestions from './layout/user/FrequentlyAskedQuestions'
import { appTheme } from './utils/constants/theme'

const AppContent = () => {
  return (
    <div>
      <FrequentlyAskedQuestions />
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
