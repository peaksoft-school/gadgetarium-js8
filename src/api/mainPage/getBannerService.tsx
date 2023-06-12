import { mainApi } from '../instances'

export const getBannerImagesService = () => {
  return mainApi.get('/api/banners')
}
