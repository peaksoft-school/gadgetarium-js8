import { mainApi } from '../../../config/instances'
import { ImgUrl, PasswordType, Userdata } from '../../../layout/user/personalAccount/Profile'

export const updateProfile = (values: Userdata) => {
  return mainApi.put('/api/profile', values)
}
export const postImage = (values: ImgUrl) => {
  return mainApi.post('/api/profile', values)
}
export const updatePassword = (values: PasswordType) => {
  return mainApi.put('/api/profile/reset-password', values)
}
export const getProfileDataRequest = () => {
  return mainApi.get('/api/profile')
}
