import { mainApi } from '../../config/instances'

export const getBannerImagesService = () => {
  return mainApi.get('/api/banners')
}
