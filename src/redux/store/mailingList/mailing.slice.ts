import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {
    image: '',
    name: '',
    description: '',
    dateOfStart: '',
    dateOfFinish: ''
  }
}

export const mailingSlice = createSlice({
  name: 'mailingSlice',
  initialState,
  reducers: {}
})

export const mailingAction = mailingSlice.actions
