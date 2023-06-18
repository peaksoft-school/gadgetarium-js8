/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import { getAllReviews, updateReviews } from './reviews.thunk'
import { ReviewType } from '../../../api/reviews/reviewsService'

type ItemType = {
  count: number
  reviewResponses: ReviewType
  error: string
  isLoading: boolean
}

const initialState: ItemType = {
  reviewResponses: [],
  count: 0,
  error: '',
  isLoading: false
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllReviews.fulfilled, (state, { payload }: { payload: any }) => {
      state.reviewResponses = payload.reviewResponses
      state.count = payload.count
      state.error = ''
      state.isLoading = false
    })
    builder.addCase(updateReviews.rejected, (state, { payload }: { payload: any }) => {
      state.error = payload
    })
    builder.addCase(getAllReviews.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const reviewsActions = reviewsSlice.actions
