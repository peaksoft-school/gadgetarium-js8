import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { getCountCompareRequest } from '../../../../api/compare-products/countCompareService'

export const getCountCompare = createAsyncThunk(
  'countCompare/getCountCompare',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCountCompareRequest()
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
  }
)
