import { PostBrandType } from '../../utils/constants/types'
import { mainApi } from '../../config/instances'

export const getProductBrandAndSubCategorieService = (id: string | number) => {
  return mainApi.get(`/api/admin/products/get_all/${id}/brands_and_sub_categories`)
}

export const getProductCategorieService = () => {
  return mainApi.get('/api/admin/products/get_all/categories')
}

export const postBrand = (values: PostBrandType) => {
  return mainApi.post('/api/admin/products/add_brand', values)
}
