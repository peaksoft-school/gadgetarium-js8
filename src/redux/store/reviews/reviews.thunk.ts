import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import {
  deleteReviewByIdRequest,
  getFeedbackIngographicsRequest,
  getReviewsRequest,
  postReviewsRequest,
  updateRequest
} from '../../../api/reviews/reviewsService'

export const getAllReviews = createAsyncThunk(
  'reviews/getReviews',
  async (payload: string, { rejectWithValue }) => {
    try {
      const { data } = await getReviewsRequest(payload)
      if (data !== undefined || null) {
        return data
      }
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)

export const deleteReviewById = createAsyncThunk(
  'reviews/deleteReviews',
  async (payload: { id: number; page: string }, { dispatch, rejectWithValue }) => {
    try {
      await deleteReviewByIdRequest(payload.id)
      dispatch(getAllReviews(payload.page))
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)

export const postReviews = createAsyncThunk(
  'reviews/postReviews',
  async (payload: { id: number; page: string; answer: string }, { dispatch, rejectWithValue }) => {
    try {
      const postData = {
        reviewId: payload.id,
        answer: payload.answer
      }
      await postReviewsRequest(postData)
      dispatch(getAllReviews(payload.page))
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
export const updateReviews = createAsyncThunk(
  'reviews/updateReviews',
  async (payload: { id: number; page: string; answer: string }, { dispatch, rejectWithValue }) => {
    try {
      const postData = {
        reviewId: payload.id,
        answer: payload.answer
      }
      await updateRequest(postData)
      dispatch(getAllReviews(payload.page))
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)

export const getFeedbackInfographics = createAsyncThunk(
  'reviews/FeedbackInfographics',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getFeedbackIngographicsRequest()
      return data
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
