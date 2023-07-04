import { createSlice } from '@reduxjs/toolkit'
import { getHistoryOrderDetails } from './GetProduct.thunk'
import { DetailsHistoryType } from '../../../utils/common/types'

const initialState: DetailsHistoryType = {
  data: {
    orderNumber: '',
    orderedProducts: [
      {
        subProductId: 0,
        image: '',
        quantity: 0,
        productInfo: '',
        rating: 0,
        countOfReviews: 0,
        price: 0,
        discount: 0,
        createdAt: '',
        inFavorites: true,
        inComparisons: true
      }
    ],
    status: '',
    client: '',
    firstName: '',
    region: '',
    address: '',
    telNumber: '',
    email: '',
    date: '',
    paymentType: '',
    lastName: '',
    city: '',
    discountPrice: 0,
    totalPrice: 0
  }
}

export const historyOrderSlice = createSlice({
  name: 'historyOrder',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.data.orderedProducts.push(payload)
    },
    addSubProduct: (state, action) => {
      state.data.orderedProducts = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getHistoryOrderDetails.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(getHistoryOrderDetails.pending, (state) => {
      //   state.loading = true
    })
  }
})
export const historyOrderSliceActions = historyOrderSlice.actions
//
