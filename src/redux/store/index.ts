import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
<<<<<<< HEAD
import { productsSlice } from './products/products.slice'
import { infographicsSlice } from './infographics/infographicsSlice'
=======
import { mailingSlice } from './mailingList/mailing.slice'
>>>>>>> 265afc4d79dd45549127bb363bcbd77b74c3fe3b

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
<<<<<<< HEAD
    [productsSlice.name]: productsSlice.reducer,
    [infographicsSlice.name]: infographicsSlice.reducer
=======
    [mailingSlice.name]: mailingSlice.reducer
>>>>>>> 265afc4d79dd45549127bb363bcbd77b74c3fe3b
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
