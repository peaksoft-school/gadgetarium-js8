import { createSlice } from '@reduxjs/toolkit'
import { getFavourite } from './favourites.thunk'
export type FavouriteType = {
  countOfReviews: number
  createdAt: string
  discount: number
  image: string
  price: number
  productInfo: string
  quantity: number
  rating: number
  subProductId: number
  newPrice: number
  quantityBasket: number
  inComparisons: boolean
  inFavorites: boolean
}

type ItemsFavouriteType = FavouriteType[]
type InitType = {
  items: ItemsFavouriteType
  isLoading: boolean
  totalQuantity: number
}
const initialState: InitType = {
  items: [],
  isLoading: false,
  totalQuantity: 0
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    favourite(state, { payload }) {
      state.items.map((item) => {
        if (item.subProductId === payload.id) {
          return (item.inFavorites = !item.inFavorites)
        }
      })
    },
    addCount(state, { payload }) {
      state.totalQuantity = payload
    }
  },

  extraReducers(builder) {
    builder.addCase(getFavourite.fulfilled, (state, { payload }) => {
      payload?.updatedData.map((item: FavouriteType) => {
        if (item.discount > 0) {
          item.newPrice = (item.price * (100 - item.discount)) / 100
        } else {
          item.newPrice = 0
        }
      })
      state.items = payload?.updatedData
      state.isLoading = false
    })
    builder.addCase(getFavourite.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const favouriteActions = favouritesSlice.actions
