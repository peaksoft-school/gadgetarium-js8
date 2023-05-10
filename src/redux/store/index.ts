import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { productsSlice } from './products/products.slice'
import { infographicsSlice } from './infographics/infographicsSlice'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [productsSlice.name]: productsSlice.reducer,
    [infographicsSlice.name]: infographicsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
