import { mainApi } from '../instances'

export interface DiscountType {
  productsId: number[]
  percentOfDiscount: number | undefined
  dateOfStart: string
  dateOfFinish: string
}

export const postDiscountRequest = (discountData: DiscountType) => {
  return mainApi.post('/api/admin/discounts', discountData)
}
