import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getFeedbackIngographicsRequest } from '../../api/reviews/reviewsService'
import { AxiosError, isAxiosError } from 'axios'
import { isRejectedWithValue } from '@reduxjs/toolkit'

export const useReviewsTable = () => {
  const initStateRatingData = {
    five: 0,
    four: 0,
    three: 0,
    two: 0,
    one: 0
  }
  const [openTooltip, setOpenTooltip] = useState<boolean>(false)
  const [ratingData, setRatingData] = useState(initStateRatingData)
  const { reviewResponses } = useSelector((state: RootState) => state.reviews)
  const getFeedbackInfographic = async () => {
    try {
      const { data } = await getFeedbackIngographicsRequest()
      if (data !== null) {
        setRatingData(data)
      }
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        return isRejectedWithValue(error.response?.data.message)
      }
    }
  }

  const openTooltipHandler = () => {
    setOpenTooltip(true)
  }
  const handleTooltipClose = () => {
    setOpenTooltip(false)
  }

  const sumOfRatings = () => {
    if (ratingData !== null) {
      return ratingData.five + ratingData.four + ratingData.three + ratingData.two + ratingData.one
    }
  }

  return {
    sumOfRatings,
    handleTooltipClose,
    openTooltipHandler,
    getFeedbackInfographic,
    reviewResponses,
    openTooltip,
    ratingData
  }
}
