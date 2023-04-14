import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from './utils/constants/theme'
import { useSnackbar } from './hooks/useSnackbar'

const AppContent = () => {
  const { snackbarHanler, toast } = useSnackbar({})
  return (
    <div>
      <button onClick={() => snackbarHanler()}>click me </button>
      {toast}
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
