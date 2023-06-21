import { createSlice } from '@reduxjs/toolkit'
import { getAllBasket } from '../basket/basket.thunk'

const initialState = {
  isLoading: false
}

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(getAllBasket.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(getAllBasket.pending, (state) => {
      state.isLoading = true
    })
  }
})
export const mainAPageActions = mainPageSlice.actions
