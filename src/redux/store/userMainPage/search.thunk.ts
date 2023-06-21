import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProductService } from '../../../api/mainPage/getProductsService'
import { AxiosError, isAxiosError } from 'axios'

export const getSearch = createAsyncThunk(
  'search/getSearch',
  async (params: { keyword: null | string | number }, { rejectWithValue }) => {
    try {
      const response = await getAllProductService(params)
      return response
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
