import { mainApi } from '../../config/instances'

const bannerData = (values: { bannerList: string[] }) => {
  return mainApi.post('api/banners', values)
}

export default bannerData
