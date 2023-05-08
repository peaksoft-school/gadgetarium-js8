import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { bannerData } from '../../../api/banner/bannerService'
import { BannerListType } from '../../../utils/common/types'

export const postBannerList = createAsyncThunk(
  'bannerList/postData',
  async (values: BannerListType, { rejectWithValue }) => {
    try {
      const { data } = await bannerData(values)
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
