/* eslint-disable @typescript-eslint/no-explicit-any */
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
      state.products = [payload]
      state.subProduct = {}
    },
    addSubProduct: (state, action) => {
      state.subProduct = action.payload
    },
    addPriceToSubProduct: (state, action) => {
      state.products = state.products.map((product: any) => {
        if (product.id === action.payload.id) {
          const updatedSubProducts = product.subProducts.map((subProduct: any) => {
            if (subProduct.id === action.payload.subProductId) {
              return { ...subProduct, price: action.payload.price }
            }
            return subProduct
          })
          return { ...product, subProducts: updatedSubProducts }
        }
        return product
      })
    },
    addPriceToAllProducts: (state, action) => {
      state.products = state.products.map((product: any) => {
        const updatedSubProducts = product.subProducts.map((subProduct: any) => {
          return { ...subProduct, price: action.payload }
        })
        return { ...product, subProducts: updatedSubProducts }
      })
    },
    addQuantityToSubProduct: (state, action) => {
      state.products = state.products.map((product: any) => {
        if (product.id === action.payload.id) {
          const updatedSubProducts = product.subProducts.map((subProduct: any) => {
            if (subProduct.id === action.payload.subProductId) {
              return { ...subProduct, quantity: action.payload.quantity }
            }
            return subProduct
          })
          return { ...product, subProducts: updatedSubProducts }
        }
        return product
      })
    },
    addQuantityToAllProducts: (state, action) => {
      state.products = state.products.map((product: any) => {
        const updatedSubProducts = product.subProducts.map((subProduct: any) => {
          return { ...subProduct, quantity: action.payload }
        })
        return { ...product, subProducts: updatedSubProducts }
      })
    },
    addDescriptionToProducts: (state, action) => {
      state.products = state.products.map((product: object) => {
        return { ...product, description: action.payload.description }
      })
    },
    addVideoLinkToProducts: (state, action) => {
      state.products = state.products.map((product: object) => {
        return { ...product, video: action.payload.videoLink }
      })
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
