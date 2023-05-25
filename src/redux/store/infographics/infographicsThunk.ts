import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { getInfographicsRequest } from '../../../api/infographics/infographicsService'

export const getInfographics = createAsyncThunk(
  'infographics/getInfographics',
  async (payload: string | 'day', { rejectWithValue }) => {
    try {
      const { data } = await getInfographicsRequest(payload)
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
