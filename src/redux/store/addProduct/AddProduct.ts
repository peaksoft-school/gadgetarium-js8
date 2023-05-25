import { createSlice } from '@reduxjs/toolkit'
import { getProductBrandAndSubCategories } from './getCategories.thunk'

interface SelectOptionsCategorie {
  options: {
    subCategories: {
      name: string
      id: number
    }[]
    brands: {
      name: string
      id: number
      logo: string
    }[]
  }
  loading: boolean
  error: string | null
}

const initialState: SelectOptionsCategorie = {
  options: {
    subCategories: [],
    brands: []
  },
  loading: false,
  error: ''
}

export const addProductSlice = createSlice({
  name: 'addNewProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductBrandAndSubCategories.fulfilled, (state, action) => {
      state.options = action.payload
      state.loading = false
      state.error = ''
    })
    builder.addCase(getProductBrandAndSubCategories.pending, (state) => {
      state.loading = true
    })
    // builder.addCase(getProductCategories.rejected, (state, action) => {
    //   state.error = action.payload
    // })
  }
})
export const addProductActions = addProductSlice.actions
