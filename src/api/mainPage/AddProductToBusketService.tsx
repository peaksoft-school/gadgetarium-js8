import { mainApi } from '../../config/instances'

export const AddProductToBasketService = (id: number) => {
  return mainApi.post(`api/baskets/save?quantity=1&subProductId=${id}`)
}

export const AddProductToComparisonsService = (dataComparisons: {
  id: number
  inComparisons: boolean
}) => {
  return mainApi.post(
    `api/comparisons?id=${dataComparisons.id}&addOrDelete=${dataComparisons.inComparisons}`
  )
}

export const AddProductToFavouritesService = (dataFavourites: {
  id: number
  isFavorites: boolean
}) => {
  return mainApi.post(
    `api/favourites/${dataFavourites.id}?addOrDelete=${dataFavourites.isFavorites}`
  )
}

export const getAllBusketProductService = () => {
  return mainApi.get('/api/baskets')
}
