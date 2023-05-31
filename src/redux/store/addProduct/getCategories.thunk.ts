import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProductBrandAndSubCategorieService, postBrand } from '../../../api/addProductService'
import { AxiosError, isAxiosError } from 'axios'
import { PostBrandType } from '../../../utils/constants/types'

export const getProductBrandAndSubCategories = createAsyncThunk(
  'categories/getCategories',
  async (id: string | number, { rejectWithValue }) => {
    try {
      const data = await getProductBrandAndSubCategorieService(id)
      return data.data
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ httpStatus: string; message: string }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)

export const addNewBrands = createAsyncThunk(
  'addbrands/postbrand',
  async (values: PostBrandType, { rejectWithValue }) => {
    try {
      const { data } = await postBrand(values)
      return data.data
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ httpStatus: string; message: string }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
