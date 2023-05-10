import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhemltYmVrMUBnbWFpbC5jb20iLCJpYXQiOjE2ODM3MTMxOTksImV4cCI6MTY4Mzg1NzE5OX0.ZKD7yN8RkzU-woB7w3iUEn7qR7WK-QLVuMuxeca5CNE'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {}
})
export const authActions = authSlice.actions
