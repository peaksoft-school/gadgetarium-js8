import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import {
  deleteBasketByChoosenIdRequest,
  deleteBasketByIdRequest,
  getBasketRequest,
  moveToFavoritesByChoosenIdRequest,
  moveToFavoritesByIdRequest
} from '../../../api/basket/basketService'
import { AxiosError, isAxiosError } from 'axios'
import { ItemType } from './basket.slice'
type SnackbarHandler = (message: string, type: 'error' | 'success' | undefined) => void

export const getAllBasket = createAsyncThunk('basket/getBasket', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getBasketRequest()

    if (data !== undefined || null) {
      const dataItem = data.map((item: ItemType) => ({
        ...item,
        checked: false,
        totalPrice: 0,
        discount: 0
      }))
      return {
        dataItem: dataItem,
        checkedAll: false,
        totalSum: 0,
        totalQuantity: 0,
        totalDiscount: 0,
        sumPrice: 0
      }
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
})

export const deleteBasketById = createAsyncThunk(
  'basket/deleteByIdBasket',
  async (payload: { id: number; snackbar: SnackbarHandler }, { dispatch, rejectWithValue }) => {
    try {
      await deleteBasketByIdRequest(payload.id)
      dispatch(getAllBasket())
        .unwrap()
        .then(() => {
          payload.snackbar('Товар успешно добавлен удален!', 'success')
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
export const moveToFavoritesById = createAsyncThunk(
  'basket/moveToFavoritesById',
  async (payload: { id: number }, { rejectWithValue }) => {
    try {
      await moveToFavoritesByIdRequest(payload.id)
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

export const moveToFavoritesByChoosenId = createAsyncThunk(
  'basket/moveToFavoritesByChoosenId',
  async (payload: { id: number[]; snackbar: SnackbarHandler }, { dispatch, rejectWithValue }) => {
    try {
      await moveToFavoritesByChoosenIdRequest(payload.id)
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

export const deleteBasketByChoosenId = createAsyncThunk(
  'basket/deleteBasketChoosenById',
  async (payload: { id: number[]; snackbar: SnackbarHandler }, { dispatch, rejectWithValue }) => {
    try {
      await deleteBasketByChoosenIdRequest(payload.id)
      dispatch(getAllBasket())
        .unwrap()
        .then(() => {
          payload.snackbar('Товар успешно добавлен удален!', 'success')
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
