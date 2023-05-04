import axios from 'axios'
import { store } from '../redux/store'

const BASE_URL = 'http://ec2-52-28-80-102.eu-central-1.compute.amazonaws.com/'

export const mainApi = axios.create({
  baseURL: BASE_URL
})

mainApi.interceptors.request.use(
  function (config) {
    const newConfig = { ...config }
    const token = store.getState().auth.token
    if (token) {
      newConfig.headers.Authorization = `Bearer${token}`
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
      throw new Error('401 unauthorized')
    }
    return Promise.reject(error)
  }
)
