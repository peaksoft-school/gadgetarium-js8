import { mainApi } from '../../config/instances'

export interface CompareProducts {
  productId: number
  subProductId: number
  img: string
  name: string
  description: string
  price: number
  brandName: string
  screen: string
  color: string
  operatingSystem: string
  memory: string
  weight: string
  simCard: string
}

export type QueryType = {
  categoryName: string
}

export type AllCompareProductsResponse = {
  data: CompareProducts[]
}

export const getCompareProducts = (queryParams: QueryType) => {
  return mainApi.get<AllCompareProductsResponse>('/api/comparisons/compare-product', {
    params: {
      categoryName: queryParams.categoryName
    }
  })
}

export const deleteCompareProductRequest = () => {
  return mainApi.delete<AllCompareProductsResponse>(`/api/comparisons/`)
}
