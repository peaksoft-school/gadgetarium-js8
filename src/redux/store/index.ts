import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { productsSlice } from './products/products.slice'
import { infographicsSlice } from './infographics/infographicsSlice'
import { mailingSlice } from './mailingList/mailing.slice'
import { addProductSlice } from './addProduct/AddProduct'
import { reviewsSlice } from './reviews/reviews.slice'
import { basketSlice } from './basket/basket.slice'
import { getProductSlice } from './userMainPage/getProduct.slice'
import searchSlice from './userMainPage/search.slice'
import { favouritesSlice } from './favourites/favourites.slice'
import { productsColorSlice } from './color/productColor.slice'
import { compareProductsSlice } from './compare-products/compareProducts.slice'
import { countCompareSlice } from './compare-products/count-compare/countCompare.slice'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [mailingSlice.name]: mailingSlice.reducer,
    [addProductSlice.name]: addProductSlice.reducer,
    [productsSlice.name]: productsSlice.reducer,
    [infographicsSlice.name]: infographicsSlice.reducer,
    [mailingSlice.name]: mailingSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [getProductSlice.name]: getProductSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
    [favouritesSlice.name]: favouritesSlice.reducer,
    [productsColorSlice.name]: productsColorSlice.reducer,
    [compareProductsSlice.name]: compareProductsSlice.reducer,
    [countCompareSlice.name]: countCompareSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
