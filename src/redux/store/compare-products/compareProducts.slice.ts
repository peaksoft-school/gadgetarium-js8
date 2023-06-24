import { createSlice } from '@reduxjs/toolkit'
import { CompareProducts } from '../../../api/compare-products/compareProductsService'
import { getAllCompareProducts } from './compareProducts.thunk'

type CompareProductsState = {
  products: CompareProducts[]
}

const initialState: CompareProductsState = {
  products: [
    {
      productId: 0,
      subProductId: 0,
      img: 'string',
      name: 'string',
      description: 'string',
      price: 0,
      brandName: 'string',
      screen: 'string',
      color: 'string',
      operatingSystem: 'string',
      memory: 'string',
      weight: 'string',
      simCard: 'string'
    }
  ]
}

export const compareProductsSlice = createSlice({
  name: 'compareProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCompareProducts.fulfilled, (state, { payload }) => {
      state.products = payload as unknown as CompareProducts[]
    })
  }
})
