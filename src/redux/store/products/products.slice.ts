import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../../api/product/productService'
import { getAllProducts } from './products.thunk'

type ProductsState = {
  items: Product
}

const initialState: ProductsState = {
  items: {
    foundProducts: 0,
    elements: [
      {
        createdAt: '2023-04-01',
        image:
          'https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Pro-Pro%20Max/1-500x500.jpg',
        itemNumber: 123,
        name: 'Apple IPHONE 12 256GB Blue',
        percentOfDiscount: 20,
        price: 120000,
        quantity: 1,
        productId: 1,
        subProductId: 1,
        totalPrice: 96000
      }
    ],
    currentPage: 0,
    totalPages: 0
  }
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.items = payload as unknown as Product
    })
  }
})
