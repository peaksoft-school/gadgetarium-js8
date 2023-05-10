/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainApi } from '../instances'

export interface Product {
  foundProducts: number
  elements: [
    {
      createdAt: string
      image: string
      itemNumber: number
      name: string
      percentOfDiscount: number
      price: number
      quantity: number
      subProductId: number
      totalPrice: number
    }
  ]
  currentPage: number
  totalPages: number
}

type AllProductsResponse = {
  data: Product
}

const getAllProductsRequest = (queryParams: any) => {
  return mainApi.get<AllProductsResponse>('/api/admin/products', {
    params: {
      status: queryParams.status,
      page: queryParams.page,
      pageSize: queryParams.pageSize,
      sortBy: queryParams.sortBy,
      from: queryParams.from,
      before: queryParams.before
    }
  })
}

const deleteProductById = (id: number) => {
  return mainApi.delete<AllProductsResponse>(`/api/admin/products/${id}`)
}

export default {
  getAllProductsRequest,
  deleteProductById
}
