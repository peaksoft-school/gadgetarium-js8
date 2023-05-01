import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { STORAGE_KEYS } from '../../../utils/constants/storage'
import { SignUpUser } from '../../../utils/common/types'
import { signInRequest, signUpRequest } from '../../../api/authService'

export const signOut = createAsyncThunk('auth/signOut', async () => {
  return localStorage.removeItem(STORAGE_KEYS.AUTH)
})

type UserType = {
  email: string
  password: string
}

export const signIn = createAsyncThunk(
  'auth/signin',
  async (payload: UserType, { rejectWithValue }) => {
    try {
      const { data } = await signInRequest(payload)
      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
      return data
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ httpStatus: string; message: string }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)

// type UserType = UserType & name: string
export const signUp = createAsyncThunk(
  'auth/signup',
  async (payload: SignUpUser, { rejectWithValue }) => {
    try {
      const { data } = await signUpRequest(payload)
      const userData = data.data

      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))

      return userData
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ httpStatus: string; message: string }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
