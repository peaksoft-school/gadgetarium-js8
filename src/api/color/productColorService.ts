import { mainApi } from '../../config/instances'

export interface ProductColor {
  hexCode: string
  colorName: string
}

type AllProductsColorsResponse = {
  data: ProductColor[]
}

export const getAllProductsColorsRequest = () => {
  return mainApi.get<AllProductsColorsResponse>('/api/admin/products/colors')
}
