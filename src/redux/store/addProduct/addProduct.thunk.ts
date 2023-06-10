import { createAsyncThunk } from '@reduxjs/toolkit'
import { addProductsRequest, uploadFileService } from '../../../api/add-product/addProductService'
import { AxiosError, isAxiosError } from 'axios'
import { AddProducts } from '../../../utils/constants/types'

export const addProducts = createAsyncThunk(
  'products/addProducts',
  async (value: AddProducts, { rejectWithValue }) => {
    try {
      const { data } = await addProductsRequest(value)
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

export const uploadFile = createAsyncThunk(
  'products/addPdfFile',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await uploadFileService(payload)
      if (data.link !== undefined || null) {
        return data.link
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
