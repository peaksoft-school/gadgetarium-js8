// import { createSlice } from '@reduxjs/toolkit'

// export interface SecondPart {
//   price: number | null
//   quantity: number | null
// }

// const initialState: SecondPart = {
//   price: null,
//   quantity: null
// }

// export const secondPart = createSlice({
//   name: 'secondPart',
//   initialState,
//   reducers: {
//     addProduct: (state, { payload }) => {
//       state.products.push(payload)
//     },
//     addSubProduct: (state, action) => {
//       state.subProduct = action.payload
//     }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getProductBrandAndSubCategories.fulfilled, (state, action) => {
//       state.options = action.payload
//       state.loading = false
//       state.error = ''
//     })
//     builder.addCase(getProductBrandAndSubCategories.pending, (state) => {
//       state.loading = true
//     })
//     // builder.addCase(getProductCategories.rejected, (state, action) => {
//     //   state.error = action.payload
//     // })
//   }
// })
// export const addProductActions = secondPart.actions
