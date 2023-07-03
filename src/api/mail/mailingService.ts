import { MailingListType } from '../../utils/common/types'
import { mainApi } from '../../config/instances'
import { fileApi } from '../../config/fileInstance'
export type Email = {
  userEmail: string
}
export const mailingData = (values: MailingListType) => {
  return mainApi.post('api/mailing_lists', values)
}

export const mailingS3File = (image: FormData) => {
  return fileApi.post('api/s3_file/upload', image)
}
export const mailingSubcribe = (data: Email) => {
  return mainApi.post('api/mailing_lists/subscribe', data)
}
