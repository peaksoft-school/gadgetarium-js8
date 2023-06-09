import { mainApi } from '../../config/instances'

export const getBasketRequest = () => {
  return mainApi.get(`api/baskets`)
}
export const deleteBasketByIdRequest = (id: number) => {
  return mainApi.delete(`api/baskets/${id}`)
}
export const deleteBasketByChoosenIdRequest = (subProductsId: number[]) => {
  const requestData = {
    subProductsId: subProductsId
  }
  return mainApi.delete(`api/baskets/delete_all`, { data: requestData })
}

export const moveToFavoritesByIdRequest = (id: number) => {
  return mainApi.post(`api/baskets/move_to_favorites_by_id?id=${id}`)
}

export const moveToFavoritesByChoosenIdRequest = (productIds: number[]) => {
  return mainApi.post(`api/baskets/move_to_favorites`, productIds)
}
export const postBasketRequest = (product: { quantity: number; subproductId: number }) => {
  return mainApi.post(
    `api/baskets/save?quantity=${product.quantity}&subProductId=${product.subproductId}`
  )
}
