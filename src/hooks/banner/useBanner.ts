import React, { useState } from 'react'
import bannerData from '../../api/banner/bannerService'
import { AxiosError, isAxiosError } from 'axios'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { ImageUrlsType } from '../../utils/common/types'
import { mailingS3File } from '../../api/mail/mailingService'

export const useBanner = () => {
  const [bannerImages, setBannerImages] = useState<ImageUrlsType>([])
  const [images, setImages] = useState<string[]>([])
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
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      try {
        const formData = new FormData()
        formData.append('file', file) // Use 'file' as the key in the FormData object
        const response = await mailingS3File(formData)
        const url = response.data.link
        setBannerImages((prevState) => [...prevState, file])
        setImages((prevState) => [...prevState, url])
      } catch (e) {
        isRejectedWithValue(e)
      }
    }
  }

  const postRequestBanner = async () => {
    try {
      const newBannerList = {
        bannerList: images
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
