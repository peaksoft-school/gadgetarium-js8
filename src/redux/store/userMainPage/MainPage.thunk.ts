import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import {
  AddProductToBasketService,
  AddProductToComparisonsService,
  AddProductToFavouritesService
} from '../../../api/mainPage/AddProductToBusketService'
import { getAllBasket } from '../basket/basket.thunk'
import { AxiosError, isAxiosError } from 'axios'
import { getDiscountProduct, getNewProduct, getRecommendedProduct } from './GetProduct.thunk'
export type SnackbarHandler = (message: string, type: 'error' | 'success' | undefined) => void

export const addNewProductToBusket = createAsyncThunk(
  'mainPageToBusket/addNewProductToBusket',
  async (payload: { id: number; snackbar: SnackbarHandler }, { dispatch, rejectWithValue }) => {
    try {
      await AddProductToBasketService(payload.id)

      dispatch(getAllBasket())
        .unwrap()
        .then(() => {
          payload.snackbar('Товар успешно добавлен в избранное!', 'success')
        })
        .catch((e) => {
          isRejectedWithValue(e)
        })
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        payload.snackbar(error.response?.data.message || 'Повторите попытку', 'error')

        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)

export const addNewProductToFavorite = createAsyncThunk(
  'mainPageToFavorite/addNewProductToFavorite',
  async (
    payload: {
      id: number
      isFavorites: boolean
      snackbar: SnackbarHandler
      showAllProduct: number
      showAllNewProduct: number
      showAllRecomendProduct: number
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const dataFavourite = {
        id: payload.id,
        isFavorites: payload.isFavorites
      }
      await AddProductToFavouritesService(dataFavourite)
      if (payload.isFavorites) {
        payload.snackbar('Товар успешно добавлен в избранные !', 'success')
      } else {
        payload.snackbar('Товар успешно удален из сравнение !', 'success')
      }
      dispatch(getNewProduct(payload.showAllNewProduct))
      dispatch(getRecommendedProduct(payload.showAllRecomendProduct))
      dispatch(getDiscountProduct(payload.showAllProduct))
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        payload.snackbar(error.response?.data.message || 'Повторите попытку', 'error')

        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)

export const addNewProductToComparison = createAsyncThunk(
  'mainPageToComparison/addNewProductToComparison',
  async (
    payload: {
      id: number
      isComparisons: boolean
      snackbar: SnackbarHandler
      showAllProduct: number
      showAllNewProduct: number
      showAllRecomendProduct: number
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const dataComparisons = {
        id: payload.id,
        inComparisons: payload.isComparisons
      }
      await AddProductToComparisonsService(dataComparisons)

      if (payload.isComparisons) {
        payload.snackbar('Товар успешно добавлен в сравнение !', 'success')
      } else {
        payload.snackbar('Товар успешно удален из сравнение !', 'success')
      }
      dispatch(getDiscountProduct(payload.showAllProduct))
      dispatch(getRecommendedProduct(payload.showAllRecomendProduct))
      dispatch(getNewProduct(payload.showAllNewProduct))
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        payload.snackbar(error.response?.data.message || 'Повторите попытку', 'error')

        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
