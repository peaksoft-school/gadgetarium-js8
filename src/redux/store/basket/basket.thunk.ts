import { createAsyncThunk } from '@reduxjs/toolkit'
import { getBasketRequest } from '../../../api/basket/basketService'
import { AxiosError, isAxiosError } from 'axios'

export const getAllBasket = createAsyncThunk('basket/getBasket', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getBasketRequest()
    if (data !== undefined || null) {
      return data
    }
  } catch (e) {
    if (isAxiosError(e)) {
      const error = e as AxiosError<{
        status: number
        message: string
      }>
      return rejectWithValue(error.response?.data.message)
    }
    return rejectWithValue('Something went wrong')
  }
})
