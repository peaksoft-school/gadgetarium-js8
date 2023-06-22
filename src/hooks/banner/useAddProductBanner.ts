import React, { useState } from 'react'
import { AxiosError, isAxiosError } from 'axios'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { ImageUrlsType } from '../../utils/common/types'
import { uploadFileService } from '../../api/add-product/addProductService'

export const useAddProductBanner = () => {
  const [bannerImages, setBannerImages] = useState<ImageUrlsType>([])
  const imagesClassname = () => {
    if (bannerImages.length === 1) {
      return 'first-image'
    } else if (bannerImages.length === 2) {
      return 'second-image'
    } else if (bannerImages.length === 3) {
      return 'third-image'
    } else if (bannerImages.length === 4) {
      return 'fourth-image'
    } else if (bannerImages.length === 5) {
      return 'fifth-image'
    } else if (bannerImages.length === 6) {
      return 'sixth-image'
    }
  }
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setBannerImages((prevState) => [...prevState, file])
    }
  }

  const postRequestBanner = async () => {
    try {
      const imageResponse = await uploadFileService(bannerImages)
      const newBannerList = imageResponse.data.link
      setBannerImages(newBannerList)
      return newBannerList
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ httpStatus: string; message: string }>
        return isRejectedWithValue(error.response?.data.message)
      }
    }
  }

  const disableButtonHandler = () => {
    return bannerImages.length <= 0
  }
  const deleteImage = (id: number) => {
    const updatedBannerImages = bannerImages.filter((_, index) => index !== id)
    setBannerImages(updatedBannerImages)
  }
  return {
    imagesClassname,
    postRequestBanner,
    handleImageUpload,
    disableButtonHandler,
    deleteImage,
    bannerImages,
    setBannerImages
  }
}
