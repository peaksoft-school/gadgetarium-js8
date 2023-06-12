import { AddProducts } from '../../utils/constants/types'
import { fileInstance, mainApi } from '../instances'

export const addProductsRequest = (value: AddProducts) => {
  console.log(value)

  return mainApi.post('/api/admin/products', value)
}

export const uploadFileService = (value: any) => {
  return fileInstance.post('/api/s3_file/upload', { file: value })
}
