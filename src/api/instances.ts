import axios from 'axios'

const BASE_URL = 'ec2-3-65-60-65.eu-central-1.compute.amazonaws.com'

export const mainApi = axios.create({
  baseURL: BASE_URL
})

// mainApi.interceptors.request.use(
//   function (config) {
//     const updatedConfiguration = { ...config }
//     const token = store.getState().auth.token
//     if (token) {
//       updatedConfiguration.headers.Authorization = `Bearer${token}`
//     }
//     return updatedConfiguration
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )

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
