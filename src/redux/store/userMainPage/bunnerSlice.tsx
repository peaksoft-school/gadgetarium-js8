import { createSlice } from '@reduxjs/toolkit'
import { getBunnerImg } from './GetProduct.thunk'
interface Image {
  banner: string
  id: number
}
type Data = {
  isLoading: boolean
  banners: Image[]
  message: null
}

const initialState: Data = {
  isLoading: false,
  banners: [],
  message: null
}

const bannerSlice = createSlice({
  name: 'bannerSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBunnerImg.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBunnerImg.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.banners = action.payload
        }
        state.isLoading = false
        state.message = null
      })
      .addCase(getBunnerImg.rejected, (state) => {
        state.isLoading = false
      })
  }
})
export const actionBannerSlice = bannerSlice.actions

export default bannerSlice
