import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import {
  ProductQueryParams,
  deleteProductByIdRequest,
  deleteProductByIdRequest2,
  getAllProductsRequest
} from '../../../api/product/productService'

export const getAllProducts = createAsyncThunk(
  'products/getProducts',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (queryParams: ProductQueryParams, { rejectWithValue }) => {
    try {
      const { data } = await getAllProductsRequest(queryParams)
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

const queryParams: ProductQueryParams = {
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
  async (ids: number[], { dispatch, rejectWithValue }) => {
    try {
      await deleteProductByIdRequest(ids)
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

export const deleteProductById2 = createAsyncThunk(
  'products/deleteProduct',
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      await deleteProductByIdRequest2(id)
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
