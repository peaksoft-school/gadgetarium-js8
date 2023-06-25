import { createSlice } from '@reduxjs/toolkit'
type OrderIniteType = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
  deliveryType: boolean
  isCheckedTwo: boolean
  isCheckedOne: boolean
  payCardChecked: boolean
  payCardAfterChecked: boolean
  payCashChecked: boolean
  typePayment: 'BY_CARD_ONLINE' | 'BY_CARD_OFFLINE' | 'BY_CASH' | ''
}

const initialState: OrderIniteType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  deliveryType: false,
  isCheckedTwo: false,
  isCheckedOne: true,
  payCardChecked: false,
  payCardAfterChecked: false,
  payCashChecked: false,
  typePayment: ''
}

const userOrderSlice = createSlice({
  name: 'userorder',
  initialState,
  reducers: {
    saveOrderData(state, { payload }) {
      state.address = payload.address
      state.deliveryType = payload.deliveryType
      state.email = payload.email
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.phoneNumber = payload.phoneNumber
    },
    checkedCard(state, { payload }) {
      if (payload.isCheckedOne) {
        state.isCheckedOne = payload.isCheckedOne
        state.isCheckedTwo = false
        state.deliveryType = false
      } else if (payload.isCheckedTwo) {
        state.isCheckedTwo = payload.isCheckedTwo
        state.isCheckedOne = false
        state.deliveryType = true
      } else {
        state.isCheckedTwo = false
        state.isCheckedOne = false
        state.deliveryType = false
      }
    },
    checkedPaymentCard(state, { payload }) {
      if (payload.payCardChecked) {
        state.payCardChecked = payload.payCardChecked
        state.payCardAfterChecked = false
        state.payCashChecked = false
        state.typePayment = 'BY_CARD_ONLINE'
      } else if (payload.payCardAfterChecked) {
        state.payCardAfterChecked = payload.payCardAfterChecked
        state.payCashChecked = false
        state.payCardChecked = false
        state.typePayment = 'BY_CARD_OFFLINE'
      } else if (payload.payCashChecked) {
        state.payCashChecked = payload.payCashChecked
        state.payCardChecked = false
        state.payCardAfterChecked = false
        state.typePayment = 'BY_CASH'
      } else {
        state.payCardChecked = false
        state.payCardAfterChecked = false
        state.payCashChecked = false
        state.typePayment = ''
      }
    },
    clearOrder(state) {
      state.firstName = ''
      state.lastName = ''
      state.email = ''
      state.phoneNumber = ''
      state.address = ''
      state.deliveryType = false
      state.isCheckedTwo = false
      state.isCheckedOne = true
      state.payCardChecked = false
      state.payCardAfterChecked = false
      state.payCashChecked = false
      state.typePayment = ''
    }
  }
})
export const userOrderActions = userOrderSlice.actions

export default userOrderSlice
