import { mainApi } from '../../config/instances'

export type ProductReviewsRatingResponseType = {
  five: number
  four: number
  three: number
  two: number
  one: number
  rating: number
  totalReviews: number
}

export const getProductReviewsRatingByIdRequest = (productId: number) => {
  return mainApi.get<ProductReviewsRatingResponseType>(`api/user/reviews/${productId}`)
}
