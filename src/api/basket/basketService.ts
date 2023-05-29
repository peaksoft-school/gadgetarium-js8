import { mainApi } from '../instances'

export const getBasketRequest = () => {
  return mainApi.get(`/api/basket/basket?page=1&pageSize=5`)
}
