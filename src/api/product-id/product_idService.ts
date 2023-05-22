import { mainApi } from '../../config/instances'

export type ReviewType = {
  reviewsId: number
  image: string
  fullName: string
  createdAt: string
  grade: number
  commentary: string
  answer: string
}

export type ProductResponse = {
  productId: number
  subProductId: number
  logo: string
  images: string[]
  colours: string[]
  name: string
  quantity: number
  itemNumber: string
  rating: number
  countOfReviews: number
  color: string
  percentOfDiscount: number
  price: number
  oldPrice: number
  dateOfIssue: Date | null | string
  characteristics: {
    [key: string]: string
  }
  description: string
  video: string
}

export type ProductDetailsResponse = {
  id: number
  image: string
  name: string
  colour: string
  characteristics: {
    [key: string]: string
  }
  quantity: number
  price: number
}

export type ProductReviewsRatingResponseType = {
  five: number
  four: number
  three: number
  two: number
  one: number
  rating: number
  totalReviews: number
}

export type ProductIdRequestType = {
  productId: number
  colour?: string | null
}
export const getProductByIdRequest = ({ productId, colour }: ProductIdRequestType) => {
  return mainApi.get<ProductResponse>(
    `api/user/products/get-by-id?productId=${productId}&colour=${colour}`
  )
}

export const getProductReviewsRatingByIdRequest = (productId: number) => {
  return mainApi.get<ProductReviewsRatingResponseType>(`api/user/reviews/${productId}`)
}

export type ProductReviewsResquestType = { productId: number; page: number }

export const getProductReviewsByIdRequest = ({ productId, page }: ProductReviewsResquestType) => {
  return mainApi.get<ReviewType[]>(
    `api/user/products/get_all_reviews_by_product_id/${productId}?page=${page}`
  )
}

export type ProductReviewPostType = { reviewId: number; answer: string }

export const postProductReviewByIdRequest = ({ reviewId, answer }: ProductReviewPostType) => {
  return mainApi.post<ProductReviewPostType>(`api/reviews`, {
    reviewId,
    answer
  })
}

export const updateProductReviewAnswerByIdRequest = ({
  reviewId,
  answer
}: ProductReviewPostType) => {
  return mainApi.put<ProductReviewPostType>(`api/reviews`, {
    reviewId,
    answer
  })
}

export const getProductDetailsByIdRequest = (productId: number) => {
  return mainApi.get<ProductReviewsRatingResponseType>(
    `/api/admin/products/${productId}/product_details`
  )
}
