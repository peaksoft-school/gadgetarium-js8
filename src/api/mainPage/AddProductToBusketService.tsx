import { mainApi } from '../../config/instances'

export const AddProductToBasketService = (id: number) => {
  return mainApi.post(`api/baskets/save?quantity=1&subProductId=${id}`)
}

export const AddProductToComparisonsService = () => {
  return mainApi.post(`api/comparisons/save?id=1&kurstan=true`)
}

export const getAllBusketProductService = () => {
  return mainApi.get('/api/baskets')
}
