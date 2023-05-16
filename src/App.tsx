import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './utils/constants/theme/theme'
import { store } from './redux/store'
import { useState } from 'react'
import Banner from './components/admin/UI/banners/Banner'
const AppContent = () => {
  const [state, setState] = useState(false)
  const render = () => {
    setState((prevState) => !prevState)
  }
  return (
    <div>
      <Banner isOpen={state} onClose={render} />
      <button onClick={render}>click me</button>
      {/* <AppRoutes /> */}
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={appTheme}>
            <AppContent />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
export default App
