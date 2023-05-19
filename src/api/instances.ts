import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL = 'http://ec2-18-195-167-42.eu-central-1.compute.amazonaws.com'

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
