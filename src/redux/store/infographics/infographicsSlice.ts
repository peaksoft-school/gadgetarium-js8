import { createSlice } from '@reduxjs/toolkit'
import { getInfographics } from './infographicsThunk'
import { InfographicsTypes } from '../../../api/infographics/infographicsService'

type InfographicsState = {
  items: InfographicsTypes
}

const initialState: InfographicsState = {
  items: {
    redeemedForTheAmount: 0,
    countRedeemed: 0,
    orderedForTheAmount: 0,
    countOrdered: 0,
    currentPeriod: 0,
    previousPeriod: 0
  }
}

export const infographicsSlice = createSlice({
  name: 'infographics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfographics.fulfilled, (state, { payload }) => {
      state.items = payload as unknown as InfographicsTypes
    })
  }
})
