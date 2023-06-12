import { mainApi } from '../instances'

export const getNewProductService = (showAllNewProduct: any) => {
  return mainApi.get(`/api/user/products/new?pageSize=${showAllNewProduct}`)
}

export const getRecommendedProductService = (showAllRecomendProduct: any) => {
  return mainApi.get(`/api/user/products/recommended?pageSize=${showAllRecomendProduct}`)
}

export const getDiscountProductService = (showAllProduct: any) => {
  return mainApi.get(`/api/user/products/discount?pageSize=${showAllProduct}`)
}
