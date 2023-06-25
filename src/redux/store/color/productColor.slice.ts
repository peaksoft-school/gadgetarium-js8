import { createSlice } from '@reduxjs/toolkit'
import { ProductColor } from '../../../api/color/productColorService'
import { getAllProductsColors } from './productColor.thunk'

type ProductsColorState = {
  colors: ProductColor
}

const initialState: ProductsColorState = {
  colors: {
    hexCode: '#FFFFFF',
    colorName: 'white'
  }
}

export const productsColorSlice = createSlice({
  name: 'productsColor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsColors.fulfilled, (state, { payload }) => {
      state.colors = payload as unknown as ProductColor
    })
  }
})
