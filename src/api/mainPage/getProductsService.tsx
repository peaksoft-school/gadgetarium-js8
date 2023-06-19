import { mainApi } from '../../config/instances'

export const getNewProductService = (showAllNewProduct: number) => {
  return mainApi.get(`/api/user/products/new?pageSize=${showAllNewProduct}`)
}

export const getRecommendedProductService = (showAllRecomendProduct: number) => {
  return mainApi.get(`/api/user/products/recommended?pageSize=${showAllRecomendProduct}`)
}

export const getDiscountProductService = (showAllProduct: number) => {
  return mainApi.get(`/api/user/products/discount?pageSize=${showAllProduct}`)
}

export const getAllProductService = (params: any) => {
  return mainApi.get('/api/search', {
    params
  })
}
