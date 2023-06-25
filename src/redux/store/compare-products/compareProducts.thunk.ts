import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  QueryType,
  deleteCompareProductRequest,
  getCompareProducts
} from '../../../api/compare-products/compareProductsService'
import { AxiosError, isAxiosError } from 'axios'

export const getAllCompareProducts = createAsyncThunk(
  'compareProducts/getCompareProducts',
  async (queryParams: QueryType, { rejectWithValue }) => {
    try {
      const { data } = await getCompareProducts(queryParams)
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

export const deleteCompareProducts = createAsyncThunk(
  'compareroducts/deleteCompareProduct',
  async (queryParams: QueryType, { dispatch, rejectWithValue }) => {
    try {
      await deleteCompareProductRequest()
      // eslint-disable-next-line @typescript-eslint/return-await
      return dispatch(getAllCompareProducts(queryParams))
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
