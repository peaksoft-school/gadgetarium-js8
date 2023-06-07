/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainApi } from '../instances'

export interface Order {
  foundProducts: number
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
  return mainApi.get<AllOrdersResponse>('/api/admin/orders', {
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

export const deleteOrderByIdRequest = (id: number) => {
  return mainApi.delete<AllOrdersResponse>(`/api/admin/orders/${id}`)
}