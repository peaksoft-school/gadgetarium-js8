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
  return mainApi.post(`api/favourites/${id}?addOrDelete=true`)
}

export const moveToFavoritesByChoosenIdRequest = (productIds: number[]) => {
  return mainApi.post(`api/favourites/move_to_favorites`, productIds)
}
