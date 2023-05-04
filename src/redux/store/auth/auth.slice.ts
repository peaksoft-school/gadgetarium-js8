import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhemltYmVrMUBnbWFpbC5jb20iLCJpYXQiOjE2ODMxNzU5OTUsImV4cCI6MTY4MzMxOTk5NX0.og960BJrjHsdQ_nhGQE2C3vARwKmrju2p1b0hHrP62g'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {}
})
export const authActions = authSlice.actions
