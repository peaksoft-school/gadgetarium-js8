import { createSlice } from '@reduxjs/toolkit'
import { CountCompare } from '../../../../api/compare-products/countCompareService'
import { getCountCompare } from './countCompare.thunk'

type CompareProductsState = {
  count: CountCompare
}

const initialState: CompareProductsState = {
  count: {
    countCompare: {
      ['Ноутбук']: 0,
      ['Планшет']: 0,
      ['Смартфон']: 0,
      ['Смарт Часы']: 0
    }
  }
}

export const countCompareSlice = createSlice({
  name: 'countCompare',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountCompare.fulfilled, (state, { payload }) => {
      state.count = payload as unknown as CountCompare
    })
  }
})
