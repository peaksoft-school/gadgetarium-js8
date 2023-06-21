import axios from 'axios'
import { store } from '../redux/store'
import { signOut } from '../redux/store/auth/auth.thunk'

const BASE_URL = 'http://gadgetarium.peaksoftprojects.com/'

export const mainApi = axios.create({
  baseURL: BASE_URL
})

mainApi.interceptors.request.use(
  function (config) {
    const newConfig = { ...config }
    const { token } = store.getState().auth
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`
    }
    return newConfig
  },
  function (error) {
    return Promise.reject(error)
  }
)

mainApi.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(signOut())
      throw new Error('401 unauthorized')
    }
    return Promise.reject(error)
  }
)
