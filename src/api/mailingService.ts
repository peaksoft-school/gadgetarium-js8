import { MailingListType } from '../utils/constants/types'
import { mainApi } from './instances'

export const mailingData = (values: MailingListType) => {
  return mainApi.post('api/mailings_lists', values)
}
