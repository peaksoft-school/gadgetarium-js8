import { mainApi } from '../../config/instances'

export interface Product {
  countOfElements: number
  elements: [
    {
      createdAt: string
      image: string
      itemNumber: number
      name: string
      percentOfDiscount: number
      price: number
      quantity: number
      productId: number
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

export type ProductQueryParams = {
  keyWord: string | null
  status: string | null
  page: number | null
  pageSize: number | null
  sortBy: string | null
  from: string | null
  before: string | null
}

export const getAllProductsRequest = (queryParams: ProductQueryParams) => {
  return mainApi.get<AllProductsResponse>('/api/admin/products', {
    params: {
      keyWord: queryParams.keyWord,
      status: queryParams.status,
      page: queryParams.page,
      pageSize: queryParams.pageSize,
      sortBy: queryParams.sortBy,
      from: queryParams.from,
      before: queryParams.before
    }
  })
}

export const deleteProductByIdRequest = (ids: number[]) => {
  return mainApi.delete<AllProductsResponse>(`/api/admin/products?subProductIds=${ids}`)
}

export const deleteProductByIdRequest2 = (subProductId: number) => {
  return mainApi.delete<AllProductsResponse>(`/api/admin/products?subProductIds=${subProductId}`)
}
