import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {}
})
export const authActions = authSlice.actions
