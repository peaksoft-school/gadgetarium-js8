import { mainApi } from '../../config/instances'

export const getFavouritesRequest = () => {
  return mainApi.get(`api/favourites`)
}

export const deleteFavouritesRequest = () => {
  return mainApi.delete(`api/favourites`)
}

export const postFavouritesRequest = (postData: { id: number; isFavourite: boolean }) => {
  return mainApi.post(`api/favourites/${postData.id}?addOrDelete=${postData.isFavourite}`)
}
export const postToComparisonRequest = (compareData: { id: number; isCompare: boolean }) => {
  return mainApi.post(`api/comparisons/save?id=${compareData.id}&kurstan=${compareData.isCompare}`)
}
