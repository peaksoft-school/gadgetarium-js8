import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL = 'http://gadgetarium.peaksoftprojects.com'

export const mainApi = axios.create({
  baseURL: BASE_URL
})

mainApi.interceptors.request.use(
  function (config) {
    const token = store.getState().auth.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

mainApi.interceptors.request.use(
  function (config) {
    const newConfig = { ...config }
    // const token: string = store.getState().auth.token
    // if (token) {
    //   newConfig.headers.Authorization = `Bearer ${token}`
    // }
    return newConfig
  },
  function (error) {
    return Promise.reject(error)
  }
)

export const fileInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

fileInstance.interceptors.request.use(
  function (config) {
    const { token } = store.getState().auth
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },

  function (error) {
    return Promise.reject(error)
  }
)
fileInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('401 unauthorized')
    }
    return Promise.reject(error)
  }
)
