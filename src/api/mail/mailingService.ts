import { MailingListType } from '../../utils/common/types'
import { mainApi } from '../../config/instances'

export const mailingData = (values: MailingListType) => {
  return mainApi.post('api/mailing_lists', values)
}
