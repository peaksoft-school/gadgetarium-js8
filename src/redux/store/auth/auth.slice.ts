import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhemltYmVrMUBnbWFpbC5jb20iLCJpYXQiOjE2ODMxOTYyNzIsImV4cCI6MTY4MzM0MDI3Mn0.P7PoayHDNz-vS7jkTqNWQ8mKbynjre9CoduDldD6o1E'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {}
})
export const authActions = authSlice.actions
