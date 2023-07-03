import { createSlice } from '@reduxjs/toolkit'
import { getAllBasket } from './basket.thunk'
export type DataType = {
  description: string
  image: string
  itemNumber: number
  name: string
  numberOfReviews: number
  price: number
  productId: number
  quantity: number
  rating: number
  subProductId: number
  checked: boolean
  quantityProduct: number
  totalPrice: number
  percent: number
  discount: number
  inFavorites: boolean
}
export type ItemType = DataType[]
export type InitType = {
  items: ItemType
  checkedAll: boolean | undefined
  totalSum: number
  totalQuantity: number
  totalDiscount: number
  sumPrice: number
  isLoading: boolean
  openModal: boolean
  orderNumber: string
}
const initialState: InitType = {
  items: [],
  checkedAll: false,
  totalSum: 0,
  totalQuantity: 0,
  totalDiscount: 0,
  sumPrice: 0,
  isLoading: false,
  openModal: false,
  orderNumber: ''
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increment(state, { payload }) {
      state.items.map((item) => {
        if (item.subProductId === payload.subProductId) {
          item.quantityProduct = payload.productQuantity
          item.totalPrice = item.price * payload.productQuantity
          if (item.percent > 0) {
            item.discount = ((item.price * item.percent) / 100) * payload.productQuantity
          }
        } else {
          item.totalPrice = item.price * item.quantityProduct
          if (item.percent > 0) {
            item.discount = ((item.price * item.percent) / 100) * item.quantityProduct
          }
        }
      })
    },
    decrement(state, { payload }) {
      state.items.map((item) => {
        if (item.subProductId === payload.subProductId) {
          item.totalPrice = item.price * payload.productQuantity
          item.quantityProduct = payload.productQuantity
          if (item.percent > 0) {
            item.discount = ((item.price * item.percent) / 100) * payload.productQuantity
          }
        } else {
          item.totalPrice = item.price * item.quantityProduct
          if (item.percent > 0) {
            item.discount = ((item.price * item.percent) / 100) * item.quantityProduct
          }
        }
      })
    },
    toggleCheckbox(state, { payload }) {
      if (payload.id === 'allSelect') {
        state.items = state.items.map((item) => ({
          ...item,
          checked: payload.checked
        }))
        state.checkedAll = payload.checked
      } else {
        state.items = state.items.map((item) => {
          if (item.subProductId === payload.id) {
            return {
              ...item,
              checked: payload.checked
            }
          }
          return item
        })
        const allItemsSelected = state.items.every((item) => item.checked)
        state.checkedAll = allItemsSelected
      }
    },
    calculateSum(state) {
      const sumPrice = state.items.reduce((sum, product) => {
        return sum + product.totalPrice
      }, 0)
      const sumQuantity = state.items.reduce((sum, product) => {
        return sum + product.quantityProduct
      }, 0)
      const discountSum = state.items.reduce((sum, product) => {
        return sum + product.discount
      }, 0)
      state.totalQuantity = sumQuantity
      state.sumPrice = sumPrice
      state.totalDiscount = discountSum
      state.totalSum = sumPrice - discountSum
    },
    openModalSuccess(state, { payload }) {
      state.openModal = payload.openModal
    },
    getOrderNumber(state, { payload }) {
      state.orderNumber = payload
    }
  },

  extraReducers(builder) {
    builder.addCase(getAllBasket.fulfilled, (state, { payload }) => {
      state.items = payload?.dataItem
      state.checkedAll = payload?.checkedAll
      state.isLoading = false
    })
    builder.addCase(getAllBasket.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const basketActions = basketSlice.actions
