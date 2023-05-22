import { createAsyncThunk } from '@reduxjs/toolkit'
import { postDiscountRequest, DiscountType } from '../../../api/discount/discountService'

export const discountPost = createAsyncThunk(
  'discount/postDiscount',
  async (discountData: DiscountType, { rejectWithValue }) => {
    try {
      await postDiscountRequest(discountData)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
