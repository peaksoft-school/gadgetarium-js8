/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainApi } from '../../config/instances'
export type UserOrderProductType = {
  productsIdAndQuantity: {
    additionalProp1: number
    additionalProp2: number
    additionalProp3: number
  }
  deliveryType: boolean
  customerInfo: {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    address: string
  }
  paymentType: 'BY_CARD_ONLINE' | 'BY_CARD_OFFLINE' | 'BY_CASH' | ''
}
export interface Order {
  countOfElements: number
  elements: {
    id: number
    fullName: string
    orderNumber: string
    date: string
    quantity: number
    totalPrice: number
    deliveryType: boolean
    status: string
  }[]
  currentPage: number
  totalPages: number
}

export type AllOrdersResponse = Order

export const getAllOrdersRequest = (queryParams: any) => {
  return mainApi.get<AllOrdersResponse>('api/admin/orders', {
    params: {
      keyWord: queryParams.keyWord,
      status: queryParams.status,
      from: queryParams.from,
      before: queryParams.before,
      page: queryParams.page,
      pageSize: queryParams.pageSize
    }
  })
}

export const deleteOrderByIdRequest = (id: number | null) => {
  return mainApi.delete<AllOrdersResponse>(`api/admin/orders/${id}`)
}

export const postOrderStatusRequest = (dataStatus: {
  id: number | null
  status: string | null
}) => {
  return mainApi.post(`api/admin/orders?orderId=${dataStatus.id}&status=${dataStatus.status}`)
}

export const getByIdProductOrderRequest = (orderId: number | null) => {
  return mainApi.get(`api/admin/orders/${orderId}`)
}

export const getSecretKeyOfPaymentRequest = () => {
  return mainApi.get(`api/user/stripe/public_key`)
}
export const postAmountOfOrder = (amount: number) => {
  return mainApi.post(`api/user/stripe/create-payment-intent`, { amount: amount })
}
export const postOrderedProductRequest = (product: any) => {
  return mainApi.post(`api/user/orders`, product)
}
