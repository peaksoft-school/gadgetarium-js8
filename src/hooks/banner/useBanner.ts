import React, { useState } from 'react'
import bannerData from '../../api/banner/bannerService'
import { AxiosError, isAxiosError } from 'axios'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { ImageUrlsType } from '../../utils/common/types'

export const useBanner = () => {
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
      const reader = new FileReader()

      reader.onload = () => {
        const imageUrl = reader.result as string
        setBannerImages((prevState) => [...prevState, imageUrl])
      }
      event.target.value = ''
      reader.readAsDataURL(file)
    }
  }

  const postRequestBanner = async () => {
    try {
      const newBannerList = {
        bannerList: bannerImages
      }
      await bannerData(newBannerList)
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