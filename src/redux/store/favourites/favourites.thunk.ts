import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  deleteFavouritesRequest,
  getFavouritesRequest,
  postFavouritesRequest,
  postToComparisonRequest
} from '../../../api/favourites/favouritesService'
import { AxiosError, isAxiosError } from 'axios'
import { FavouriteType } from './favourites.slice'
import { postBasketRequest } from '../../../api/basket/basketService'
import { SnackbarHandler } from '../basket/basket.thunk'

export const getFavourite = createAsyncThunk(
  'favourite/getFavourite',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getFavouritesRequest()
      if (data !== undefined || null) {
        const updatedData = data.map((item: FavouriteType) => ({
          ...item,
          newPrice: 0,
          isFavourite: true,
          quantityBasket: 0
        }))
        return { updatedData, totalQuantity: 0 }
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
export const postOrDeleteFavourites = createAsyncThunk(
  'favourite/postFavourites',
  async (
    payload: { id: number; isFavourite: boolean; snackbar: SnackbarHandler },
    { dispatch, rejectWithValue }
  ) => {
    try {
      await postFavouritesRequest(payload)
      dispatch(getFavourite())
        .unwrap()
        .then(() => {
          payload.snackbar('Товар успешно удален из избранного!', 'success')
        })
        .catch((e) => {
          payload.snackbar(e, 'error')
          rejectWithValue(e)
        })
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

export const removeAllFavourites = createAsyncThunk(
  'favourite/removeFavourite',
  async (payload: { snackbar: () => void }, { dispatch, rejectWithValue }) => {
    try {
      await deleteFavouritesRequest()
      dispatch(getFavourite())
      payload.snackbar()
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

export const postToBasketFromFavourite = createAsyncThunk(
  'favourite/postToBasketFromFavourite',
  async (payload: { quantity: number; subproductId: number }, { rejectWithValue }) => {
    try {
      await postBasketRequest(payload)
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

export const postToComporisonsFromFavourite = createAsyncThunk(
  'favourite/postToComparisonsFromFavourite',
  async (payload: { id: number; isCompare: boolean }, { rejectWithValue }) => {
    try {
      await postToComparisonRequest(payload)
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
