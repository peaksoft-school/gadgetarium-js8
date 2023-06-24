import { mainApi } from '../../config/instances'

export interface CountCompare {
  countCompare: {
    ['Ноутбук']: number
    ['Планшет']: number
    ['Смартфон']: number
    ['Смарт Часы']: number
  }
}

export type CountCompareResponse = {
  data: CountCompare
}

export const getCountCompareRequest = () => {
  return mainApi.get<CountCompareResponse>('/api/comparisons/countCompare')
}
