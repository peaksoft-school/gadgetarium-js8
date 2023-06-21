import { createSlice } from '@reduxjs/toolkit'
import { getSearch } from './search.thunk'

const initialState = {
  data: {
    products: {
      productCardResponses: [
        {
          colour: 'dark purple',
          discount: 5,
          fullname: '',
          image: '',
          isLiked: null,
          isNew: false,
          new_price: 128241,
          price: 134990,
          quantity: 0,
          rating: 0,
          reviews_count: 0,
          sub_product_id: 1
        }
      ],
      sizeOfProducts: 0
    }
  }
}
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.data.products.productCardResponses = action.payload.data
    })
  }
})
export const searchSliceAction = searchSlice.actions
export default searchSlice
