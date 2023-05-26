import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { productsSlice } from './products/products.slice'
import { infographicsSlice } from './infographics/infographicsSlice'
import { mailingSlice } from './mailingList/mailing.slice'
import { addProductSlice } from './addProduct/AddProduct'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
<<<<<<< HEAD
    [mailingSlice.name]: mailingSlice.reducer,
    [addProductSlice.name]: addProductSlice.reducer
=======
    [productsSlice.name]: productsSlice.reducer,
    [infographicsSlice.name]: infographicsSlice.reducer,
    [mailingSlice.name]: mailingSlice.reducer
>>>>>>> 1b7b5cad4f3fa541e8cfb804c4d708be7bc6cbfc
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
