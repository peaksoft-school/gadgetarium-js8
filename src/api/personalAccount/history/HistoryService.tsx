import { mainApi } from '../../../config/instances'

export const getOrderHistoryRequest = () => {
  return mainApi.get('/api/order_history')
}
export const deletetOrderHistoryByIdRequest = () => {
  return mainApi.delete(`api/order_history/delete`)
}
