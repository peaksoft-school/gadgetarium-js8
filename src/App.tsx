import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const AppContent = () => {
  return <div></div>
}
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </Provider>
    </div>
  )
}
export default App
