import { createSlice } from '@reduxjs/toolkit'
import { DiscountProduct } from '../../../components/user/mainPage/MenuProduct'
import { getDiscountProduct, getNewProduct, getRecommendedProduct } from './getProduct.thunk'

const initialState: {
  discount: DiscountProduct
  newProduct: DiscountProduct
  recommendProduct: DiscountProduct
} = {
  discount: [],
  newProduct: [],
  recommendProduct: []
}

export const getProductSlice = createSlice({
  name: 'getProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiscountProduct.fulfilled, (state, action) => {
      state.discount = action.payload.elements
    })
    builder.addCase(getNewProduct.fulfilled, (state, action) => {
      state.newProduct = action.payload.elements
    })
    builder.addCase(getRecommendedProduct.fulfilled, (state, action) => {
      state.recommendProduct = action.payload.elements
    })
  }
})
