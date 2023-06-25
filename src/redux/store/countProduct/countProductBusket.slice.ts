import { createSlice } from '@reduxjs/toolkit'

export const quantityBusketSlice = createSlice({
  name: 'quantityBusket',
  initialState: {
    quantityBasket: 0
  },
  reducers: {
    incrementQuantityBusket: (state) => {
      state.quantityBasket += 1
    }
  }
})

export const { incrementQuantityBusket } = quantityBusketSlice.actions

export default quantityBusketSlice.reducer
