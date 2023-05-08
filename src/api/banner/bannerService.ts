import { BannerListType } from '../../utils/common/types'
import { mainApi } from '../../config/instances'

export const bannerData = (values: BannerListType) => {
  return mainApi.post('api/banners', values)
}
