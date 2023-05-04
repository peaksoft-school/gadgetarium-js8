import { MailingListType } from '../utils/constants/types'
import { mainApi } from './instances'

export const mailingData = (values: MailingListType) => {
  return mainApi.post('api/mailing_lists', values)
}
