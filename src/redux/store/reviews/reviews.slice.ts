/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import { getAllReviews } from './reviews.thunk'
import { ReviewType } from '../../../api/reviews/reviewsService'

type ItemType = {
  count: number
  reviewResponses: ReviewType
}

const initialState: ItemType = {
  reviewResponses: [
    {
      id: 0,
      productImg: '',
      productItemNumber: 0,
      productName: '',
      commentary: '',
      grade: 0,
      answer: '',
      images: [],
      userName: '',
      userEmail: '',
      userImg: '',
      date: ''
    }
  ],
  count: 0
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllReviews.fulfilled, (state, { payload }: { payload: any }) => {
      state.reviewResponses = payload.reviewResponses
      state.count = payload.count
    })
  }
})

export const reviewsActions = reviewsSlice.actions
