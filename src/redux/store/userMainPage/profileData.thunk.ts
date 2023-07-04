import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRecommendedProductService } from '../../../api/mainPage/getProductsService'
import { AxiosError, isAxiosError } from 'axios'
import { getProfileDataRequest } from '../../../api/personalAccount/profile/ProfileServer'

export const getDataProfileThunk = createAsyncThunk(
  'profileData/getDataProfile',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getProfileDataRequest()
      return data
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        return rejectWithValue(error.response?.data.message)
      }
      return rejectWithValue('Something went wrong')
    }
  }
)
