import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  errors: {
    message: null
  },
  isLoading: '',
  promiseMessage: null
}

export const mailingSlice = createSlice({
  name: 'mailingSlice',
  initialState,
  reducers: {},
  extraReducers: () => {}
})

export const mailingAction = mailingSlice.actions
