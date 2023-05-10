import { createAsyncThunk } from '@reduxjs/toolkit'
import productService from '../../../api/product/productService'
import { AxiosError, isAxiosError } from 'axios'

export const getAllProducts = createAsyncThunk(
  'products/getProducts',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (queryParams: any, { rejectWithValue }) => {
    try {
      const { data } = await productService.getAllProductsRequest(queryParams)
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

const queryParams = {
  keyWord: 'keyWord',
  status: 'все продукты',
  page: 1,
  pageSize: 7,
  sortBy: 'sortBy',
  from: null,
  before: null
}

export const deleteProductById = createAsyncThunk(
  'products/deleteProduct',
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      await productService.deleteProductById(id)
      // eslint-disable-next-line @typescript-eslint/return-await
      return dispatch(getAllProducts(queryParams))
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
