import { UserRoles } from '../utils/common/types'
import { mainApi } from './instances'

type SignInResponse = {
  token: string
  email: string
  role: UserRoles
}

export const signUpRequest = (data: {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
}) => {
  return mainApi.post('api/auth/sign-up', data)
}

export const signInRequest = (data: { email: string; password: string }) => {
  return mainApi.post<SignInResponse>('api/auth/sign-in', data)
}
