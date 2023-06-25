import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { getAllProductsColorsRequest } from '../../../api/color/productColorService'

export const getAllProductsColors = createAsyncThunk(
  'productsColor/getProductsColor',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllProductsColorsRequest()
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
