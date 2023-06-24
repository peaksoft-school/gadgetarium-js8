import { createSlice } from '@reduxjs/toolkit'

export const quantityComparisonSlice = createSlice({
  name: 'quantityComparison',
  initialState: {
    quantityComparison: 0
  },
  reducers: {
    incrementQuantityComparison: (state) => {
      state.quantityComparison += 1
    }
  }
})

export const { incrementQuantityComparison } = quantityComparisonSlice.actions

export default quantityComparisonSlice.reducer
