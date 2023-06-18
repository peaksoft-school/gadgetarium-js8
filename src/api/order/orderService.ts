/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainApi } from '../../config/instances'

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

export const getByIdProductOrderRequest = (orderId: string | null) => {
  return mainApi.get(`api/user/products/get-by-id?productId=${orderId}&colour=red`)
}
