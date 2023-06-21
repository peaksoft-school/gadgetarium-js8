import { fileInstance, mainApi } from '../../config/instances'

export const addProductsRequest = (value: any) => {
  return mainApi.post('/api/admin/products', value)
}

export const uploadFileService = (value: any) => {
  return fileInstance.post('/api/s3_file/upload', value)
}
