import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getDiscountProductService,
  getNewProductService,
  getRecommendedProductService
} from '../../../api/mainPage/getProductsService'
import { AxiosError, isAxiosError } from 'axios'
import { getBannerImagesService } from '../../../api/mainPage/getBannerService'

export const getDiscountProduct = createAsyncThunk(
  'discountProduct/getDiscountProduct',
  async (showAllProduct: number, { rejectWithValue }) => {
    try {
      const { data } = await getDiscountProductService(showAllProduct)
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
export const getNewProduct = createAsyncThunk(
  'newProduct/getNewProduct',
  async (showAllProduct: number, { rejectWithValue }) => {
    try {
      const { data } = await getNewProductService(showAllProduct)
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

export const getRecommendedProduct = createAsyncThunk(
  'recommendedProduct/getRecommendedProduct',
  async (showAllProduct: number, { rejectWithValue }) => {
    try {
      const { data } = await getRecommendedProductService(showAllProduct)
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

export const getBunnerImg = createAsyncThunk(
  'bunnerImg/getBunnerImg',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBannerImagesService()
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
