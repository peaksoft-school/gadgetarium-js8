/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'
import { UserRoles } from '../../../utils/common/types'
import { STORAGE_KEYS } from '../../../utils/constants/storage'
import { signIn, signOut, signUp } from './auth.thunk'

// const initialState = {
//   token:
//     'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhemltYmVrMUBnbWFpbC5jb20iLCJpYXQiOjE2ODMxOTYyNzIsImV4cCI6MTY4MzM0MDI3Mn0.P7PoayHDNz-vS7jkTqNWQ8mKbynjre9CoduDldD6o1E'
// }

interface AuthState {
  isAuthorized: boolean
  isLoading?: boolean
  token: string
  role: string
  email: string
  error?: undefined | string
}

const getInitialState = () => {
  const jsonData = localStorage.getItem(STORAGE_KEYS.AUTH)
  if (jsonData) {
    const userData = JSON.parse(jsonData) as Omit<AuthState, 'isAuthorized'>
    return {
      isAuthorized: true,
      token: userData.token,
      email: userData.email,
      role: userData.role
    }
  }
  return {
    isAuthorized: false,
    isLoading: false,
    token: '',
    email: '',
    role: '',
    error: ''
  }
}

const initialState: AuthState = getInitialState()

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isAuthorized = true
      state.token = payload.token
      state.email = payload.email
      state.role = payload.role
    }),
      builder.addCase(signIn.fulfilled, (state, { payload }) => {
        state.isAuthorized = true
        state.token = payload.token
        state.email = payload.email
        state.role = payload.role
      }),
      builder.addCase(signOut.fulfilled, (state) => {
        state.isAuthorized = false
        state.token = ''
        state.email = ''
        state.role = UserRoles.USER
      }),
      builder.addCase(signIn.rejected, (state, { payload }) => {
        state.isAuthorized = false
        state.error = payload as string | undefined
      }),
      builder.addCase(signUp.rejected, (state, { payload }) => {
        state.isAuthorized = false
        state.error = payload as string | undefined
      })
  }
})
export const authActions = authSlice.actions
