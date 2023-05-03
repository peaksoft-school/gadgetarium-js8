import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: 'http://ec2-52-28-80-102.eu-central-1.compute.amazonaws.com/api/mailing_lists'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {}
})
export const authActions = authSlice.actions
