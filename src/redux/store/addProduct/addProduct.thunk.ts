import { createAsyncThunk } from '@reduxjs/toolkit'
import { addProductsRequest, uploadFileService } from '../../../api/add-product/addProductService'
import { AxiosError, isAxiosError } from 'axios'
import { AddProducts } from '../../../utils/constants/types'

export const uploadFile = createAsyncThunk(
  'products/addPdfFile',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await uploadFileService(payload)
      if (data.link !== undefined || null) {
        return data.link
      }
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

export const addProducts = createAsyncThunk(
  'products/addProducts',
  async (product: AddProducts, { rejectWithValue }) => {
    try {
      const images = product?.subProducts?.map((subProduct) => subProduct.images)
      const uploadedImages = []
      for (let i = 0; i < images[0].length; i++) {
        const formData = new FormData()
        const image = images[0][i]
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        formData.set('file', image)
        const { data } = await uploadFileService(formData)
        uploadedImages.push(data)
      }
      const imagesAsString = uploadedImages.map((data: any) => data.link)
      const transformedSubproducts = product.subProducts.map((subProduct) => ({
        ...subProduct,
        images: imagesAsString
      }))

      // const transformedSubproducts = await Promise.all(
      //   product.subProducts.map(async (sub) => {
      //     const promise = await Promise.all(
      //       sub.images.map(async (image) => {
      //         formData.set('file', image)
      //         const response = await uploadFileService(formData)
      //         return response
      //       })
      //     )
      //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //     const imagesAsString = promise.map((i: any) => i.data.link)
      //     return {
      //       ...sub,
      //       images: imagesAsString
      //     }
      //   })
      // )

      const { data } = await addProductsRequest({ ...product, subProducts: transformedSubproducts })
      if (data !== undefined || null) {
        return data
      }
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
