import { createSlice } from '@reduxjs/toolkit'
import { getSearch } from './search.thunk'
import { getDataProfileThunk } from './profileData.thunk'

const initialState = {
  dataProfile: { image: '', firstName: '', lastName: '', phoneNumber: '', email: '', address: '' }
}
const dataProfileSlice = createSlice({
  name: 'dataProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataProfileThunk.fulfilled, (state, action) => {
      state.dataProfile = action.payload.data
    })
  }
})
export const searchSliceAction = dataProfileSlice.actions
export default dataProfileSlice
