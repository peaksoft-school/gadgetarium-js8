import { createSlice } from '@reduxjs/toolkit'
import { getProductBrandAndSubCategories } from './getCategories.thunk'

export interface SelectOptionsCategorie {
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
  products: any
  loading: boolean
  error: string | null
  subProduct: object
}

const initialState: SelectOptionsCategorie = {
  options: {
    subCategories: [],
    brands: []
  },
  products: [],
  loading: false,
  error: '',
  subProduct: {}
}

export const addProductSlice = createSlice({
  name: 'addNewProduct',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload)
    },
    addSubProduct: (state, action) => {
      state.subProduct = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductBrandAndSubCategories.fulfilled, (state, action) => {
      state.options = action.payload
      state.loading = false
      state.error = ''
    })
    builder.addCase(getProductBrandAndSubCategories.pending, (state) => {
      state.loading = true
    })
  }
})
export const addProductActions = addProductSlice.actions
