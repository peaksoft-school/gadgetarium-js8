import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { MailingListType } from '../../../utils/common/types'
import { mailingData, mailingS3File } from '../../../api/mail/mailingService'
import { ImgUrl } from '../../../layout/user/personalAccount/Profile'
import { postImage } from '../../../api/personalAccount/profile/ProfileServer'

export const postMailingList = createAsyncThunk(
  'mailingList/postData',
  async (values: MailingListType, { rejectWithValue }) => {
    try {
      await mailingData(values)

      values.snackbar('Product successully created!!', 'success')
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ httpStatus: string; message: string }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
export const postProfileImg = createAsyncThunk(
  'profileImg/postProfileImg',
  async (values: ImgUrl, { rejectWithValue }) => {
    try {
      await postImage(values)
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ httpStatus: string; message: string }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
export const postS3fileImage = createAsyncThunk(
  's3file/postS3fileImage',
  async (image: FormData, { rejectWithValue }) => {
    try {
      const { data } = await mailingS3File(image)
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
