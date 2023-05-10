import { createAsyncThunk } from '@reduxjs/toolkit'
import infographicsService from '../../../api/infographics/infographicsService'
import { AxiosError, isAxiosError } from 'axios'

export const getInfographics = createAsyncThunk(
  'infographics/getInfographics',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await infographicsService.getInfographicsRequest()
      return data
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
