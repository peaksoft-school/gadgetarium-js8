import { createAsyncThunk } from '@reduxjs/toolkit'

import { AxiosError, isAxiosError } from 'axios'
import { MailingListType } from '../../../utils/constants/types'
import { mailingData } from '../../../api/mail/mailingService'

export const postMailingList = createAsyncThunk(
  'mailingList/postData',
  async (values: MailingListType, { rejectWithValue }) => {
    try {
      const { data } = await mailingData(values)
      return data
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ httpStatus: string; message: string }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
