import { createSlice } from '@reduxjs/toolkit'
import { BannerListType } from '../../../utils/common/types'

const initialState: BannerListType = {
  bannerList: []
}

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    addItemImage(state, { payload }) {
      state.bannerList.push(payload)
    },
    deleteImage(state, { payload }) {
      state.bannerList = state.bannerList.filter((_, index) => index !== payload)
    },
    deleteImageAll(state, { payload }) {
      state.bannerList = payload
    }
  }
})

export const bannerAction = bannerSlice.actions
